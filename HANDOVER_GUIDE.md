# Rhema Touch Africa — Website Management & Handover Guide

This website was built with a modular structure so the Rhema Touch Africa team can update text, contacts, biographies, and photos without editing layout or design code.

## 1. Project Structure
- `public/images/` — Stores all website photos (`logo.jpeg`, `founders.jpeg`, `peris-flyer.jpeg`, `letterhead-blue.jpeg`).
- `src/data/ministryContent.js` — **The single file where all website text, phone numbers, emails, timeline milestones, and ministry pillars live.**
- `src/components/` — Visual layout sections (`Navbar`, `Hero`, `FoundersBio`, `JourneyTimeline`, `MinistryPillars`, `PartnershipForm`, `Footer`).

## 2. How to Update Website Content
1. Open `src/data/ministryContent.js`.
2. Edit any text inside quotation marks (`"..."`) — such as phone numbers, email addresses, biography paragraphs, or ministry pillar descriptions.
3. Save the file. If hosted via GitHub + Vercel/Netlify, pushing the change to the `main` branch automatically updates the live website within 60 seconds.

## 3. How to Replace Photos
1. Place the new image inside `public/images/`.
2. Either keep the exact same filename (`founders.jpeg`, `logo.jpeg`, `peris-flyer.jpeg`) or update the path inside `src/data/ministryContent.js`.

## 4. Local Preview Commands
Run inside the project folder:
```bash
npm install
npm run dev