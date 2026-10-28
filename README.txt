AVENGERS NEXUS — UPGRADED EDITION

Features
- Daily missions regenerate at the user's local calendar date. Refreshing the page during the same day preserves progress. If the app remains open overnight, it detects the new date and refreshes missions.
- Custom one-off missions, notes, projects, shortcuts, goals, schedule, and sessions are preserved separately.
- Local browser persistence with JSON export/import backup.
- Responsive layout, keyboard accessibility refinements, live greeting/date, more polished visual details, and reduced-motion support.
- Installable PWA and basic offline caching when served from HTTPS or localhost.
- Focus timer, calendar, analytics, character themes, project board, and knowledge vault.

RUN
1. Extract this folder.
2. For normal local use, open index.html in a modern browser. Browser storage works per browser/profile.
3. For install/offline PWA support, serve this folder on localhost or deploy to HTTPS (for example GitHub Pages). Service workers do not run from file:// URLs.
4. Use Settings & Backup to export a JSON backup before clearing browser data or moving devices.

IMPORTANT
This is a local-first app. Data stays in the current browser and is not automatically synced across devices. Daily reset occurs when the app is opened or detects a new local date; browsers do not run the page's JavaScript while it is fully closed.
- Daily Mission Archive: each day's daily checklist is snapshotted by local date, including completed and unfinished status. Today's boxes reset on the next day while previous daily records remain visible under Mission Tasks. Records are included in the JSON backup.
