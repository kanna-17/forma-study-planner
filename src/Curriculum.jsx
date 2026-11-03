import React, { useState } from 'react';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import material from './curriculum.md?raw';

export const catalog = [];
let group, course, section, unit;
for (const raw of material.split(/\r?\n/)) {
  const line = raw.trim();
  if (!line) continue;
  if (line.startsWith('## ')) {
    group = line.slice(3);
    course = null;
    section = unit = '';
    continue;
  }
  if (!group || group === 'Contents') continue;
  if (line.startsWith('### ') || !course) {
    const name = line.startsWith('### ') ? line.slice(4) : group;
    course = { id: 'forma-course-' + catalog.length, name, group, color: '#eb5667', steps: [] };
    catalog.push(course);
    section = unit = '';
    if (line.startsWith('### ')) continue;
  }
  if (line.startsWith('#### ')) { section = line.slice(5); unit = ''; continue; }
  if (/^\*\*.*\*\*$/.test(line)) { unit = line.slice(2,-2); continue; }
  if (line.startsWith('| Phase') || line.startsWith('|---')) continue;
  const title = line.startsWith('|') ? line.split('|').slice(1,-1).map(s=>s.trim()).join(' · ') : line.replace(/^- (?:\[ \] )?/, '');
  course.steps.push({id:course.id+'-step-'+course.steps.length, subjectId:course.id, title, phase:section, subtopic:unit, priority:'Normal', status:'pending'});
}

export function installCurriculum(data) {
  if (data.curriculumVersion === 1) return data;
  const subjects = catalog.map(({steps, ...subject})=>subject);
  return {...data, curriculumVersion:1, subjects:[...data.subjects,...subjects], topics:[...data.topics,...catalog.flatMap(c=>c.steps)]};
}

export function CourseCards({data, onOpen, search}) {
  const [filter,setFilter] = useState('');
  const groups = [...new Set(catalog.map(c=>c.group))];
  const query = search.trim().toLowerCase();
  return <><div className="catalog-tools"><div><span className="eyebrow">JAVA FULL STACK</span><h2>Course collection</h2><p>28 courses · 224 interview questions · 660 coding prompts</p></div>
    <label>Browse collection<select value={filter} onChange={e=>setFilter(e.target.value)}><option value="">All sections</option>{groups.map(g=><option key={g}>{g}</option>)}</select></label></div>
    {groups.filter(g=>!filter||g===filter).map(g=>{
      const cards = data.subjects.filter(c=>c.group===g).map(c=>({c,steps:data.topics.filter(t=>t.subjectId===c.id)})).filter(({c,steps})=>!query||[c.name,g,...steps.map(t=>t.title+' '+t.subtopic+' '+t.phase)].join(' ').toLowerCase().includes(query));
      return cards.length>0 && <section key={g}><h2 className="catalog-heading">{g}</h2><div className="catalog-grid">{cards.map(({c,steps})=><button className="course-card" key={c.id} onClick={()=>onOpen(c.id)}><BookOpen size={19}/><strong>{c.name}</strong><small>{steps.filter(t=>t.status==='completed').length} / {steps.length} completed</small><ArrowUpRight size={16}/></button>)}</div></section>;
    })}
  </>;
}
