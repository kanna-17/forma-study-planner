import React, { useEffect, useState } from 'react';
import { CourseCards, installCurriculum } from './Curriculum.jsx';
import Roadmap, { RoadmapForm } from './Roadmap.jsx';
import {
  LayoutDashboard, CalendarDays, Route, BookOpen, RefreshCw, Timer,
  NotebookPen, ListTodo, ChartNoAxesCombined, Library, Settings, Search,
  Sun, Moon, Plus, ChevronLeft, ChevronRight, Clock3, Check, Circle,
  MoreHorizontal, BookmarkPlus, Play, Pause, Square, X, Trash2, Pencil,
  Download, Upload, Target, Flame, ArrowUpRight, CalendarCheck, Menu,
  GraduationCap, Sparkles, Filter, ExternalLink
} from 'lucide-react';

const KEY = 'forma-learning-data-v1';
const today = () => new Date().toISOString().slice(0,10);
const uid = () => Math.random().toString(36).slice(2,10);
const initial = {
  subjects: [{id:'java',name:'Java',color:'#5577d8',icon:'☕'},{id:'react',name:'React',color:'#42a6a0',icon:'⚛️'},{id:'sql',name:'SQL',color:'#bd8b52',icon:'▤'}],
  topics: [], studies: [], tasks: [], notes: [], resources: [], revisions: [],
  sessions: [], goals: {dailyHours:3}, theme:'light'
};
function load(){ try { return installCurriculum({...initial,...JSON.parse(localStorage.getItem(KEY)||'{}')}); } catch { return installCurriculum(initial); } }
const fmt = (d) => new Date(d+'T12:00:00').toLocaleDateString('en-US',{month:'short',day:'numeric'});
const same = (a,b) => a===b;
const statusLabel = s => s==='completed'?'Completed':s==='started'?'In progress':'Pending';

export default function App(){
  const [data,setData] = useState(load);
  const [page,setPage] = useState('Overview');
  const [month,setMonth] = useState(new Date());
  const [view,setView] = useState('Month');
  const [selectedDate,setSelectedDate] = useState(today());
  const [modal,setModal] = useState('');
  const [editing,setEditing] = useState(null);
  const [search,setSearch] = useState('');
  const [mobileOpen,setMobileOpen] = useState(false);
  const [timer,setTimer] = useState({running:false,startedAt:null,elapsed:0,subject:'',topic:''});
  const [tick,setTick] = useState(0);
  const [toast,setToast] = useState('');
  useEffect(()=>{localStorage.setItem(KEY,JSON.stringify(data));},[data]);
  useEffect(()=>{if(timer.running){const id=setInterval(()=>setTick(x=>x+1),1000);return()=>clearInterval(id)}},[timer.running]);
  useEffect(()=>{if(toast){const id=setTimeout(()=>setToast(''),2500);return()=>clearTimeout(id)}},[toast]);
  const update=(key,val)=>setData(d=>({...d,[key]:typeof val==='function'?val(d[key]):val}));
  const nav=[['Overview',LayoutDashboard],['Course Library',Library],['Calendar',CalendarDays],['Learning Roadmap',Route],['Subjects & Topics',BookOpen],['Revision Center',RefreshCw],['Study Sessions',Timer],['Notes',NotebookPen],['Tasks & Goals',ListTodo],['Resources',Library],['Analytics',ChartNoAxesCombined]];
  const subjectName=id=>data.subjects.find(s=>s.id===id)?.name||'Unassigned';
  const activeRoadmap = data.subjects.find(s => s.id === data.activeRoadmapId) || data.subjects.find(s => s.id === "forma-course-0") || data.subjects[0];
  const newItem = (type, defaults = null) => { setEditing(defaults); setModal(type); };
  const addStudy = () => newItem('study', page === 'Learning Roadmap' ? { subjectId: activeRoadmap?.id } : null);
  const newTopic = () => newItem('topic', page === 'Learning Roadmap' ? { subjectId: activeRoadmap?.id } : null);
  function saveRoadmap(fields, draftTopics) {
    const id = editing?.id || uid();
    const topics = draftTopics.map(t => ({ ...t, id: uid(), subjectId: id }));
    setData(d => ({
      ...d,
      subjects: editing?.id
        ? d.subjects.map(s => s.id === id ? { ...s, ...fields } : s)
        : [...d.subjects, { id, ...fields }],
      topics: [...d.topics, ...topics],
      activeRoadmapId: id
    }));
    setModal('');
    setToast(editing?.id ? 'Roadmap updated' : 'Roadmap created');
  }
  function moveTopic(topic, direction) {
    update('topics', topics => {
      const siblings = topics.filter(t => t.subjectId === topic.subjectId);
      const index = siblings.findIndex(t => t.id === topic.id);
      const neighbor = siblings[index + direction];
      if (index < 0 || !neighbor) return topics;
      const current = siblings[index];
      return topics.map(t => t.id === current.id ? neighbor : t.id === neighbor.id ? current : t);
    });
  }
  const openEdit=(item,type)=>{setEditing({...item,_type:type});setModal(type)};
  const saveStudy=(form)=>{
    if(editing?.id) update('studies',a=>a.map(x=>x.id===editing.id?{...x,...form}:x));
    else update('studies',a=>[...a,{id:uid(),...form}]);
    if(form.revision && !data.revisions.some(r=>r.topic===form.topic && r.subjectId===form.subjectId && r.status!=='done')){
      update('revisions',a=>[...a,{id:uid(),topic:form.topic,subjectId:form.subjectId,due:form.date,status:'due',count:0}]);
    }
    setModal('');setToast('Study plan saved');
  };
  const deleteItem=(key,id)=>{update(key,a=>a.filter(x=>x.id!==id));setModal('');setToast('Item deleted')};
  function saveTopic(form) {
    if (editing?.id) {
      update('topics', topics => topics.map(t => t.id === editing.id ? { ...t, ...form } : t));
    } else {
      const topic = { ...form, id: uid() };
      update('topics', topics => [...topics, topic]);
    }
    setModal('');
    setToast(editing?.id ? 'Topic updated' : 'Topic added');
  }
  const addTask=(f)=>{update('tasks',a=>[...a,{id:uid(),...f}]);setModal('');setToast('Task added')};
  const addNote=(f)=>{if(editing?.id)update('notes',a=>a.map(n=>n.id===editing.id?{...n,...f}:n));else update('notes',a=>[...a,{id:uid(),...f}]);setModal('');setToast('Note saved')};
  const doneRevision=(r,level)=>{
    update('revisions',a=>a.map(x=>x.id===r.id?{...x,status:'done',lastReviewed:today(),level,count:(x.count||0)+1}:x));
    const days=level==='Easy'?7:level==='Difficult'?1:3;
    update('revisions',a=>[...a,{...r,id:uid(),status:'due',due:new Date(Date.now()+days*86400000).toISOString().slice(0,10),count:(r.count||0)+1}]);
    setToast('Revision completed · next review scheduled');
  };
  const startTimer=()=>{if(!timer.running)setTimer(t=>({...t,running:true,startedAt:Date.now()}));else setTimer(t=>({...t,running:false,elapsed:t.elapsed+(Date.now()-t.startedAt),startedAt:null}))};
  const finishTimer=()=>{
    const sec=timer.elapsed+(timer.running?Date.now()-timer.startedAt:0);
    if(sec>0)update('sessions',a=>[...a,{id:uid(),date:today(),subjectId:timer.subject||data.subjects[0]?.id,topic:timer.topic||'Focus session',minutes:Math.max(1,Math.round(sec/60000))}]);
    setTimer({running:false,startedAt:null,elapsed:0,subject:'',topic:''});setToast('Study session saved');
  };
  const elapsed=timer.elapsed+(timer.running?Date.now()-timer.startedAt:0);
  const timeText= new Date(elapsed).toISOString().slice(11,19);
  const allMinutes=data.sessions.reduce((s,x)=>s+x.minutes,0);
  const todayStudies=data.studies.filter(x=>x.date===today());
  const dueRevisions=data.revisions.filter(x=>x.status==='due'&&x.due<=today());
  const completed=data.topics.filter(x=>x.status==='completed').length;
  const pending=data.topics.filter(x=>x.status!=='completed').length;
  const exportData=()=>{const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='forma-backup.json';a.click();URL.revokeObjectURL(a.href)};
  const importData=e=>{const f=e.target.files?.[0];if(!f)return;const r=new FileReader();r.onload=()=>{try{setData(installCurriculum({...initial,...JSON.parse(r.result)}));setToast('Backup restored')}catch{setToast('Invalid backup file')}};r.readAsText(f)};
  const filteredTopics=data.topics.filter(t=>(t.title+' '+t.subtopic+' '+subjectName(t.subjectId)).toLowerCase().includes(search.toLowerCase()));
  const pageTitle=page==='Overview'?'A little progress, every day.':page;
  return <div className={`app ${data.theme}`}>
    <aside className={`sidebar ${mobileOpen?'open':''}`}>
      <div className="brand"><div className="brand-mark"><GraduationCap size={20}/></div><div><b>forma</b><small>LEARNING SPACE</small></div><button className="mobile-close icon-btn" onClick={()=>setMobileOpen(false)}><X/></button></div>
      <div className="workspace-label">WORKSPACE</div>
      <nav>{nav.map(([name,Icon])=><button key={name} className={`nav-item ${page===name?'active':''}`} onClick={()=>{setPage(name);setMobileOpen(false)}}><Icon size={18}/><span>{name}</span>{name==='Revision Center'&&dueRevisions.length>0&&<i>{dueRevisions.length}</i>}</button>)}</nav>
      <div className="sidebar-bottom">
        <div className="quote"><Sparkles size={16}/><p>Small steps become remarkable journeys.</p><span>YOUR LEARNING, YOUR PACE</span></div>
        <button className={`nav-item ${page==='Settings'?'active':''}`} onClick={()=>setPage('Settings')}><Settings size={18}/>Settings</button>
        <div className="profile"><div className="avatar">K</div><div><b>My learning space</b><small>Personal workspace</small></div><MoreHorizontal size={18}/></div>
      </div>
    </aside>
    {mobileOpen&&<div className="scrim" onClick={()=>setMobileOpen(false)}/>}
    <main className="main">
      <header className="topbar"><button className="icon-btn mobile-menu" onClick={()=>setMobileOpen(true)}><Menu/></button><div className="crumb">Workspace <span>/</span> <b>{page}</b></div><div className="top-actions"><div className="searchbox"><Search size={16}/><input placeholder="Search anything..." value={search} onChange={e=>setSearch(e.target.value)}/><kbd>⌘ K</kbd></div><button className="icon-btn" title="Toggle theme" onClick={()=>update('theme',data.theme==='light'?'dark':'light')}>{data.theme==='light'?<Moon size={18}/>:<Sun size={18}/>}</button><button className="avatar small-avatar" title="Settings" onClick={()=>setPage('Settings')}>K</button></div></header>
      <div className="content">
        <div className="page-heading"><div><div className="eyebrow">{new Date().toLocaleDateString('en-US',{weekday:'long',month:'long',day:'numeric',year:'numeric'})}</div><h1>{pageTitle}</h1><p>{page==='Overview'?'Your personal space to plan, learn and keep moving forward.':page==='Learning Roadmap'?'Choose a roadmap or create one for any subject you want to learn.':'Keep your learning organized and intentional.'}</p></div><div className="heading-actions">{page === 'Learning Roadmap' ? <>
          <button className="btn secondary" onClick={addStudy}><CalendarDays size={16}/> Plan study</button>
          <button className="btn primary" onClick={() => newItem('roadmap')}><Plus size={16}/> New roadmap</button>
        </> : <>
          <button className="btn secondary" onClick={newTopic}><Plus size={16}/> Add topic</button>
          <button className="btn primary" onClick={addStudy}><Plus size={17}/> Plan study</button>
        </>}</div></div>
        {page==='Course Library'&&<CourseCards data={data} search={search} onOpen={id=>{update('activeRoadmapId',id);setPage('Learning Roadmap')}}/>}
        {page==='Overview'&&<button className="course-card library-entry" onClick={()=>setPage('Course Library')}><BookOpen size={19}/><strong>Java Full Stack · Course Library</strong><small>Browse the courses, projects and practice questions</small><ArrowUpRight size={16}/></button>}
        {page==='Overview'&&<Dashboard data={data} todayStudies={todayStudies} due={dueRevisions} completed={completed} pending={pending} allMinutes={allMinutes} onAdd={addStudy} onPage={setPage} onEdit={openEdit} subjectName={subjectName}/>}
        {page==='Calendar'&&<CalendarPage studies={data.studies} month={month} setMonth={setMonth} view={view} setView={setView} selected={selectedDate} setSelected={setSelectedDate} onAdd={addStudy} onEdit={x=>openEdit(x,'study')}/>}
        {page === 'Learning Roadmap' && <Roadmap subjects={data.subjects} topics={data.topics} activeId={activeRoadmap?.id}
          onSelect={id => update('activeRoadmapId', id)} onCreate={() => newItem('roadmap')}
          onEditRoadmap={() => openEdit(activeRoadmap, 'roadmap')} onAddTopic={newTopic}
          onEditTopic={t => openEdit(t, 'topic')} onMove={moveTopic}
          onPlan={t => newItem('study', { subjectId: t.subjectId, topic: t.title, subtopic: t.subtopic })}/>}
        {page==='Subjects & Topics'&&<TopicsPage topics={filteredTopics} subjects={data.subjects} onAdd={newTopic} onEdit={x=>openEdit(x,'topic')} onDelete={id=>deleteItem('topics',id)} subjectName={subjectName}/>}
        {page==='Revision Center'&&<RevisionPage revisions={data.revisions} subjectName={subjectName} onDone={doneRevision}/>}
        {page==='Study Sessions'&&<SessionsPage timer={timer} setTimer={setTimer} timeText={timeText} start={startTimer} finish={finishTimer} subjects={data.subjects} sessions={data.sessions} subjectName={subjectName}/>}
        {page==='Notes'&&<NotesPage notes={data.notes} onAdd={()=>{setEditing(null);setModal('note')}} onEdit={x=>openEdit(x,'note')} onDelete={id=>deleteItem('notes',id)} search={search}/>}
        {page==='Tasks & Goals'&&<TasksPage tasks={data.tasks} onAdd={()=>newItem('task')} onDone={id=>update('tasks',a=>a.map(t=>t.id===id?{...t,status:'completed'}:t))} onDelete={id=>deleteItem('tasks',id)}/>}
        {page==='Resources'&&<ResourcesPage resources={data.resources} onAdd={()=>newItem('resource')} onDelete={id=>deleteItem('resources',id)}/>}
        {page==='Analytics'&&<Analytics data={data} completed={completed} pending={pending} allMinutes={allMinutes}/>}
        {page==='Settings'&&<SettingsPage data={data} update={update} exportData={exportData} importData={importData}/>}
      </div>
      <footer className="footer"><span>FORMA <b>·</b> MAKE LEARNING INTENTIONAL</span><span>Your progress is saved on this device.</span></footer>
    </main>
    {modal === 'roadmap' && <RoadmapForm roadmap={editing} subjects={data.subjects}
      onClose={() => setModal('')} onSave={saveRoadmap}/>}
    {modal && modal !== 'roadmap' && <Modal type={modal} editing={editing} data={data} onClose={()=>setModal('')} onStudy={saveStudy} onTopic={saveTopic} onTask={addTask} onNote={addNote} onResource={f=>{update('resources',a=>[...a,{id:uid(),...f}]);setModal('');setToast('Resource saved')}} onDelete={deleteItem}/>}
    {toast&&<div className="toast"><Check size={16}/>{toast}</div>}
  </div>
}

function Metric({label,value,sub,icon:Icon,tone}){return <div className="metric"><div className={`metric-icon ${tone}`}><Icon size={18}/></div><div><span>{label}</span><strong>{value}</strong><small>{sub}</small></div></div>}
function Dashboard({data,todayStudies,due,completed,pending,allMinutes,onAdd,onPage,onEdit,subjectName}){
  const hrs=Math.floor(allMinutes/60),mins=allMinutes%60;
  const week=Array.from({length:7},(_,i)=>{const d=new Date();d.setDate(d.getDate()-6+i);const key=d.toISOString().slice(0,10);return {day:d.toLocaleDateString('en-US',{weekday:'short'}),n:data.sessions.filter(s=>s.date===key).reduce((a,s)=>a+s.minutes,0)}});
  const max=Math.max(60,...week.map(x=>x.n));
  return <><div className="metric-grid">
    <Metric label="Topics completed" value={completed} sub={`${pending} still in progress`} icon={BookOpen} tone="blue"/>
    <Metric label="Study time" value={`${hrs}h ${mins}m`} sub="Total tracked time" icon={Clock3} tone="mint"/>
    <Metric label="Revisions due" value={due.length} sub="Ready for a quick review" icon={RefreshCw} tone="peach"/>
    <Metric label="Learning paths" value={data.subjects.length} sub="Roadmaps in your space" icon={Route} tone="lilac"/>
  </div>
  <div className="dashboard-grid">
    <section className="panel today-panel"><div className="panel-head"><div><span className="eyebrow">YOUR FOCUS</span><h2>Today, at a glance</h2></div><button className="text-btn" onClick={()=>onPage('Calendar')}>Open calendar <ArrowUpRight size={15}/></button></div>
      {todayStudies.length?todayStudies.map(s=><div className="study-row" key={s.id}><div className="study-time">{s.time||'Anytime'}</div><div className="study-dot" style={{background:data.subjects.find(x=>x.id===s.subjectId)?.color||'#5577d8'}}/><div className="study-info"><b>{s.topic}</b><small>{subjectName(s.subjectId)} {s.subtopic?'· '+s.subtopic:''}</small></div><span className={`status ${s.status}`}>{statusLabel(s.status)}</span><button className="icon-btn" onClick={()=>onEdit(s,'study')}><Pencil size={15}/></button></div>):<div className="empty-state"><div className="empty-art"><CalendarCheck size={26}/></div><b>Your day is still open.</b><p>Add a study session and give today a little direction.</p><button className="btn primary" onClick={onAdd}><Plus size={16}/> Plan today's study</button></div>}
      <div className="panel-foot"><span>{todayStudies.length} planned item{todayStudies.length===1?'':'s'} today</span><button className="text-btn" onClick={()=>onPage('Tasks & Goals')}>View tasks <ArrowUpRight size={14}/></button></div>
    </section>
    <section className="panel week-panel"><div className="panel-head"><div><span className="eyebrow">YOUR RHYTHM</span><h2>Study activity</h2></div><span className="mini-tag">LAST 7 DAYS</span></div><div className="chart-area"><div className="chart-y"><span>3h</span><span>2h</span><span>1h</span><span>0</span></div><div className="bars">{week.map((w,i)=><div className="bar-col" key={i}><div className="bar-track"><div className={`bar ${i===6?'today-bar':''}`} style={{height:`${Math.max(w.n?5:0,w.n/max*100)}%`}}/></div><small>{w.day}</small></div>)}</div></div><div className="chart-caption"><span><i/> Minutes studied</span><b>{Math.round(week.reduce((a,w)=>a+w.n,0)/60*10)/10} hrs this week</b></div></section>
  </div>
  <div className="lower-grid"><section className="panel"><div className="panel-head"><div><span className="eyebrow">KEEP THE MOMENTUM</span><h2>Revision queue</h2></div><button className="text-btn" onClick={()=>onPage('Revision Center')}>View all <ArrowUpRight size={14}/></button></div>{due.length?due.slice(0,3).map(r=><div className="simple-row" key={r.id}><div className="round-icon peach-bg"><RefreshCw size={16}/></div><div><b>{r.topic}</b><small>{subjectName(r.subjectId)} · Due {fmt(r.due)}</small></div><span className="due-label">Due now</span></div>):<div className="quiet-empty"><Check size={17}/> You're all caught up on revisions.</div>}</section>
    <section className="panel"><div className="panel-head"><div><span className="eyebrow">BUILD YOUR BASE</span><h2>Learning overview</h2></div><button className="text-btn" onClick={()=>onPage('Subjects & Topics')}>Explore topics <ArrowUpRight size={14}/></button></div>{data.subjects.length?data.subjects.slice(0,4).map(s=>{const ts=data.topics.filter(t=>t.subjectId===s.id);const done=ts.filter(t=>t.status==='completed').length;const pct=ts.length?Math.round(done/ts.length*100):0;return <div className="progress-row" key={s.id}><div className="progress-title"><span className="subject-dot" style={{background:s.color}}/><b>{s.name}</b><small>{done}/{ts.length} topics</small></div><div className="progress-track"><div style={{width:pct+'%',background:s.color}}/></div><strong>{pct}%</strong></div>}):<div className="quiet-empty">Add a subject to begin your learning map.</div>}</section></div></>
}
function CalendarPage({studies,month,setMonth,view,setView,selected,setSelected,onAdd,onEdit}){
  const y=month.getFullYear(),m=month.getMonth(),first=new Date(y,m,1),start=new Date(y,m,1-first.getDay()),days=Array.from({length:42},(_,i)=>{const d=new Date(start);d.setDate(start.getDate()+i);return d});
  const shift=n=>{const d=new Date(month);d.setMonth(d.getMonth()+n);setMonth(d)};
  const selectedItems=studies.filter(s=>s.date===selected);
  return <section className="panel calendar-panel"><div className="calendar-toolbar"><div className="month-nav"><button className="icon-btn" onClick={()=>shift(-1)}><ChevronLeft/></button><h2>{month.toLocaleDateString('en-US',{month:'long',year:'numeric'})}</h2><button className="icon-btn" onClick={()=>shift(1)}><ChevronRight/></button><button className="btn secondary today-btn" onClick={()=>{setMonth(new Date());setSelected(today())}}>Today</button></div><div className="segmented">{['Month','Week','Day'].map(v=><button className={view===v?'chosen':''} onClick={()=>setView(v)} key={v}>{v}</button>)}</div><button className="btn primary" onClick={onAdd}><Plus size={16}/> Add study</button></div>
  {view==='Month'?<div className="month-grid"><div className="weekday-row">{['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(x=><span key={x}>{x}</span>)}</div><div className="days-grid">{days.map((d,i)=>{const key=d.toISOString().slice(0,10),items=studies.filter(s=>s.date===key);return <button key={i} className={`day-cell ${d.getMonth()!==m?'muted-day':''} ${key===today()?'is-today':''} ${key===selected?'selected-day':''}`} onClick={()=>setSelected(key)}><span className="day-number">{d.getDate()}</span><div className="day-events">{items.slice(0,2).map(x=><span key={x.id} style={{'--event-color':x.color||'#5577d8'}}>{x.topic}</span>)}{items.length>2&&<small>+{items.length-2} more</small>}</div></button>})}</div></div>:<div className="agenda-list">{(view==='Day'?[new Date(selected+'T12:00:00')]:Array.from({length:7},(_,i)=>{const d=new Date(selected+'T12:00:00');d.setDate(d.getDate()-d.getDay()+i);return d})).map(d=>{const key=d.toISOString().slice(0,10),items=studies.filter(s=>s.date===key);return <div className="agenda-day" key={key}><div className="agenda-date"><b>{d.toLocaleDateString('en-US',{weekday:'short'})}</b><span>{d.getDate()}</span></div><div className="agenda-items">{items.length?items.map(s=><button className="agenda-item" key={s.id} onClick={()=>onEdit(s)}><b>{s.topic}</b><small>{s.time||'Anytime'} · {s.subtopic||'Study session'}</small><span className={`status ${s.status}`}>{statusLabel(s.status)}</span></button>):<span className="no-plan">Nothing planned</span>}</div></div>})}</div>}
  <div className="selected-date-panel"><div><span className="eyebrow">SELECTED DAY</span><h3>{new Date(selected+'T12:00:00').toLocaleDateString('en-US',{weekday:'long',month:'long',day:'numeric'})}</h3></div><div className="selected-items">{selectedItems.length?selectedItems.map(s=><button className="selected-chip" key={s.id} onClick={()=>onEdit(s)}>{s.time||'Anytime'} · {s.topic}</button>):<span className="muted-text">No study plans for this date yet.</span>}</div><button className="btn secondary" onClick={onAdd}><Plus size={15}/> Add to this day</button></div>
  </section>
}
function TopicsPage({topics,subjects,onAdd,onEdit,onDelete,subjectName}){
  const [filter,setFilter]=useState('All');
  const shown=topics.filter(t=>filter==='All'||t.status===filter.toLowerCase());
  return <><div className="filterbar"><div className="segmented">{['All','Pending','Started','Completed'].map(x=><button key={x} className={filter===x?'chosen':''} onClick={()=>setFilter(x)}>{x}</button>)}</div><span className="muted-text">{shown.length} topics</span></div>{shown.length?<div className="topic-grid">{shown.map(t=><div className="topic-card" key={t.id}><div className="topic-card-top"><span className="subject-pill">{subjectName(t.subjectId)}</span><button className="icon-btn" onClick={()=>onEdit(t)}><Pencil size={15}/></button></div><h3>{t.title}</h3><p>{t.subtopic||'Major topic'}</p><div className="topic-card-bottom"><span className={`status ${t.status}`}>{statusLabel(t.status)}</span><button className="text-btn danger-text" onClick={()=>onDelete(t.id)}><Trash2 size={14}/> Delete</button></div></div>)}</div>:<div className="panel empty-large"><div className="empty-art"><BookOpen/></div><h3>No topics here yet</h3><p>Add a topic to start building your personal learning roadmap.</p><button className="btn primary" onClick={onAdd}><Plus size={16}/> Add your first topic</button></div>}</>
}
function RevisionPage({revisions,subjectName,onDone}){
  const due=revisions.filter(r=>r.status==='due'&&r.due<=today()),upcoming=revisions.filter(r=>r.status==='due'&&r.due>today()),done=revisions.filter(r=>r.status==='done');
  return <><div className="metric-grid compact-metrics"><Metric label="Due now" value={due.length} sub="Ready to review" icon={RefreshCw} tone="peach"/><Metric label="Coming up" value={upcoming.length} sub="Scheduled reviews" icon={CalendarDays} tone="blue"/><Metric label="Reviewed" value={done.length} sub="Completed reviews" icon={Check} tone="mint"/></div><section className="panel"><div className="panel-head"><div><span className="eyebrow">SPACED REPETITION</span><h2>Ready for another look</h2></div><span className="mini-tag">1 · 3 · 7 · 15 · 30 DAYS</span></div>{due.length?due.map(r=><div className="revision-row" key={r.id}><div className="round-icon peach-bg"><RefreshCw size={17}/></div><div className="revision-info"><b>{r.topic}</b><small>{subjectName(r.subjectId)} · {r.count||0} previous reviews · Due {fmt(r.due)}</small></div><div className="revision-actions"><button className="btn tiny secondary" onClick={()=>onDone(r,'Difficult')}>Difficult</button><button className="btn tiny secondary" onClick={()=>onDone(r,'Need practice')}>Practice</button><button className="btn tiny primary" onClick={()=>onDone(r,'Easy')}><Check size={14}/> Easy</button></div></div>):<div className="quiet-empty"><Check size={18}/> No revisions due. You're all caught up.</div>}</section><section className="panel section-gap"><div className="panel-head"><div><span className="eyebrow">UP NEXT</span><h2>Upcoming revisions</h2></div></div>{upcoming.length?upcoming.sort((a,b)=>a.due.localeCompare(b.due)).map(r=><div className="simple-row" key={r.id}><div className="round-icon blue-bg"><CalendarDays size={16}/></div><div><b>{r.topic}</b><small>{subjectName(r.subjectId)}</small></div><span className="muted-text">{fmt(r.due)}</span></div>):<div className="quiet-empty">No upcoming revisions scheduled.</div>}</section></>
}
function SessionsPage({timer,setTimer,timeText,start,finish,subjects,sessions,subjectName}){
  return <div className="sessions-layout"><section className="panel timer-panel"><span className="eyebrow">FOCUS MODE</span><h2>Give this moment your attention.</h2><div className="timer-display">{timeText}</div><div className="timer-selects"><select value={timer.subject} onChange={e=>setTimer(t=>({...t,subject:e.target.value}))}><option value="">Choose subject</option>{subjects.map(s=><option key={s.id} value={s.id}>{s.name}</option>)}</select><input placeholder="What are you studying?" value={timer.topic} onChange={e=>setTimer(t=>({...t,topic:e.target.value}))}/></div><div className="timer-buttons"><button className="btn primary large-btn" onClick={start}>{timer.running?<><Pause size={17}/> Pause</>:<><Play size={17}/> {timeText==='00:00:00'?'Start focus':'Resume'}</>}</button><button className="btn secondary large-btn" onClick={finish}><Square size={15}/> Finish session</button></div><p className="muted-text">Your session is saved when you finish.</p></section><section className="panel"><div className="panel-head"><div><span className="eyebrow">YOUR HISTORY</span><h2>Recent sessions</h2></div></div>{sessions.length?sessions.slice().reverse().slice(0,8).map(s=><div className="simple-row" key={s.id}><div className="round-icon mint-bg"><Clock3 size={16}/></div><div><b>{s.topic}</b><small>{subjectName(s.subjectId)} · {fmt(s.date)}</small></div><strong>{s.minutes} min</strong></div>):<div className="quiet-empty">Your completed focus sessions will appear here.</div>}</section></div>
}
function NotesPage({notes,onAdd,onEdit,onDelete,search}){const list=notes.filter(n=>(n.title+' '+n.body).toLowerCase().includes(search.toLowerCase()));return <><div className="section-toolbar"><p className="muted-text">A home for useful ideas, code snippets and things worth remembering.</p><button className="btn primary" onClick={onAdd}><Plus size={16}/> New note</button></div>{list.length?<div className="notes-grid">{list.map(n=><article className="note-card" key={n.id} onClick={()=>onEdit(n)}><div className="note-meta"><span>{n.tag||'NOTE'}</span><button className="icon-btn" onClick={e=>{e.stopPropagation();onDelete(n.id)}}><Trash2 size={14}/></button></div><h3>{n.title}</h3><p>{n.body}</p><small>{fmt(n.date||today())}</small></article>)}</div>:<div className="panel empty-large"><div className="empty-art"><NotebookPen/></div><h3>Your ideas deserve a home.</h3><p>Create notes and connect them to what you're learning.</p><button className="btn primary" onClick={onAdd}><Plus size={16}/> Create a note</button></div>}</>}
function TasksPage({tasks,onAdd,onDone,onDelete}){return <><div className="section-toolbar"><p className="muted-text">Keep projects, practice and small commitments moving.</p><button className="btn primary" onClick={onAdd}><Plus size={16}/> Add task</button></div><section className="panel">{tasks.length?tasks.map(t=><div className="task-row" key={t.id}><button className={`check-btn ${t.status==='completed'?'checked':''}`} onClick={()=>onDone(t.id)}>{t.status==='completed'?<Check size={14}/>:null}</button><div className="task-info"><b className={t.status==='completed'?'strike':''}>{t.title}</b><small>{t.date?`Due ${fmt(t.date)}`:'No deadline'} · {t.priority||'Normal'} priority</small></div><span className={`status ${t.status}`}>{statusLabel(t.status)}</span><button className="icon-btn" onClick={()=>onDelete(t.id)}><Trash2 size={15}/></button></div>):<div className="empty-large"><div className="empty-art"><ListTodo/></div><h3>Clear goals, calmer days.</h3><p>Add your first task, project or coding practice goal.</p><button className="btn primary" onClick={onAdd}><Plus size={16}/> Add a task</button></div>}</section></>}
function ResourcesPage({resources,onAdd,onDelete}){return <><div className="section-toolbar"><p className="muted-text">Collect useful links and learning material in one place.</p><button className="btn primary" onClick={onAdd}><Plus size={16}/> Save resource</button></div><div className="resource-list">{resources.length?resources.map(r=><div className="panel resource-row" key={r.id}><div className="round-icon blue-bg"><Library size={17}/></div><div><b>{r.title}</b><small>{r.url}</small></div><a href={r.url} target="_blank" rel="noreferrer"><ExternalLink size={16}/></a><button className="icon-btn" onClick={()=>onDelete(r.id)}><Trash2 size={15}/></button></div>):<div className="panel empty-large"><div className="empty-art"><Library/></div><h3>Your learning library</h3><p>Save tutorials, documentation and references here.</p><button className="btn primary" onClick={onAdd}><Plus size={16}/> Add resource</button></div>}</div></>}
function Analytics({data,completed,pending,allMinutes}){const hours=(allMinutes/60).toFixed(1);return <><div className="metric-grid"><Metric label="Total study time" value={`${hours}h`} sub="Tracked sessions" icon={Clock3} tone="blue"/><Metric label="Completed topics" value={completed} sub="Learning milestones" icon={Check} tone="mint"/><Metric label="Topics in progress" value={pending} sub="Keep moving forward" icon={BookOpen} tone="peach"/><Metric label="Study sessions" value={data.sessions.length} sub="Focus blocks saved" icon={Timer} tone="lilac"/></div><section className="panel"><div className="panel-head"><div><span className="eyebrow">YOUR LEARNING MIX</span><h2>Progress by subject</h2></div></div>{data.subjects.map(s=>{const list=data.topics.filter(t=>t.subjectId===s.id),done=list.filter(t=>t.status==='completed').length,pct=list.length?Math.round(done/list.length*100):0;return <div className="analytics-subject" key={s.id}><div className="progress-title"><span className="subject-dot" style={{background:s.color}}/><b>{s.name}</b><small>{done} of {list.length} completed</small></div><div className="progress-track"><div style={{width:pct+'%',background:s.color}}/></div><strong>{pct}%</strong></div>})}{!data.subjects.length&&<div className="quiet-empty">Add subjects to see your progress.</div>}</section></>}
function SettingsPage({data,update,exportData,importData}){return <div className="settings-grid"><section className="panel settings-panel"><span className="eyebrow">PREFERENCES</span><h2>Make Forma yours.</h2><div className="setting-row"><div><b>Appearance</b><small>Choose a comfortable workspace theme.</small></div><div className="segmented"><button className={data.theme==='light'?'chosen':''} onClick={()=>update('theme','light')}><Sun size={14}/> Lavender Mist</button><button className={data.theme==='dark'?'chosen':''} onClick={()=>update('theme','dark')}><Moon size={14}/> Soft Iris</button></div></div><div className="setting-row"><div><b>Daily study target</b><small>Your ideal learning time each day.</small></div><div className="inline-input"><input type="number" min="1" max="16" value={data.goals?.dailyHours||3} onChange={e=>update('goals',{...data.goals,dailyHours:Number(e.target.value)})}/><span>hours</span></div></div></section><section className="panel settings-panel"><span className="eyebrow">YOUR DATA</span><h2>Your learning belongs to you.</h2><p className="muted-text">Forma saves data in this browser. Export a backup regularly so you can move or restore your learning space.</p><div className="data-actions"><button className="btn secondary" onClick={exportData}><Download size={16}/> Export backup</button><label className="btn secondary upload-btn"><Upload size={16}/> Import backup<input type="file" accept="application/json" onChange={importData} hidden/></label></div><div className="privacy-note"><Check size={16}/> Your data stays in this browser unless you export it.</div></section></div>}
function Modal({type,editing,data,onClose,onStudy,onTopic,onTask,onNote,onResource,onDelete}){
 const isEdit=!!editing?.id; const [form,setForm]=useState(()=>type==='study'?{date:editing?.date||today(),time:editing?.time||'',subjectId:editing?.subjectId||data.subjects[0]?.id||'',topic:editing?.topic||'',subtopic:editing?.subtopic||'',status:editing?.status||'pending',notes:editing?.notes||'',revision:editing?.revision||false}:type==='topic'?{phase:editing?.phase||'',subjectId:editing?.subjectId||data.subjects[0]?.id||'',title:editing?.title||'',subtopic:editing?.subtopic||'',status:editing?.status||'pending',priority:editing?.priority||'Normal'}:type==='task'?{title:'',date:today(),priority:'Normal',status:'pending'}:type==='note'?{title:editing?.title||'',body:editing?.body||'',tag:editing?.tag||'NOTE',date:editing?.date||today()}: {title:'',url:''});
 const set=(k,v)=>setForm(f=>({...f,[k]:v}));
 const title={study:isEdit?'Edit study plan':'Plan a study session',topic:isEdit?'Edit topic':'Add a topic',task:'Add a task',note:isEdit?'Edit note':'Create a note',resource:'Save a resource'}[type];
 const submit=e=>{e.preventDefault();if(type==='study')onStudy(form);if(type==='topic'){
   if (!form.subjectId || !form.title.trim()) return;
   onTopic({...form, title:form.title.trim(), phase:form.phase.trim()});
 }if(type==='task')onTask(form);if(type==='note')onNote(form);if(type==='resource')onResource(form)};
 return <div className="modal-backdrop" onMouseDown={e=>{if(e.target===e.currentTarget)onClose()}}><form className="modal" onSubmit={submit}><div className="modal-head"><div><span className="eyebrow">FORMA WORKSPACE</span><h2>{title}</h2></div><button type="button" className="icon-btn" onClick={onClose}><X/></button></div>
 {type==='study'&&<><Field label="Study date"><input type="date" value={form.date} onChange={e=>set('date',e.target.value)} required/></Field><Field label="Roadmap / subject"><select value={form.subjectId} onChange={e=>set('subjectId',e.target.value)}>{data.subjects.map(s=><option value={s.id} key={s.id}>{s.name}</option>)}</select></Field><Field label="Major topic"><input value={form.topic} onChange={e=>set('topic',e.target.value)} placeholder="e.g. Object-oriented programming" required/></Field><Field label="Subtopic"><input value={form.subtopic} onChange={e=>set('subtopic',e.target.value)} placeholder="e.g. Polymorphism"/></Field><div className="form-two"><Field label="Start time (optional)"><input type="time" value={form.time} onChange={e=>set('time',e.target.value)}/></Field><Field label="Status"><select value={form.status} onChange={e=>set('status',e.target.value)}><option value="pending">Pending</option><option value="started">Started</option><option value="completed">Completed</option></select></Field></div><Field label="Notes"><textarea rows="3" value={form.notes} onChange={e=>set('notes',e.target.value)} placeholder="What do you want to understand?"/></Field><label className="toggle-line"><input type="checkbox" checked={form.revision} onChange={e=>set('revision',e.target.checked)}/><span><b><BookmarkPlus size={16}/> Save for revision</b><small>Add this topic to your revision queue.</small></span></label></>}
 {type==='topic'&&<><Field label="Roadmap / subject"><select value={form.subjectId} onChange={e=>set('subjectId',e.target.value)}>{data.subjects.map(s=><option value={s.id} key={s.id}>{s.name}</option>)}</select></Field><Field label="Phase (optional)"><input list="roadmap-phases" value={form.phase} onChange={e=>set('phase',e.target.value)} placeholder="e.g. Foundations"/></Field><datalist id="roadmap-phases">{[...new Set(data.topics.filter(t=>t.subjectId===form.subjectId && t.phase).map(t=>t.phase))].map(phase=><option key={phase} value={phase}/>)}</datalist><Field label="Major topic"><input required pattern={'.*\\S.*'} title="Enter a topic name" value={form.title} onChange={e=>set('title',e.target.value)} placeholder="e.g. Collections Framework"/></Field><Field label="Subtopic"><input value={form.subtopic} onChange={e=>set('subtopic',e.target.value)} placeholder="e.g. ArrayList"/></Field><div className="form-two"><Field label="Status"><select value={form.status} onChange={e=>set('status',e.target.value)}><option value="pending">Pending</option><option value="started">Started</option><option value="completed">Completed</option></select></Field><Field label="Priority"><select value={form.priority} onChange={e=>set('priority',e.target.value)}><option>Normal</option><option>High</option><option>Low</option></select></Field></div></>}
 {type==='task'&&<><Field label="Task name"><input required value={form.title} onChange={e=>set('title',e.target.value)} placeholder="e.g. Solve 3 array problems"/></Field><Field label="Due date"><input type="date" value={form.date} onChange={e=>set('date',e.target.value)}/></Field><Field label="Priority"><select value={form.priority} onChange={e=>set('priority',e.target.value)}><option>Normal</option><option>High</option><option>Low</option></select></Field></>}
 {type==='note'&&<><Field label="Title"><input required value={form.title} onChange={e=>set('title',e.target.value)} placeholder="Give this note a name"/></Field><Field label="Tag"><input value={form.tag} onChange={e=>set('tag',e.target.value)}/></Field><Field label="Your note"><textarea rows="7" value={form.body} onChange={e=>set('body',e.target.value)} placeholder="Capture an idea, explanation or code reminder..."/></Field></>}
 {type==='resource'&&<><Field label="Resource title"><input required value={form.title} onChange={e=>set('title',e.target.value)} placeholder="e.g. Java documentation"/></Field><Field label="URL"><input type="url" required value={form.url} onChange={e=>set('url',e.target.value)} placeholder="https://..."/></Field></>}
 <div className="modal-actions"><button type="button" className="btn secondary" onClick={onClose}>Cancel</button><button className="btn primary" type="submit"><Check size={16}/>{isEdit?'Save changes':'Save'}</button></div>
 </form></div>
}
function Field({label,children}){return <label className="field"><span>{label}</span>{children}</label>}
