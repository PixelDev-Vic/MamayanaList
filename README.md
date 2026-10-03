# MamayanaList

A focused, distraction-free To-Do and Task Management web application built with **React 19**, **Tailwind CSS v4**, and **Vite**.

Designed with intentional UX principles: high-contrast typography, zero cognitive clutter, responsive task cards with collapsible subtask checklists, and an anti-distraction indigo color system.

---

## ✨ Features

- **Dynamic Task Management**: Quickly capture tasks with keyboard shortcuts (`Enter` to submit) or the intuitive action form.
- **Hierarchical Subtasks**: Break larger tasks down into focused micro-steps with individual checkboxes and a live completion counter (`X / Y`).
- **Collapsible Detail Drawer**: Expand any task card to write detailed notes or manage subtask checklists without cluttering the main list view.
- **Done & Not Done Toggling**: Easily toggle status with dedicated action buttons and visual status badges.
- **Task Deletion**: Remove completed or obsolete tasks with an instant click.
- **Visual Progress Counter**: Real-time counter displays total items, completed tasks, and remaining action items.
- **Inter & Monospace Typography**: Clean hierarchical layout powered by Google Font's *Inter* for body readability and tabular monospace numbers for counters.
- **Custom Sleeping Mascot SVG**: Handcrafted mascot SVG branding in the header representing the playful *"mamaya na"* philosophy while keeping your priorities organized.
- **Built-in User Guide**: Integrated quick reference explaining how to add, complete, and delete tasks.

---

## 🛠️ Tech Stack

- **Frontend Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/vite`
- **Linting**: [Oxlint](https://oxc.rs/) for blazing-fast static code analysis

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.0 or higher recommended)
- `npm` or `pnpm`

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/PixelDev-Vic/MamayanaList.git
   cd MamayanaList
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts Vite local development server with Hot Module Replacement (HMR) |
| `npm run build` | Builds optimized production assets to `dist/` |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs `oxlint` static code analysis |

---

## 📂 Project Structure

```text
mamayanalist/
├── public/
│   ├── favicon.svg          # Mascot favicon
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx         # App title, description & mascot banner
│   │   ├── SleepingManIcon.jsx# Bespoke inline vector mascot
│   │   ├── TaskForm.jsx       # Task input bar with submission handler
│   │   ├── TaskItem.jsx       # Card with title, badge, subtasks & drawer
│   │   ├── TaskList.jsx       # Task loop and empty state
│   │   └── UserGuide.jsx      # Step-by-step usage guide card
│   ├── App.jsx                # Main application state and layout
│   ├── index.css              # Tailwind CSS v4 design tokens and theme
│   └── main.jsx               # React 19 application entry point
├── index.html                 # HTML shell with Google Fonts & metadata
├── vite.config.js             # Vite configuration with Tailwind plugin
└── package.json               # Project manifest and dependencies
```

---

## 📄 License

This project is licensed under the MIT License.
