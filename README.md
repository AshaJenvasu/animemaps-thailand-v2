# 🎌 Animemaps Thailand v2
### React + TypeScript Edition
(https://animemaps-thailand-v2.vercel.app/)
---

System Design & Software Architecture 
https://www.figma.com/board/otlg1VACLogb10l3FjtgE8/Animemaps-Thailand?node-id=0-1&t=eqeOpP72shubRskL-1
--

## 🌟 Overview

**Animemaps Thailand** solves a real problem — anime fans in Thailand 
have to search across multiple platforms just to find events.

This v2 is a complete refactor of the original Vanilla JS prototype, 
migrating to a modern, scalable architecture with **React, TypeScript, 
and Tailwind CSS**.

🔗 **v1 (Vanilla JS):** https://ashajenvasu.github.io/animemaps-thailand/  
🔗 **v2 (React + TS):** https://animemaps-thailand-v2.vercel.app/

---

## 🏗️ System Design & Architecture

### Separation of Concerns (SoC)

**Frontend (Vercel)**
* Container Components (Pages)
  * Home.tsx
  * Calendar.tsx
  * AboutUs.tsx
* Presentational Components
  * Navbar
  * Footer
  * EventCard
  * EventBannerCard
  * EventFilterBar
  * EventRecommendationList
  * UpcomingEventList
* Custom Hooks (Logic Layer)
  * useEvents()
  * useFilter()
  * useSearch()
  * useSlideshow()
* TypeScript Interface (Event)
  * id, name, type, startDate, endDate, location, image, link, description

**Backend (Render)**
* Middleware
  * cors()
  * express.json()
  * auth()
* API Endpoints
  * GET /api/events
  * GET /api/events/recommendations
  * GET /api/events/upcoming
  * POST /api/events · PUT · DELETE
* Entities (Mongoose Schema)
  * Event
  * User

### Data Flow
User action
→ Container component
→ Custom hook
→ Fetch API (HTTP request)
→ Express endpoint
→ Mongoose → MongoDB Atlas
→ JSON response
→ Custom hook updates state
→ Presentational component re-renders

---

## 💡 Why Rebuild?

| | v1 (Vanilla JS) | v2 (React + TS) |
|---|---|---|
| Architecture | Procedural | Component-Based (SoC) |
| Type Safety | ❌ | ✅ TypeScript |
| Styling | Custom CSS | Tailwind CSS |
| Logic Layer | Inline JS | Custom Hooks |
| Scalability | Limited | Production-Ready |

---

## 🚀 Key Features

- **🔍 Real-time Search & Filter** — Filter by type and month instantly
- **🎠 Auto Slideshow** — Featured events with fade transition
- **📱 Fully Responsive** — Mobile-first design with Tailwind
- **🗓️ Event Calendar** — Browse all upcoming events in one place
- **⚡ Type-Safe Data** — Custom TypeScript interfaces for all event data

---

## 🛠️ Tech Stack

**Frontend**
- React 18 (Vite) · TypeScript · Tailwind CSS

**Backend**
- Node.js · Express.js · Mongoose

**Database**
- MongoDB Atlas

**Deployment**
- Vercel (Frontend) · Render (Backend) · GitHub (Source Control)

---

## 👨‍💻 About the Developer

**Chaiyawat Jenvasu (Asha)**  
Self-taught developer & MERN Stack student at Generation Thailand

- 🎯 **Goal:** Software Developer in Japan by October 2026
- 🌐 **Languages:** Thai (Native) · English (TOEIC 875) · Japanese (JLPT N3, targeting N2)
- 🚀 **Background:** Co-founder of [animemaps.com](https://animemaps.com) (2021)

> *"Building the future of Thailand's Anime Community, one component at a time."*

---

## 📬 Contact

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?logo=linkedin)](https://www.linkedin.com/in/chaiyawat-jenvasu-a5a606335)
