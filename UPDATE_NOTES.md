# Cinematic Portfolio Update

## Updated
- Replaced the portfolio resume PDF at `public/resume/Sumit_Panchal_QA_Resume.pdf` with the supplied latest resume.
- Preserved the existing cinematic resume download URL so current resume buttons continue to work.
- Replaced generic project cards with eight project-specific case studies and detailed cinematic project overlays.
- Added project banners, detail screenshots, gallery captions, platforms, feature lists, testing areas, and QA activity notes from the Portfolio Series reference archive.
- Added the reference archive's 31 certificate records and certificate images with category filters.
- Updated the experience timeline with Echo Innovate IT, Niharika Softweb Solutions Pvt. Ltd., and Makein Technologies QA training.
- Updated portfolio metrics to avoid unsupported claims and corrected the portrait alt text.
- Added a Certifications item to desktop and mobile navigation.

## Run locally
```bash
npm ci
npm run dev
```

## Build
```bash
npm run build
```

The project source is provided without the previous `.git`, `dist`, and `node_modules` directories. Rebuild `dist` after installing dependencies.

## Follow-up UI revision
- Project case studies now render as a full-page view instead of a modal/popup.
- Replaced the close control with a Back to projects action that returns to the project listing.
- Moved each project title and subtitle below its banner image.
- Added hover-only (and keyboard-focus accessible) open-in-new-tab arrow controls to the banner and all three gallery images.
- Moved the project gallery directly below Testing coverage.
- Styled external project links as consistent cinematic buttons.
- Removed the Makein Technologies website link.
- Replaced experience-list em-dash bullets with small gold markers.
- Added explicit Exploratory Testing and Risk-Based Testing skill chips.
- Added/retained scroll-reveal and hover animations across project detail content.

## Final project-detail and QA-expertise corrections
- Project details now open as a dedicated full-viewport screen, fixed above the portfolio content, rather than appearing inline within the current page flow.
- The detail screen has its own scroll area and Back to projects action.
- Project gallery now contains exactly the three detail screenshots; the banner is shown only in the banner area.
- The three gallery screenshots display in one horizontal row on desktop (responsive to two columns/tablet and one column/mobile).
- Product capabilities now appear directly below QA activities.
- The QA Expertise section explicitly displays Exploratory Testing, Risk-Based Testing, and Agile & DevOps Collaboration together in the core QA skill chips.

## Project banner visibility fix
- Updated the full project-detail banner to use its natural aspect ratio with `height: auto`, `width: 100%`, and `object-fit: contain`.
- Removed the fixed 16:7 crop from the detail banner so the complete original image remains visible without stretching.
- Added a dark centered backing surface and a responsive maximum height for desktop and mobile screens.

## First two project banner spacing fix
- Adjusted only the LYMÜV and Dap Me detail banners to render at their natural full-width aspect ratio without the 72vh max-height constraint that caused side spacing.
- Kept the existing responsive `object-contain` behavior and did not change banner sizing for any other project.

## Experience section design restoration
- Restored the original compact gold-rail Experience & Milestones layout from the earlier component design.
- Kept the original Framer Motion reveal behavior, staggered entry timing, gold milestone markers, typography, spacing, and black/gold palette.
- Uses the portfolio data source for Echo Innovate IT, Niharika Softweb Solutions Pvt. Ltd., and Makein Technologies.
- Includes Makein training duration and technology tags.
- Preserved the existing project image focus treatment and all other App.css styles.

## Experience section matched to uploaded reference ZIP
- Replaced the ExperienceSection component with the exact layout and Framer Motion animation implementation from the newly uploaded `Sumit-Panchal-QA-Cinematic-Portfolio-main.zip`.
- Preserved the reference's two-column desktop date/route/content layout, 140px desktop rail position, mobile 19px rail position, animated scroll-progress gold line, node hover effects, headline entrance animation, milestone reveal timing, typography, spacing, and background treatment.
- Added only the missing Niharika Softweb Solutions Pvt. Ltd. Application Support Engineer milestone (December 2018–December 2020).
- Shifted the existing multi-domain and continuous-growth IDs to keep milestone keys unique.
- Removed the prior custom Experience CSS overrides so the uploaded reference component's original Tailwind/Framer Motion design is not altered.
- Kept the rest of the current portfolio, including project pages, gallery, banner fixes, resume, certificates, and existing assets.

## Experience date labels — single-line alignment
- Kept all experience date labels on one line on desktop and mobile using `whitespace-nowrap`.
- Widened the desktop date column from 140px to 200px and moved the desktop gold rail/nodes to the matching 200px position so labels fit without wrapping and the timeline remains aligned.
- Kept the original typography, colors, reveal transitions, scroll-progress animation, and milestone content unchanged.
