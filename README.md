# student_assessment
Beyond Boundaries,Within Reach

Student Assessment (student_portal) — a Next.js web application for managing student assessments and administrative workflows. It’s a component-driven UI built with the Next.js App Router (React + TypeScript), focused on reusable UI Components (inputs, dropdowns, buttons, cards), modular layouts (navbar, sidebar, profile dropdown, dashboard layout), and small modal flows for CRUD actions on exams.

## Getting Started

First, run the development server:


```bash

npm i 

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech stack
 
-Next.js (App Router) + React (server/client components)
-TypeScript

-Tailwind for stying

-Ant Design theming (custom theme file)

-localstorage for CRUD operations

-Static assets  from  assets

-Modern bundlers and package manager via package.json (project generated with create-next-app)

## Architecture & structure

-App-level entry: layout.tsx and page.tsx .

-Component-driven UI: components contains small, focused components (card, customBtn, customInput, custom_dropdown, RadioComponent, navbar, sidebar, profileSidebar) for  reuse and composability.

-Layouts and pages: dashboardLayout.tsx — shows how pages are wrapped in consistent layout shells (navigation, sidebar, top bar).

-Modals and flows: modals includes modal patterns and nested modal implementations for creating and deleting exams

-Utilities: utils (interfaces, routes, mocks) and index.tsx — demonstrates typed interfaces, route constants, and local mocked data used for development/testing.

## Key components 

-Reusable UI components: customInput, customBtn, custom_dropdown, card

-Sidebar & navigation: sidebar/index.tsx and navbar/index.tsx 

-Dashboard layout: dashboardLayout.tsx 

-Modals for CRUD: modals/createExam and modals/deleteExam —  form validations, and user confirmation flows.