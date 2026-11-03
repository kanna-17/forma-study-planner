# Forma — Personal Learning Planner

A React + CSS personal learning workspace with calendar planning, topic tracking, revisions, focus sessions, notes, tasks, resources, analytics, theme switching, and JSON backup/restore.

## Quick start

Extract the ZIP, then double-click **Open-Forma.html** for the bundled planner. Use the same browser and file location to retain progress, or transfer progress through Settings → Export/Import backup. To keep using an existing localhost workspace, run the source on the same address and port as before.

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

## Create your own roadmap

Open **Learning Roadmap → New roadmap**. Enter any name and optionally paste one topic per line. Lines beginning with `# ` group the following topics into a phase. For example:

```text
# Foundations
Exposure and focus
Composition
# Practice
Shoot a five-photo story
```

Use **Choose roadmap** to switch paths. **Edit roadmap** lets you rename it, change its color or append another outline. **Add topic** adds one step to the selected path. Click a topic or its status to edit it. Use the arrows to change the order, or the calendar icon to plan a study session for that topic. Progress, Analytics and backups use the same topics.

## Data storage

Forma currently saves data in the browser's `localStorage`. Use **Settings → Export backup** to download a JSON backup. Import it from the same screen to restore it in another browser.

This starter version does not include user accounts or cloud synchronization. To access the same data across devices, connect a backend such as Supabase and add authentication before deploying for multiple users.

## Included

- Dashboard and weekly study activity
- Month, week and day calendar views
- Study planning with technology, major topic, subtopic, status, time and revision toggle
- Custom subjects and learning topics
- Multiple custom roadmaps with ordered topics, optional phases and progress tracking
- Revision queue with spaced review scheduling
- Focus timer and session history
- Notes, tasks and resource library
- Analytics and subject progress
- Light and dark themes
- JSON export and import

## Course Library

Open Course Library from the dashboard or sidebar. Select a course card to open its ordered roadmap. Use the collection filter for projects, interview sets, coding practice, and the completion checklist. Lavender Mist and Soft Iris use the indigo-and-lavender glass palette.
