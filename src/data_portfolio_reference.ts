/**
 * Central portfolio data for Sumit Panchal's Manual QA Engineer portfolio.
 * Professional facts are grounded in the supplied resume and QA reference portfolio.
 * Project-specific testing scope and images come from the supplied project reference archive.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const profile = {
  fullName: 'Sumit Panchal',
  displayName: 'Sumit Panchal',
  firstName: 'SUMIT PANCHAL',
  seriesTag: 'THE QA SERIES',
  originalLabel: 'The Sumit Panchal Quality Original',
  role: 'Manual QA Engineer | Quality Assurance Analyst',
  tagline: ['Manual QA Engineer', 'Functional & Regression Testing', 'Exploratory Testing', 'Risk-Based Testing', 'Test Design & Defect Analysis', 'Agile & DevOps Collaboration'],
  homeIntro: 'Senior Quality Analyst | Manual QA Engineer with 5+ years of experience testing mobile and web applications. Skilled in Functional, Regression, and Exploratory Testing, Test Case Design, and Defect Management, with a focus on product quality and reliable software releases.',
  aboutIntro: 'Results-driven Senior Quality Analyst | Manual QA Engineer with 5+ years of experience ensuring the quality, reliability, and usability of mobile and web applications. Skilled in Functional, Regression, Smoke, Sanity, Exploratory, Black-Box, and Risk-Based Testing, with expertise in Requirement Analysis, Test Case Design, Test Execution, and Defect Lifecycle Management. Strong understanding of SDLC, STLC, and Agile methodologies, with proven experience collaborating with developers, project managers, and cross-functional teams to identify defects, mitigate risks, and support successful software releases. Focused on delivering high-quality products through structured testing, analytical problem-solving, and continuous quality improvement.',
  location: 'Ahmedabad, Gujarat, India',
  email: 'sumitpanchal5225@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/sumit-panchal-b790a8236/',
    github: 'https://github.com/lifeofthecoders',
  },
  resumePdf: asset('resume/Sumit_Panchal_Resume.pdf'),
  portrait: {
    src: asset('assets/portrait-720.webp'),
    srcSet: `${asset('assets/portrait-720.webp')} 720w, ${asset('assets/portrait-1100.webp')} 1100w`,
    alt: 'Sumit Panchal wearing a light blue suit and glasses.',
  },
  interests: ['Functional & Regression Testing', 'Exploratory Testing', 'Security & Performance Testing', 'Risk-Based Testing', 'Agile & DevOps Collaboration', 'Continuous Quality Improvement'],
};

export const education = [
  {
    school: 'Silver Oak University',
    place: 'Ahmedabad, Gujarat',
    degree: 'Bachelor of Engineering - Electronics & Communication Engineering',
    period: '2014 - 2018',
    score: 'CGPA 7.48',
  },
  {
    school: 'Atul Polytechnic',
    place: 'Gujarat, India',
    degree: 'Diploma of Engineering - Electronics & Communication Engineering',
    period: '2011 - 2014',
    score: 'CPI 7.74',
  },
];

export const experience = [
  {
    company: 'Echo Innovate IT',
    role: 'Quality Assurance Analyst',
    place: 'Manual QA · Web & Mobile Applications',
    period: 'June 2021 - Present',
    points: [
      'Tested web and mobile application functionality, usability, and cross-platform compatibility.',
      'Created and maintained test plans, test cases, test scenarios, and test data based on requirement analysis.',
      'Clarified requirements and translated business expectations into practical validation coverage.',
      'Tracked and documented defects in Jira, including clear reproduction steps, severity, priority, and verification notes.',
      'Maintained test documentation, test data, and traceability using Microsoft Excel.',
      'Performed risk-based testing, retesting, regression testing, and release-focused validation.',
    ],
  },
];

export type ProjectGalleryImage = { src: string; alt: string; caption: string };
export type Project = {
  id: string;
  title: string;
  genre: string;
  logline: string;
  overview: string;
  role: string;
  platforms: string[];
  image: string;
  bannerImage: string;
  gallery: ProjectGalleryImage[];
  testingAreas: string[];
  build: string[];
  features: string[];
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
  externalLinks?: { label: string; url: string }[];
};

const projectAsset = (name: string) => asset(`project/${name}`);

export const projects: Project[] = [
  {
    id: 'lymuv',
    title: 'LYMÜV - Taxi Booking Application',
    genre: 'Transportation · Ride-Hailing',
    logline: 'Manual QA coverage for a real-time taxi booking platform, focusing on passenger ride requests, 5-mile driver-radius broadcasting, first-acceptance allocation, automatic request cancellation for other drivers, payments, live tracking, and administrative workflows.',
    overview: 'A real-time taxi booking platform where passengers request rides and the system automatically broadcasts each request to all available drivers within a 5-KM radius. Once a driver accepts the request, it is automatically withdrawn from all other nearby drivers, ensuring a seamless first-acceptance ride allocation process.',
    role: 'Project Manager & Manual QA Engineer',
    platforms: ['Android', 'iOS', 'Web Admin'],
    image: projectAsset('project-lymuv-qa-gallery.jpg'),
    bannerImage: projectAsset('project-lymuv-banner.jpg'),
    gallery: [
      { src: projectAsset('project-lymuv-detail-1.jpg'), alt: 'LYMÜV pickup and route selection screens', caption: 'Pickup and destination selection with ride options' },
      { src: projectAsset('project-lymuv-detail-2.jpg'), alt: 'LYMÜV live trip and payment screens', caption: 'Live tracking, driver details, and payment summary' },
      { src: projectAsset('project-lymuv-detail-3.jpg'), alt: 'LYMÜV ride booking and trip management overview', caption: 'Ride booking and trip-management platform overview' },
    ],
    testingAreas: ['Ride Booking Flow', 'Driver Radius Broadcasting', 'First-Acceptance Allocation', 'Automatic Request Cancellation', 'Live Trip Tracking', 'Payment & Wallet', 'Notifications', 'Reports', 'Admin Panel'],
    build: [
      'Performed end-to-end validation of passenger ride-booking workflows, including pickup and destination selection.',
      'Tested automatic ride-request broadcasting to all available drivers within a 5-KM radius.',
      'Verified first-driver acceptance and automatic request withdrawal from all other nearby drivers.',
      'Tested driver availability, ride-request status updates, and passenger-driver interactions.',
      'Validated payment gateway, wallet transactions, payment summaries, and invoicing workflows.',
      'Verified ride notifications, live tracking, reports, and administrative workflows.',
    ],
    features: ['Passenger ride requests and booking lifecycle', 'Automatic request broadcasting to available drivers within a 5-KM radius', 'First-driver acceptance and automatic request withdrawal for other drivers', 'Real-time driver availability and ride-status updates', 'Live trip tracking and passenger-driver interaction', 'Payment gateway integration, wallet transactions, and invoicing', 'Push notifications and in-app alerts for ride updates', 'Administrative panel for managing rides, drivers, and reports'],
    palette: { from: '#07182a', via: '#174a72', to: '#07090e', accent: '#4ea7ff' },
    motif: 'flow',
  },
  {
    id: 'dap-me',
    title: 'Dap Me - Professional Networking Application',
    genre: 'Professional Networking · Social Discovery',
    logline: 'Manual QA coverage across user authentication, professional profiles, location-based discovery, search filters, connection requests, messaging, notifications, subscriptions, privacy, and admin moderation.',
    overview: 'A React Native professional networking app for discovering and connecting with people, sharing professional profiles, chatting in real time, and managing professional interactions, notifications, privacy settings, and admin moderation.',
    role: 'Project Manager & Manual QA Engineer',
    platforms: ['Android', 'iOS', 'Web Admin'],
    image: projectAsset('project-dap-me-qa-gallery.jpg'),
    bannerImage: projectAsset('project-dap-me-banner.jpg'),
    gallery: [
      { src: projectAsset('project-dap-me-detail-1.jpg'), alt: 'Dap Me discovery and saved-filter screens', caption: 'Professional discovery, location-based search, and saved filters' },
      { src: projectAsset('project-dap-me-detail-2.jpg'), alt: 'Dap Me profile, messaging, and connection screens', caption: 'Professional profiles, messaging, and connection requests' },
      { src: projectAsset('project-dap-me-detail-3.jpg'), alt: 'Dap Me professional networking overview', caption: 'Mobile networking and professional discovery overview' },
    ],
    testingAreas: ['Registration & Login', 'User Profiles', 'Location-Based Discovery', 'Search & Filters', 'Connections & Networking', 'Chat & Messaging', 'Notifications', 'Subscriptions & Payments', 'Privacy & Account Settings', 'Admin Panel'],
    build: [
      'Validated authentication, login, and professional profile management.',
      'Tested location-based discovery, radius filters, categories, and profile browsing.',
      'Verified connection requests, professional discovery, chat, and messaging workflows.',
      'Tested subscription and payment touchpoints and related account behavior.',
      'Reviewed notification, privacy, account settings, and admin moderation workflows.',
    ],
    features: ['User registration and secure login', 'Professional profile creation and management', 'Location-based professional discovery and search filters', 'Connection requests and network management', 'Direct messaging and in-app notifications', 'Subscription and payment management', 'Privacy settings and admin moderation'],
    palette: { from: '#06231b', via: '#0c7655', to: '#070a0b', accent: '#46e3a8' },
    motif: 'tenants',
  },
  {
    id: 'kinzwin',
    title: 'Kinzwin - Multiplayer Gaming Platform',
    genre: 'Gaming · Online Multiplayer · Competitive Gaming',
    logline: 'Manual testing of gameplay, scoring, multiplayer synchronization, chat, leaderboards, fair-play behavior, and admin controls.',
    overview: 'A competitive multiplayer gaming platform offering casual and skill-based games, social engagement, and real-time competition.',
    role: 'Manual QA Engineer',
    platforms: ['Android', 'iOS', 'Web Admin'],
    image: projectAsset('project-kinzwin-qa-gallery.jpg'),
    bannerImage: projectAsset('project-kinzwin-banner.jpg'),
    gallery: [
      { src: projectAsset('project-kinzwin-detail-1.jpg'), alt: 'Kinzwin multiplayer game room', caption: 'Live game board, player status, and turn flow' },
      { src: projectAsset('project-kinzwin-detail-2.jpg'), alt: 'Kinzwin tournament results and fair-play screens', caption: 'Tournament leaderboard, results, and fair-play checks' },
      { src: projectAsset('project-kinzwin-detail-3.jpg'), alt: 'Kinzwin multiplayer gaming overview', caption: 'Multiplayer gaming and tournament overview' },
    ],
    testingAreas: ['Gameplay', 'Scoring', 'Multiplayer Synchronization', 'Chat', 'Leaderboards', 'Fair Play', 'Admin Panel'],
    build: [
      'Validated core gameplay flows, scoring behavior, and player turn progression.',
      'Tested multiplayer synchronization and player-state consistency during live sessions.',
      'Verified chat functionality, leaderboard results, and fair-play scenarios.',
      'Covered related administrative workflows and release-focused regression areas.',
    ],
    features: ['Multiplayer games including Ludo, Carrom, and 8 Ball Pool', 'Online gaming and real-time multiplayer matches', 'Competitive tournaments and leaderboards', 'Player rankings and achievements', 'Fair-play verification and admin workflows', 'Player interaction and social engagement'],
    palette: { from: '#1e0a23', via: '#56245f', to: '#08070c', accent: '#c78cff' },
    motif: 'shield',
  },
  {
    id: 'bunny-books',
    title: 'Bunny Books - Photo Book & E‑Commerce Application',
    genre: 'E-Commerce · Photo Printing · Custom Gifting',
    logline: 'Manual QA coverage across photo selection and uploads, photo-book creation, page layouts, design customization, album previews, shopping cart, checkout, payments, order management, and delivery tracking.',
    overview: 'A photo-book e-commerce platform that allows users to turn their personal memories into beautifully designed printed photo books. Users can select and upload photos, create and customize photo albums, arrange pictures using different page layouts, preview their books, and place orders through a seamless checkout and delivery process.',
    role: 'Project Manager & Manual QA Engineer',
    platforms: ['Android', 'iOS', 'Web Admin'],
    image: projectAsset('project-bunny-books-qa-gallery.jpg'),
    bannerImage: projectAsset('project-bunny-books-banner.jpg'),
    gallery: [
      { src: projectAsset('project-bunny-books-detail-1.jpg'), alt: 'Bunny Books photo-book studio screens', caption: 'Photo upload, page layouts, and album preview' },
      { src: projectAsset('project-bunny-books-detail-2.jpg'), alt: 'Bunny Books checkout and tracking screens', caption: 'Checkout flow and order delivery status' },
      { src: projectAsset('project-bunny-books-detail-3.jpg'), alt: 'Bunny Books photo-book creation overview', caption: 'Photo-book creation and ordering overview' },
    ],
    testingAreas: ['Photo Selection & Upload', 'Photo Book Creation', 'Page Layout & Customization', 'Design Preview', 'Cart & Checkout', 'Payment Processing', 'Order Management', 'Delivery Tracking', 'Notifications', 'Admin Management'],
    build: [
      'Validated photo selection and upload functionality throughout the photo-book creation journey.',
      'Tested album creation, photo arrangement, page layouts, and design customization.',
      'Verified photo-book preview and shopping cart operations.',
      'Save photo books for later and resume saved projects',
      'Order multiple photo books in a single checkout',
      'Validated checkout, payment processing, and order placement workflows.',
      'Tested order status updates, notifications, delivery tracking, and administrative order management.',
    ],
    features: ['Photo selection and upload', 'Photo-book and album creation', 'Page layout and design preview before ordering', 'Save books and resume later', 'Add multiple photo books to a single order', 'Cart and checkout', 'Payment processing', 'Order notifications and delivery tracking'],
    palette: { from: '#201207', via: '#82501c', to: '#090807', accent: '#ffc46c' },
    motif: 'flow',
  },
  {
    id: 'health-e',
    title: 'Health-E - Digital Health & Medical Records App',
    genre: 'Healthcare · Digital Health Records · ABHA ID',
    logline: 'Manual QA coverage across mobile registration, OTP verification, ABHA ID generation, health profiles, medical records, appointment management, medication reminders, emergency information, specialized healthcare modules, and role-based administration.',
    overview: 'A digital health locker that enables users to securely manage their health information and medical records in one place. The platform supports ABHA ID registration, health profile management, medical report storage and sharing, doctor appointment booking, medication reminders, emergency information, pregnancy and paediatric care features, and administrative management.',
    role: 'Manual QA Engineer',
    platforms: ['Android', 'iOS', 'Web Admin'],
    image: projectAsset('project-health-e-qa-gallery.jpg'),
    bannerImage: projectAsset('project-health-e-banner.jpg'),
    gallery: [
      { src: projectAsset('project-health-e-detail-1.jpg'), alt: 'Health-E health records and emergency screens', caption: 'Medical reports, health records, and emergency information' },
      { src: projectAsset('project-health-e-detail-2.jpg'), alt: 'Health-E appointments and ABHA screens', caption: 'Appointments, ABHA Health ID, and medication reminders' },
      { src: projectAsset('project-health-e-detail-3.jpg'), alt: 'Health-E digital health records overview', caption: 'Digital health records and appointment workflows' },
    ],
    testingAreas: ['Registration & OTP Verification', 'ABHA ID Generation', 'Profile & Health Information', 'Medical Records & Reports', 'Record Sharing & Management', 'Appointment Scheduling', 'Medication Reminders', 'Emergency Information', 'Pregnancy & Paediatric Care', 'Admin & Role-Based Access'],
    build: [
      'Validated mobile registration, OTP verification, and authenticated access.',
      'Tested ABHA registration, ID generation, and health profile management.',
      'Verified medical-record workflows, including adding, viewing, searching, editing, deleting, and sharing records.',
      'Validated doctor appointment booking, modification, cancellation, and reminders.',
      'Tested medication reminders, emergency information, pregnancy and paediatric workflows.',
      'Covered administrative workflows and role-based access controls.',
    ],
    features: ['Registration and OTP verification', 'ABHA ID and health profile management', 'Medical records and report lifecycle', 'Record sharing and information access', 'Doctor appointments and medication reminders', 'Emergency, pregnancy, and paediatric care', 'Admin dashboard and role-based access'],
    palette: { from: '#06152a', via: '#164d79', to: '#07090e', accent: '#57c8f0' },
    motif: 'shield',
  },
  {
    id: 'regive',
    title: 'reGive - Community Sharing & Gift Transaction Application',
    genre: 'Community Sharing · Peer-to-Peer Gifting · Reuse & Sustainability',
    logline: 'End-to-end Manual QA coverage across item listing and editing, image uploads, item requests, request withdrawal, offeror promises, requester acceptance and decline, pickup scheduling, handover, transaction completion, ratings, and notifications.',
    overview: 'A community-sharing platform that enables users to give away unwanted or reusable items and connect with people who need them. Users can publish item listings, browse available items, submit or withdraw requests, manage offeror and requester interactions, schedule pickups, coordinate handovers, and complete gifting transactions through a structured peer-to-peer sharing lifecycle.',
    role: 'Project Manager & Manual QA Engineer',
    platforms: ['Android', 'iOS', 'Web Admin'],
    image: projectAsset('project-regive-qa-gallery.jpg'),
    bannerImage: projectAsset('project-regive-banner.jpg'),
    gallery: [
      { src: projectAsset('project-regive-detail-1.jpg'), alt: 'reGive item posting and request screens', caption: 'Post item photos and details, set pickup slots, and submit a request' },
      { src: projectAsset('project-regive-detail-2.jpg'), alt: 'reGive promise, handover, pickup, and rating screens', caption: 'Promise acceptance, handover, pickup, conclusion, and ratings' },
      { src: projectAsset('project-regive-detail-3.jpg'), alt: 'reGive community gifting overview', caption: 'Community gifting and handover workflow overview' },
    ],
    testingAreas: ['Post & Edit Article', 'Image Upload & Item Details', 'Article Browsing & Requests', 'Request Submission & Withdrawal', 'Promise, Accept & Decline', 'Request Accept & Decline', 'Pickup Scheduling', 'Expiry & Reminder Timing', 'Handover & Pickup Confirmation', 'Transaction Status & Completion', 'Ratings & Reviews', 'Push & In-App Notifications'],
    build: [
      'Validated article creation and editing, including photos, item details, categories, pickup slots, and address information.',
      'Verified requester flows to submit or withdraw requests and checked expected transaction status changes.',
      'Tested offeror promise selection and requester accept/decline behavior, including multiple-requester scenarios.',
      'Tested reminders, acceptance expiry, and pickup-slot timing.',
      'Validated handover, pickup, transaction completion, and role-specific ratings.',
      'Verified push notifications, in-app notifications, and transaction navigation.',
    ],
    features: ['Article posting and editing', 'Browsing and requesting available articles', 'Offeror and requester journeys', 'Request and promise lifecycle', 'Pickup scheduling and reminders', 'Handover and transaction completion', 'Ratings and in-app/push notifications'],
    palette: { from: '#071e1b', via: '#126451', to: '#070a09', accent: '#50d9ad' },
    motif: 'tenants',
  },
  {
    id: 'shopzone',
    title: 'ShopZone - E-Commerce Web Application',
    genre: 'E-Commerce · Web Application · Functional Testing',
    logline: 'Functional QA coverage for an e-commerce demonstration application, validating login, product browsing, cart operations, checkout, order confirmation, session handling, and cart persistence.',
    overview: 'ShopZone is a React and TypeScript e-commerce demonstration application. It supports simulated authentication, product browsing, shopping cart operations, checkout, and order confirmation. It is the application under test for the Playwright end-to-end automation suite.',
    role: 'Manual QA Engineer',
    platforms: ['Web', 'Desktop Browser', 'Responsive UI'],
    image: projectAsset('project-shopzone-qa-gallery.jpg'),
    bannerImage: projectAsset('project-shopzone-banner.jpg'),
    gallery: [
      { src: projectAsset('project-shopzone-detail-1.jpg'), alt: 'ShopZone product listing and shopping cart interface', caption: 'Product browsing, selection, and shopping cart management' },
      { src: projectAsset('project-shopzone-detail-2.jpg'), alt: 'ShopZone cart and checkout confirmation interface', caption: 'Checkout journey and order confirmation' },
      { src: projectAsset('project-shopzone-detail-3.jpg'), alt: 'ShopZone e-commerce application visual overview', caption: 'ShopZone application workflows and QA scope' },
    ],
    testingAreas: ['Login & Authentication', 'Product Listing', 'Add to Cart', 'Cart Management', 'Checkout Flow', 'Empty Cart Validation', 'Session Expiry', 'Cart Persistence', 'Order Confirmation'],
    build: [
      'Validated the login workflow using the application demonstration credentials.',
      'Tested product browsing and adding products to the shopping cart.',
      'Verified the successful checkout journey and order confirmation.',
      'Validated checkout prevention when the shopping cart is empty.',
      'Simulated session expiry by clearing browser cookies and verified redirection to login.',
      'Verified that cart contents remain available after re-login.',
    ],
    features: ['User login and authentication simulation', 'Product listing and product selection', 'Shopping cart and item management', 'Checkout and order confirmation', 'Session expiry and authentication redirection', 'Cart persistence using localStorage'],
    palette: { from: '#07182a', via: '#174a72', to: '#07090e', accent: '#4ea7ff' },
    motif: 'flow',
    externalLinks: [
      { label: 'Live Application', url: 'https://shop-zone-ecommerce-demo.vercel.app/' },
      { label: 'Application Source', url: 'https://github.com/lifeofthecoders/ShopZone-Ecommerce-Demo' },
    ],
  },
  {
    id: 'playwright-e2e',
    title: 'Playwright - E-Commerce & E2E Automation',
    genre: 'Test Automation · TypeScript · CI/CD',
    logline: 'Browser-based end-to-end automation for ShopZone using Playwright and the Page Object Model. The suite validates successful checkout, empty-cart error handling, session expiry, and cart persistence after re-authentication.',
    overview: 'A dedicated Playwright automation repository built with TypeScript and the Page Object Model. It tests ShopZone locally and against its deployed Vercel environment. GitHub Actions installs browser dependencies, validates TypeScript, executes the tests, and uploads reports and test-result artifacts.',
    role: 'QA Automation Engineer',
    platforms: ['Playwright', 'TypeScript', 'Chromium', 'GitHub Actions'],
    image: projectAsset('project-playwright-qa-gallery.jpg'),
    bannerImage: projectAsset('project-playwright-banner.jpg'),
    gallery: [
      { src: projectAsset('project-playwright-detail-1.jpg'), alt: 'Playwright terminal output showing three passing end-to-end tests', caption: 'Automated checkout, empty-cart, and session-persistence tests' },
      { src: projectAsset('project-playwright-detail-2.jpg'), alt: 'Successful GitHub Actions Playwright workflow', caption: 'GitHub Actions workflow and automated CI execution' },
      { src: projectAsset('project-playwright-detail-3.jpg'), alt: 'Playwright HTML report and CI execution overview', caption: 'Test report, execution results, and CI workflow' },
    ],
    testingAreas: ['End-to-End Testing', 'Page Object Model', 'Checkout Automation', 'Empty Cart Validation', 'Session Expiry', 'Cart Persistence', 'TypeScript Validation', 'CI/CD Integration', 'HTML Test Reports'],
    build: [
      'Structured browser automation using Playwright and TypeScript.',
      'Implemented Page Object Model classes to separate page interactions from test logic.',
      'Automated the successful e-commerce checkout scenario.',
      'Automated validation for checkout attempts with an empty shopping cart.',
      'Verified session expiry, authentication redirection, and cart preservation after re-login.',
      'Executed tests against both local ShopZone and the deployed Vercel application.',
      'Configured GitHub Actions to run TypeScript checks and Playwright tests automatically.',
      'Configured the workflow to upload HTML reports and test-result artifacts.',
    ],
    features: ['Three automated end-to-end test scenarios', 'Reusable Page Object Model architecture', 'TypeScript static validation', 'Chromium browser execution', 'Local and deployed application testing', 'GitHub Actions continuous integration', 'HTML reports and failure artifacts'],
    palette: { from: '#1e0a23', via: '#56245f', to: '#08070c', accent: '#c78cff' },
    motif: 'shield',
    externalLinks: [
      { label: 'Automation Repository', url: 'https://github.com/lifeofthecoders/Playwright-E2E-Test-Suite' },
      { label: 'GitHub Actions', url: 'https://github.com/lifeofthecoders/Playwright-E2E-Test-Suite/actions' },
      { label: 'Application Under Test', url: 'https://shop-zone-ecommerce-demo.vercel.app/' },
      { label: 'Live Test Report', url: 'https://lifeofthecoders.github.io/Playwright-E2E-Test-Suite/' },
    ],
  },
];

export type Achievement = { id: string; title: string; org: string; detail: string; laurel: string; link?: string };
export const achievements: Achievement[] = [
  { id: 'risk-coverage', title: 'Risk-Based Test Coverage', org: 'TEST PLANNING', detail: 'Improved testing coverage through risk-based prioritization, structured test scenarios, and regression testing.', laurel: 'TEST COVERAGE' },
  { id: 'impact-regression', title: 'Impact-Based Regression', org: 'REGRESSION TESTING', detail: 'Applied impact-based regression testing and developer collaboration to reduce the risk of post-release defects.', laurel: 'RISK REDUCTION' },
  { id: 'exploratory', title: 'Proactive Exploratory Testing', org: 'RELEASE QUALITY', detail: 'Supported release stability through exploratory testing and early identification of high-impact issues.', laurel: 'EARLY DETECTION' },
  { id: 'coordination', title: 'Structured QA Coordination', org: 'TEAM COLLABORATION', detail: 'Contributed to on-time testing commitments through clear documentation, prioritization, and cross-functional coordination.', laurel: 'COLLABORATION' },
  { id: 'defect-reporting', title: 'Detailed Defect Reporting', org: 'DEFECT MANAGEMENT', detail: 'Recognized for detailed defect reporting and thorough test coverage.', laurel: 'CLEAR REPORTING' },
  { id: 'uat-signoff', title: 'UAT & Release Sign-Off Support', org: 'USER ACCEPTANCE TESTING', detail: 'Supported client UAT and release sign-off by validating critical workflows and verifying fixes.', laurel: 'RELEASE READINESS' },

  // Four additional QA contributions

  { id: 'requirement-design', title: 'Requirement-Led Test Design', org: 'REQUIREMENT ANALYSIS', detail: 'Translated business requirements into structured test plans, test scenarios, test cases, and practical test data.', laurel: 'TEST DESIGN' },
  { id: 'cross-platform', title: 'Cross-Platform Validation', org: 'WEB & MOBILE QA', detail: 'Validated application functionality, usability, and compatibility across web browsers and mobile platforms.', laurel: 'PLATFORM QUALITY' },
  { id: 'user-journey', title: 'Critical User Journey Coverage', org: 'END-TO-END VALIDATION', detail: 'Tested essential product workflows across booking, networking, e-commerce, healthcare, gaming, and community applications.', laurel: 'USER EXPERIENCE' },
  { id: 'qa-documentation', title: 'Structured QA Documentation', org: 'TEST DOCUMENTATION', detail: 'Maintained test documentation, test data, execution records, and requirement traceability using Microsoft Excel.', laurel: 'QUALITY RECORDS' },
];

export type Certification = { issuer: string; name: string; link: string; date: string; category: string };
export const certifications: Certification[] = [
  { issuer: "LearnTube.ai", name: "Quality Analyst Assessment Certificate", date: "October 23, 2026", category: "QUALITY ASSURANCE", link: asset('certificates/sumit-panchal-quality-analyst-assessment-certificate.webp') },
  { issuer: "LearnTube.ai", name: "Automation Testing Assessment Certificate", date: "October 29, 2026", category: "QUALITY ASSURANCE", link: asset('certificates/sumit-panchal-automation-testing-sumit-certificate.webp') },
  { issuer: "LearnTube.ai", name: "API Integration", date: "October 23, 2026", category: "TECHNICAL SKILLS", link: asset('certificates/sumit-panchal-api-integration-certificate-of-completion.webp') },
  { issuer: "LearnTube.ai", name: "Component Testing", date: "October 23, 2026", category: "QUALITY ASSURANCE", link: asset('certificates/sumit-panchal-component-testing-certificate.webp') },
  { issuer: "LearnTube.ai", name: "Frontend Debugging", date: "October 23, 2026", category: "TECHNICAL SKILLS", link: asset('certificates/sumit-panchal-frontend-debugging-certificate.webp') },
  { issuer: "ISTQB / iSQI", name: "ISTQB Certified Tester – Testing with Generative AI (v1.1)", date: "October 08, 2026", category: "QUALITY ASSURANCE", link: asset('certificates/sumit-panchal-istqb-generative-ai-certificate.webp') },
  { issuer: "ISTQB • Indian Testing Board", name: "ISTQB Automation Test Engineer", date: "October 1, 2026", category: "QUALITY ASSURANCE", link: asset('certificates/sumit-panchal-certificate-of-profession-istqb-automation-test-engineer.webp') },
  { issuer: "ISTQB • Indian Testing Board", name: "ISTQB CTFL Certificate of Profession", date: "September 1, 2026", category: "QUALITY ASSURANCE", link: asset('certificates/sumit-panchal-istqb-ctfl-certificate-of-profession.webp') },
  { issuer: "ISTQB • Indian Testing Board", name: "Foundation Level Certificate in Software Testing", date: "August 1, 2026", category: "QUALITY ASSURANCE", link: asset('certificates/sumit-panchal-certificate-of-foundation-level-of-software-testing-profession.webp') },
  { issuer: "ISTQB • Sri Lanka Software Testing Board", name: "ISTQB Certified Tester – Foundation Level (Core)", date: "October 21, 2026", category: "QUALITY ASSURANCE", link: asset('certificates/sumit-panchal-istqb-foundation-level-certificate.webp') },
  { issuer: "ISTQB • Sri Lanka Software Testing Board", name: "ISTQB Certified Tester – Foundation Level Agile Tester", date: "October 15, 2026", category: "QUALITY ASSURANCE", link: asset('certificates/sumit-panchal-istqb-foundation-level-agile-tester-certificate.webp') },
  { issuer: "LinkedIn Learning", name: "Software Testing: Exploratory Testing", date: "August 22, 2020", category: "QUALITY ASSURANCE", link: asset('certificates/sumit-panchal-linkedin-learning-certificate-of-completion.webp') },
  { issuer: "Deloitte • Forage", name: "Quality Assurance Job Simulation", date: "July 22, 2026", category: "QUALITY ASSURANCE", link: asset('certificates/sumit-panchal-deloitte-quality-assurance-certificate.webp') },
  { issuer: "Tata • Forage", name: "Quality Assurance Job Simulation", date: "July 17, 2026", category: "QUALITY ASSURANCE", link: asset('certificates/sumit-panchal-tata-forage-certificate-of-completion.webp') },
  { issuer: "LearnTube.ai", name: "Business Analyst Assessment Certificate", date: "February 13, 2025", category: "QUALITY ASSURANCE", link: asset('certificates/sumit-panchal-business-analyst-assessment-certificate.webp') },
  { issuer: "Microsoft", name: "GitHub Foundations", date: "October 21, 2026", category: "TECHNICAL SKILLS", link: asset('certificates/sumit-panchal-microsoft-github-foundations-certificate.webp') },
  { issuer: "Oracle University", name: "Oracle Certified Foundations Associate – Java", date: "May 8, 2025", category: "TECHNICAL SKILLS", link: asset('certificates/sumit-panchal-oracle-certified-foundations-associate-certificate.webp') },
  { issuer: "Oracle University", name: "Oracle Data Platform 2025 Certified Foundations Associate", date: "September 29, 2025", category: "TECHNICAL SKILLS", link: asset('certificates/sumit-panchal-oracle-foundations-associate-oracle-dataplatform-certificate.webp') },
  { issuer: "LinkedIn Learning", name: "React Essential Training", date: "October 11, 2025", category: "TECHNICAL SKILLS", link: asset('certificates/sumit-panchal-react-essential-training-certificate.webp') },
  { issuer: "LinkedIn Learning", name: "Learning Python", date: "October 11, 2025", category: "TECHNICAL SKILLS", link: asset('certificates/sumit-panchal-linkedin-learning-python-certificates.webp') },
  { issuer: "LinkedIn Learning", name: "Processing Text with Python Essential Training", date: "October 11, 2025", category: "TECHNICAL SKILLS", link: asset('certificates/sumit-panchal-linkedin-learning-python-essential-certificate.webp') },
  { issuer: "Cisco Networking Academy • JS Institute", name: "Introduction to Data Science", date: "February 21, 2025", category: "TECHNICAL SKILLS", link: asset('certificates/sumit-panchal-cisco-networking-academy-certificate.webp') },
  { issuer: "Cisco Networking Academy • Silver Oak University", name: "JavaScript Essentials 1", date: "August 23, 2017", category: "TECHNICAL SKILLS", link: asset('certificates/sumit-panchal-javascript-essentials-certificate-1.webp') },
  { issuer: "Cisco Networking Academy • Silver Oak University", name: "JavaScript Essentials 2", date: "August 23, 2017", category: "TECHNICAL SKILLS", link: asset('certificates/sumit-panchal-javascript-essentials-certificate-2.webp') },
  { issuer: "Cisco Networking Academy • Silver Oak University", name: "CSS Essentials", date: "July 19, 2017", category: "TECHNICAL SKILLS", link: asset('certificates/sumit-panchal-modern-css-essentials-certificate.webp') },
  { issuer: "Cisco Networking Academy • Silver Oak University", name: "HTML Essentials", date: "July 17, 2017", category: "TECHNICAL SKILLS", link: asset('certificates/sumit-panchal-modern-html-essentials-certificate.webp') },
  { issuer: "C++ Institute • Cisco Networking Academy", name: "CLA: Programming Essentials in C", date: "March 21, 2017", category: "TECHNICAL SKILLS", link: asset('certificates/sumit-panchal-c-programming-achievement-certificate.webp') },
  { issuer: "CampusCrew • Unstop", name: "QuizOff 2026: India's Biggest AI Quiz", date: "July 19, 2026", category: "ACHIEVEMENTS", link: asset('certificates/sumit-panchal-quizoff-2026-certificate-for-sumit-panchal.webp') },
  { issuer: "LinkedIn Learning", name: "SQL Essential Training", date: "November 10, 2026", category: "TECHNICAL SKILLS", link: asset('certificates/sumit-panchal-linkedIn-learning-sql-essential-training-certificate.webp') },
  { issuer: "HackerRank", name: "Software Engineer Certification", date: "November 15, 2026", category: "TECHNICAL SKILLS", link: asset('certificates/sumit-panchal-software_engineer certificate.webp') },
  { issuer: "Claude Academy", name: "AI Fluency: Framework and Foundations", date: "November 16, 2026", category: "TECHNICAL SKILLS", link: asset('certificates/sumit-panchal-ai-fluency-framework-foundations-course-completion-badge.webp') },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };
const skills = (names: string[]) => names.map((name) => ({ name, mono: name.replace(/[^A-Za-z0-9]/g, '').slice(0, 2).toUpperCase() || 'QA' }));
export const skillCategories: SkillCategory[] = [
  { id: 'manual-testing', title: 'Manual Testing', subtitle: 'Core test execution', skills: skills(['Functional Testing', 'Regression Testing', 'Smoke Testing', 'Sanity Testing', 'Exploratory Testing', 'Retesting', 'UAT', 'End-to-End Testing', 'Integration Testing', 'System Testing', 'Black-Box Testing']) },
  { id: 'test-design', title: 'Test Design & Documentation', subtitle: 'Requirements into coverage', skills: skills(['Requirement Analysis', 'Test Planning', 'Test Case Design', 'Test Scenarios', 'Test Data Preparation', 'Test Documentation', 'Test Coverage', 'RTM', 'Test Reporting']) },
  { id: 'defect-management', title: 'Defect Management', subtitle: 'Clear, actionable defect lifecycle', skills: skills(['Bug Reporting', 'Defect Lifecycle', 'Severity & Priority', 'Defect Reproduction', 'Retesting & Verification', 'Root Cause Analysis']) },
  { id: 'web-mobile-qa', title: 'Web & Mobile QA', subtitle: 'Product behavior across platforms', skills: skills(['UI Validation', 'Cross-Browser Testing', 'Cross-Platform Testing', 'Responsive Testing', 'Usability Testing', 'Accessibility Testing', 'Compatibility Testing', 'API Testing Concepts', 'Mobile App Testing']) },
  { id: 'qa-methodologies', title: 'QA Methodologies', subtitle: 'Quality throughout delivery', skills: skills(['SDLC', 'STLC', 'Agile / Scrum', 'Risk-Based Testing', 'Positive & Negative Testing', 'Boundary Testing', 'Release Validation']) },
  { id: 'qa-tools', title: 'QA Tools & Technical Exposure', subtitle: 'Testing, investigation, and collaboration', skills: skills(['Jira', 'Microsoft Excel', 'Browser DevTools', 'Postman', 'Git & GitHub', 'BrowserStack', 'Selenium WebDriver', 'Java', 'TestNG', 'Maven', 'REST Assured', 'Jenkins']) },
];

export const skillEvidence: Record<string, string[]> = {
  'Functional Testing': ['LYMÜV', 'Dap Me', 'Health-E', 'reGive'],
  'Regression Testing': ['Release validation', 'Defect-fix verification'],
  'Exploratory Testing': ['Kinzwin', 'Health-E', 'reGive'],
  'Test Case Design': ['Requirement analysis', 'Structured test scenarios'],
  'RTM': ['Requirement traceability'],
  'Bug Reporting': ['Jira', 'Reproducible defect documentation'],
  'Cross-Browser Testing': ['Web and admin workflows'],
  'API Testing Concepts': ['Postman', 'API Integration credential'],
  'Jira': ['Defect tracking and lifecycle management'],
  'Microsoft Excel': ['Test data', 'Test documentation and traceability'],
  'Selenium WebDriver': ['Automation testing learning'],
  'TestNG': ['Automation testing learning'],
};

export type Episode = { code: string; title: string; description: string; tags: string[]; runtime: string; palette: Palette };
export type Season = { number: number; title: string; period: string; synopsis: string; episodes: Episode[] };
const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };
export const seasons: Season[] = [
  {
    number: 1, title: 'The Engineering Foundation', period: '2011 – 2018', synopsis: 'Academic foundation in Electronics & Communication Engineering.', episodes: [
      { code: 'S01 E01', title: 'The Diploma', description: 'Diploma of Engineering in Electronics & Communication Engineering at Atul Polytechnic.', tags: ['Diploma', 'Electronics & Communication', 'CPI 7.74'], runtime: '2011 – 2014', palette: amber },
      { code: 'S01 E02', title: 'The Degree', description: 'Bachelor of Engineering in Electronics & Communication Engineering at Silver Oak University.', tags: ['B.E.', 'Electronics & Communication', 'CGPA 7.48'], runtime: '2014 – 2018', palette: violet },
    ]
  },
  {
    number: 2, title: 'The QA Journey', period: 'June 2021 - Present', synopsis: 'Quality assurance work focused on web and mobile functionality, requirements, test design, defect analysis, and release validation.', episodes: [
      { code: 'S02 E01', title: 'Understanding the Product', description: 'Analyzing requirements and clarifying expected behavior before defining test coverage.', tags: ['Requirement Analysis', 'Business Workflows'], runtime: 'QA Practice', palette: ocean },
      { code: 'S02 E02', title: 'Testing with Intent', description: 'Preparing test plans, scenarios, cases, test data, and risk-based validation across application workflows.', tags: ['Test Design', 'Functional QA', 'Risk-Based Testing'], runtime: 'QA Practice', palette: crimson },
      { code: 'S02 E03', title: 'From Defect to Confidence', description: 'Documenting defects in Jira, reproducing issues, verifying fixes, and performing regression testing.', tags: ['Jira', 'Defect Lifecycle', 'Regression'], runtime: 'QA Practice', palette: jade },
    ]
  },
  {
    number: 3, title: 'Products & User Journeys', period: 'Eight QA project case studies', synopsis: 'Eight QA case studies across transportation, professional networking, multiplayer gaming, e-commerce, digital health, community sharing, and browser automation.', episodes: [
      { code: 'S03 E01', title: 'LYMÜV · Taxi Booking Application', description: 'Manual QA coverage for ride requests, pickup and destination selection, driver assignment, payments, wallet, live tracking, notifications, and admin workflows.', tags: ['LYMÜV', 'Mobile QA', 'Web Admin'], runtime: 'Project Case Study', palette: ocean },
      { code: 'S03 E02', title: 'Dap Me · Professional Networking Application', description: 'QA coverage across authentication, professional profiles, discovery, connection requests, real-time messaging, subscriptions, notifications, and admin moderation.', tags: ['Dap Me', 'Mobile QA', 'Web Admin'], runtime: 'Project Case Study', palette: jade },
      { code: 'S03 E03', title: 'Kinzwin · Multiplayer Gaming Platform', description: 'Manual testing of gameplay, scoring, multiplayer synchronization, chat, leaderboards, fair-play behavior, and administrative controls.', tags: ['Kinzwin', 'Functional Testing', 'Regression'], runtime: 'Project Case Study', palette: violet },
      { code: 'S03 E04', title: 'Bunny Books · Photo Book & E‑Commerce Application', description: 'Testing photo uploads, album creation, design previews, cart, checkout, payment processing, notifications, order management, and delivery tracking.', tags: ['Bunny Books', 'Mobile QA', 'E-Commerce'], runtime: 'Project Case Study', palette: amber },
      { code: 'S03 E05', title: 'Health-E · Digital Health & Medical Records App', description: 'QA coverage for registration, OTP verification, ABHA generation, medical records, appointments, reminders, health modules, and role-based administration.', tags: ['Health-E', 'Mobile QA', 'Web Admin'], runtime: 'Project Case Study', palette: ocean },
      { code: 'S03 E06', title: 'reGive · Community Sharing & Gift Transaction Application', description: 'End-to-end QA across item posting, requests, promise and acceptance, pickup scheduling, handover, transaction status, ratings, and notifications.', tags: ['reGive', 'End-to-End Testing', 'Mobile QA'], runtime: 'Project Case Study', palette: jade },
      { code: 'S03 E07', title: 'ShopZone · E-Commerce Web Application', description: 'Functional QA coverage for product browsing, cart management, simulated authentication, checkout, order confirmation, session expiry, and cart persistence.', tags: ['ShopZone', 'E-Commerce', 'Functional Testing'], runtime: 'Project Case Study', palette: ocean },
      { code: 'S03 E08', title: 'Playwright · E-Commerce & E2E Automation', description: 'TypeScript browser automation using the Page Object Model, checkout validation, empty-cart handling, session expiry, and GitHub Actions CI.', tags: ['Playwright', 'TypeScript', 'GitHub Actions'], runtime: 'Automation Case Study', palette: violet },
    ]
  },
  {
    number: 4, title: 'The QA Toolkit', period: 'Methods & Tools', synopsis: 'The processes, documentation, and tools used to plan, execute, and communicate testing.', episodes: [
      { code: 'S04 E01', title: 'The Test Plan', description: 'Requirement analysis, test planning, test scenarios, test cases, test data, and traceability.', tags: ['Test Design', 'RTM', 'Documentation'], runtime: 'Core Practice', palette: violet },
      { code: 'S04 E02', title: 'The Verification Loop', description: 'Functional, regression, smoke, sanity, exploratory, retesting, and UAT validation.', tags: ['Manual Testing', 'UAT', 'Release Validation'], runtime: 'Core Practice', palette: crimson },
      { code: 'S04 E03', title: 'The Toolset', description: 'Jira, Excel, browser developer tools, Postman, Git/GitHub, and additional automation-testing exposure.', tags: ['Jira', 'Excel', 'Postman', 'DevTools'], runtime: 'QA Toolkit', palette: ocean },
    ]
  },
  {
    number: 5, title: 'Learning & Credentials', period: 'Professional Development', synopsis: 'A structured view of manual testing, software-testing credentials, technical learning, professional development, and achievements.', episodes: [
      { code: 'S05 E01', title: 'Manual Testing', description: 'Continuous development of practical manual QA capabilities across functional, regression, smoke, sanity, exploratory, retesting, and end-to-end validation.', tags: ['Manual Testing', 'Test Execution', 'Risk-Based Testing'], runtime: 'QA Practice', palette: jade },
      { code: 'S05 E02', title: 'Software Testing', description: 'Software-testing credentials and QA assessments, including ISTQB learning and LearnTube.ai assessment achievements.', tags: ['ISTQB', 'LearnTube.ai', 'Software Testing'], runtime: 'Certifications & Assessments', palette: ocean },
      { code: 'S05 E03', title: 'Technical Learning', description: 'Technical learning across API integration, component testing, debugging, GitHub, Java, Python, web technologies, and data.', tags: ['API Integration', 'Java', 'Technical Learning'], runtime: 'Technical Development', palette: violet },
      { code: 'S05 E04', title: 'Professional Learning', description: 'Ongoing development in Agile methodologies, SDLC, STLC, collaboration, documentation, communication, and quality-focused delivery.', tags: ['Agile Methodologies', 'SDLC & STLC', 'Continuous Learning'], runtime: 'Professional Development', palette: amber },
      { code: 'S05 E05', title: 'Achievements & Growth', description: 'Highlights of risk-based test coverage, impact-based regression, proactive exploratory testing, structured QA coordination, and continued professional growth.', tags: ['QA Achievements', 'Quality Improvement', 'Professional Growth'], runtime: 'Career Highlights', palette: crimson },
    ]
  },
  {
    number: 6, title: 'What’s Next?', period: 'Future Focus', synopsis: 'The next stage of continuous learning: strengthening API testing, expanding automation skills, and growing toward broader quality engineering practices.', episodes: [
      { code: 'S06 E01', title: 'Strengthen API Testing', description: 'Build deeper practical experience in API validation, request and response analysis, and reliable service-level testing.', tags: ['API Testing', 'Postman', 'Service Validation'], runtime: 'Next Learning Goal', palette: ocean },
      { code: 'S06 E02', title: 'Expand Automation Skills', description: 'Continue developing automation-testing skills through Selenium WebDriver, Java, TestNG, and Maven.', tags: ['Selenium', 'Java', 'TestNG', 'Maven'], runtime: 'Next Learning Goal', palette: violet },
      { code: 'S06 E03', title: 'Grow Quality Engineering', description: 'Explore CI/CD, performance and security testing while continuously improving test coverage and release confidence.', tags: ['CI/CD', 'Performance Testing', 'Security Testing', 'Quality Engineering'], runtime: 'Long-Term Direction', palette: jade },
    ]
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };
export const topPicks: TopPick[] = [
  { label: 'Test Execution', title: 'Functional Testing', detail: 'Validate expected product behavior and business workflows.', palette: crimson },
  { label: 'Regression', title: 'Regression Testing', detail: 'Recheck impacted areas after changes and defect fixes.', palette: ocean },
  { label: 'Test Design', title: 'Test Scenarios', detail: 'Turn requirements into clear, traceable coverage.', palette: violet },
  { label: 'Defect Control', title: 'Bug Reporting', detail: 'Clear steps, expected results, evidence, and reproducibility.', palette: amber },
  { label: 'Exploration', title: 'Exploratory Testing', detail: 'Investigate product behavior beyond scripted paths.', palette: jade },
  { label: 'Risk Focus', title: 'Risk-Based Testing', detail: 'Prioritize critical workflows and potential user impact.', palette: crimson },
  { label: 'Verification', title: 'Retesting', detail: 'Verify fixes and confirm the reported behavior is resolved.', palette: ocean },
  { label: 'Compatibility', title: 'Web & Mobile QA', detail: 'Validate UI, responsiveness, and cross-platform behavior.', palette: violet },
  { label: 'Collaboration', title: 'Jira & QA Reports', detail: 'Support transparent defect tracking and test communication.', palette: amber },
  { label: 'Experience', title: '5+ Years in QA', detail: 'Quality assurance across web and mobile application workflows.', palette: jade },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };
export const introSlides: IntroSlide[] = [
  {
    kicker: 'Profile',
    title: 'Manual QA Engineer',
    lines: [
      'Sumit Panchal · Senior Quality Analyst',
      '5+ Years Of Experience In Software Testing',
      'Agile Methodologies · SDLC & STLC',
      'Functional & Regression Testing · Risk-Based Testing',
      'Exploratory Testing · Black-Box Testing',
      'Smoke · Sanity · Gorilla Testing · Defect Lifecycle Management',
    ],
    chips: ['Mobile & Web Applications', 'Manual Testing', 'Quality Assurance', 'Functional & Regression Testing'],
  },
  {
    kicker: 'Test Design',
    title: 'Requirements To Coverage',
    lines: [
      'Requirement Analysis · Test Planning · Test Scenarios',
      'Test Cases · Test Data · RTM',
    ],
    chips: ['Test Case Design', 'Risk-Based Scenarios', 'Security Design', 'Documentation'],
  },
  {
    kicker: 'Execution',
    title: 'Execute With Confidence',
    lines: [
      'Functional · Regression · System · Performance Testing',
      'Security · Black-Box · Monkey · Gorilla Testing',
      'Retesting · UAT · End-To-End Testing',
      'Selenium · Java · TestNG · Maven',
    ],
    chips: ['Manual Testing', 'Exploratory Testing', 'Security Testing', 'Risk-Based Testing'],
  },
  {
    kicker: 'Defects',
    title: 'Make Issues Actionable',
    lines: [
      'Reproduction Steps · Severity & Priority',
      'Defect Lifecycle Management · Retesting · Root Cause Analysis',
    ],
    chips: ['Jira', 'Defect Reporting', 'Root Cause Analysis'],
  },
  {
    kicker: 'Projects',
    title: 'Eight QA Case Studies',
    lines: [
      'LYMÜV · Dap Me · Kinzwin · Bunny Books',
      'Health-E · reGive',
      'ShopZone · Playwright',
    ],
    chips: ['Mobile', 'Web', 'Admin', 'Automation'],
  },
  {
    kicker: 'Certified',
    title: `${certifications.length} Credentials`,
    lines: [
      'Software Testing · QA Assessments · API Integration',
      'ISTQB · LearnTube.ai · Technical Learning',
    ],
    chips: ['Manual Testing', 'Software Testing', 'Technical Learning', 'Professional Learning & Achievements'],
  },
  {
    kicker: 'What Next?',
    title: 'The Next Quality Frontier',
    lines: [
      'Strengthen API Testing · Expand Automation Skills',
      'Build Selenium · Java · TestNG · Maven Experience',
      'Explore CI/CD · Performance · Security Testing',
      'Keep Learning · Improve Coverage · Deliver Quality',
    ],
    chips: ['Automation Testing', 'API Testing', 'Continuous Improvement', 'Quality Engineering'],
  },
];

export type ProfileId = 'sumit' | 'recruiter' | 'qa' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';
export const viewerProfiles: { id: ProfileId; name: string; blurb: string; color: string; order: SectionId[] }[] = [
  { id: 'sumit', name: 'SUMIT PANCHAL', blurb: 'The Complete QA Portfolio', color: '#e5132b', order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'] },
  { id: 'recruiter', name: 'RECRUITER', blurb: 'Experience, QA Skills & Resume First', color: '#4cc9ff', order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'] },
  { id: 'qa', name: 'QA TEAM', blurb: 'Testing Projects, Methods & Defect Workflows', color: '#46e3a8', order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'] },
  { id: 'creative', name: 'PRODUCT TEAM', blurb: 'Product Journeys & Quality Highlights', color: '#ffb547', order: ['journey', 'originals', 'picks', 'moments', 'about', 'skills', 'story'] },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'Profile • Education & experience', palette: violet },
  journey: { nav: 'Journey', card: 'QA Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Projects', card: 'QA Projects', meta: `${projects.length} Project Case Studies`, palette: crimson },
  picks: { nav: 'QA Focus', card: 'QA Focus Areas', meta: '10 Testing Priorities', palette: jade },
  skills: { nav: 'Skills', card: 'QA Skills', meta: `${skillCategories.length} Skill Categories`, palette: ocean },
  moments: { nav: 'Credentials', card: 'QA Highlights', meta: `${achievements.length} Contributions • ${certifications.length} Credentials`, palette: crimson },
  story: { nav: 'Resume', card: 'Resume', meta: 'Resume • View & download', palette: violet },
};
