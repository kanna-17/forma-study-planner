# Forma — Personal Learning Planner

A React + CSS personal learning workspace with calendar planning, topic tracking, revisions, focus sessions, notes, tasks, resources, analytics, theme switching, and JSON backup/restore.

## Run locally

Requirements: Node.js 18 or newer.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Data storage

Forma currently saves data in the browser's `localStorage`. Use **Settings → Export backup** to download a JSON backup. Import it from the same screen to restore it in another browser.

This starter version does not include user accounts or cloud synchronization. To access the same data across devices, connect a backend such as Supabase and add authentication before deploying for multiple users.

## Included

- Dashboard and weekly study activity
- Month, week and day calendar views
- Study planning with technology, major topic, subtopic, status, time and revision toggle
- Custom subjects and learning topics
- Learning roadmap
- Revision queue with spaced review scheduling
- Focus timer and session history
- Notes, tasks and resource library
- Analytics and subject progress
- Light and dark themes
- JSON export and import
