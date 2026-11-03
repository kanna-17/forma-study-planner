import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUp, CalendarPlus, Check, ListOrdered, Pencil, Plus, Route, X } from 'lucide-react';

const colors = [
  ['Iris', '#5946b2'], ['Indigo', '#40337d'], ['Violet', '#7660bd'],
  ['Lavender', '#8878b9'], ['Plum', '#70528e'], ['Lilac', '#7867ad']
];

function parseOutline(text) {
  const topics = [];
  let phase = '';
  let needsTopic = false;
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.trim();
    if (!line) continue;
    const heading = line.match(/^#{1,6}\s+(.+)$/);
    if (heading) {
      if (needsTopic) throw new Error(`Add a topic under “${phase}”.`);
      phase = heading[1].trim();
      needsTopic = true;
    } else {
      const title = line.replace(/^(?:[-*•]|\d+[.)])\s+/, '').trim();
      topics.push({ title, phase, subtopic: '', priority: 'Normal', status: 'pending' });
      needsTopic = false;
    }
  }
  if (needsTopic) throw new Error(`Add a topic under “${phase}”.`);
  return topics;
}

export function RoadmapForm({ roadmap, subjects, onClose, onSave }) {
  const [name, setName] = useState(roadmap?.name || '');
  const [color, setColor] = useState(roadmap?.color || colors[0][1]);
  const [outline, setOutline] = useState('');
  const [error, setError] = useState('');
  const dialog = useRef(null);
  useEffect(() => {
    const element = dialog.current;
    element.showModal();
    return () => element.close();
  }, []);
  function submit(event) {
    event.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return setError('Give your roadmap a name.');
    if (subjects.some(s => s.id !== roadmap?.id && s.name.trim().toLowerCase() === trimmed.toLowerCase())) {
      return setError('A roadmap with that name already exists.');
    }
    try {
      const topics = parseOutline(outline);
      onSave({ name: trimmed, color }, topics);
    } catch (err) {
      setError(err.message);
    }
  }
  return <dialog ref={dialog} className="roadmap-dialog" aria-labelledby="roadmap-form-title"
    onCancel={e => { e.preventDefault(); onClose(); }} onClick={e => e.target === e.currentTarget && onClose()}>
    <form className="modal roadmap-form" onSubmit={submit}>
      <div className="modal-head">
        <div><span className="eyebrow">LEARNING ROADMAP</span><h2 id="roadmap-form-title">{roadmap ? 'Edit roadmap' : 'New roadmap'}</h2></div>
        <button type="button" className="icon-btn" aria-label="Close roadmap form" onClick={onClose}><X size={18}/></button>
      </div>
      <label className="field"><span>Roadmap name</span><input autoFocus required placeholder="e.g. Java Full Stack or Photography"
        value={name} onChange={e => { setName(e.target.value); setError(''); }}/></label>
      <fieldset className="roadmap-colors"><legend>Accent color</legend>
        {colors.map(([label, value]) => <label key={value} className="color-choice" style={{ '--swatch': value }}>
          <input type="radio" name="roadmap-accent" aria-label={label} checked={color === value} onChange={() => setColor(value)}/>
          {color === value && <Check size={13} aria-hidden="true"/>}
        </label>)}
      </fieldset>
      <label className="field"><span>{roadmap ? 'Append topics (optional)' : 'Topics (optional)'}</span>
        <textarea rows="6" value={outline} aria-describedby="outline-help"
          placeholder={'# Foundations\nVariables and types\nControl flow\n# Practice\nBuild a small project'}
          onChange={e => { setOutline(e.target.value); setError(''); }}/></label>
      <p className="roadmap-help" id="outline-help">Paste one topic per line. Use <code># Phase name</code> to group topics, or leave this blank and add them later.</p>
      {error && <p role="alert" className="roadmap-error">{error}</p>}
      <div className="modal-actions">
        <button type="button" className="btn secondary" onClick={onClose}>Cancel</button>
        <button type="submit" className="btn primary">{roadmap ? 'Save changes' : 'Create roadmap'}</button>
      </div>
    </form>
  </dialog>;
}

export default function Roadmap({ subjects, topics, activeId, onSelect, onCreate, onEditRoadmap, onAddTopic, onEditTopic, onMove, onPlan }) {
  const roadmap = subjects.find(s => s.id === activeId);
  if (!roadmap) return <section className="panel empty-large">
    <div className="empty-art"><Route/></div><h3>Create your first roadmap</h3>
    <p>Give your learning plan a name, then add the topics you want to study.</p>
    <button className="btn primary" onClick={onCreate}><Plus size={16}/> New roadmap</button>
  </section>;
  const steps = topics.filter(t => t.subjectId === roadmap.id);
  const completed = steps.filter(t => t.status === 'completed').length;
  const percent = steps.length ? Math.round(100 * completed / steps.length) : 0;
  return <div className="roadmap-workspace" style={{ '--path-color': colors.some(([,value])=>value===roadmap.color) ? roadmap.color : '#5946b2' }}>
    <section className="panel roadmap-summary">
      <div className="roadmap-picker">
        <label htmlFor="roadmap-select" className="eyebrow">YOUR ROADMAPS · {subjects.length}</label>
        <select id="roadmap-select" aria-label="Choose roadmap" value={roadmap.id} onChange={e => onSelect(e.target.value)}>
          {subjects.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
        </select>
      </div>
      <div className="roadmap-summary-title">
        <div className="roadmap-title"><span className="roadmap-symbol"><Route size={22}/></span><h2>{roadmap.name}</h2></div>
        <button className="btn secondary" onClick={onEditRoadmap}><Pencil size={14}/> Edit roadmap</button>
      </div>
      <div className="roadmap-progress"><span>{completed} of {steps.length} topics completed</span><strong>{percent}%</strong></div>
      <progress aria-label="Roadmap completion" max="100" value={percent}/>
    </section>
    <section className="panel roadmap-steps">
      <div className="panel-head"><div><span className="eyebrow">STUDY ORDER</span><h2>Learning steps</h2></div>
        <button className="btn secondary" onClick={onAddTopic}><Plus size={15}/> Add topic</button>
      </div>
      {!steps.length && <div className="empty-state">
        <div className="empty-art"><ListOrdered size={24}/></div><b>No topics yet</b>
        <p>Add your first topic above, or use Edit roadmap to paste a whole outline.</p>
      </div>}
      <ol className="roadmap-step-list">{steps.map((topic, index) => <li key={topic.id}>
        {(topic.phase || steps[index - 1]?.phase) && topic.phase !== steps[index - 1]?.phase && <h3 className="roadmap-phase">{topic.phase || 'Other topics'}</h3>}
        <div className="roadmap-step">
          <span className={'roadmap-number ' + topic.status} aria-label={'Step ' + (index + 1)}>{index + 1}</span>
          <button className="roadmap-step-name" title="Edit topic and progress" onClick={() => onEditTopic(topic)}>
            <b>{topic.title}</b>{topic.subtopic && <small>{topic.subtopic}</small>}
          </button>
          <button className={'status roadmap-status ' + topic.status} aria-label={'Edit status for ' + topic.title} onClick={() => onEditTopic(topic)}>
            {topic.status === 'completed' ? 'Completed' : topic.status === 'started' ? 'In progress' : 'Pending'}
          </button>
          <div className="roadmap-step-tools">
            <button className="icon-btn" title="Move up" aria-label={'Move ' + topic.title + ' up'} disabled={index === 0} onClick={() => onMove(topic, -1)}><ArrowUp size={15}/></button>
            <button className="icon-btn" title="Move down" aria-label={'Move ' + topic.title + ' down'} disabled={index === steps.length - 1} onClick={() => onMove(topic, 1)}><ArrowDown size={15}/></button>
            <button className="icon-btn" title="Plan study" aria-label={'Plan study for ' + topic.title} onClick={() => onPlan(topic)}><CalendarPlus size={16}/></button>
          </div>
        </div>
      </li>)}</ol>
    </section>
  </div>;
}
