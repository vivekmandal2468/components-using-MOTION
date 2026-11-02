# Prime.dev Components

A responsive collection of animated React UI components built with Tailwind CSS and Motion. The project is designed as an interactive component gallery, with each route demonstrating a different layout, animation, or interaction pattern.

## 📌 Project Overview

- **Built** a reusable UI component gallery with React and Vite.
- **Created** animated buttons, cards, text effects, FAQ accordions, and layout cards.
- **Implemented** Motion-powered micro-interactions, hover effects, transitions, and SVG animations.
- **Added** responsive navigation with a collapsible sidebar and mobile menu behavior.
- **Added** light and dark theme support with a global theme toggle.
- **Designed** responsive layouts for mobile, tablet, and desktop screens.
- **Included** lazy-loaded routes with a loading fallback and a custom 404 page.
- **Added** an interactive profile modal with an external X profile link.

## ✨ Components and Pages

The component gallery currently includes:

- Animated buttons
- Button glide effects
- Interactive cards
- Animated text
- Beam and SVG animations
- Sequence animations
- Layout cards with expandable content
- FAQ accordion
- Form page
- Custom loading animation
- Custom 404 page

Use the sidebar to browse the available components. On mobile screens, the sidebar can be opened from the header and closes after selecting a route or clicking outside it.

## 🛠️ Tech Stack

- **Framework:** React
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Motion for React
- **Routing:** React Router
- **Icons:** Lucide React
- **Themes:** next-themes
- **Utilities:** clsx and tailwind-merge
- **Version Control:** Git and GitHub




## 📁 Project Structure

```text
src/
├── Dashboard.jsx       # Main layout and application routes
├── header.jsx          # Header, theme controls, and mobile sidebar toggle
├── sidebar.jsx         # Responsive component navigation
├── home.jsx            # Component gallery home page
├── beamAnimation.jsx   # Animated SVG beam component
├── layoutCard.jsx      # Expandable responsive layout cards
├── faq.jsx             # FAQ accordion
├── loading.jsx         # Loading animation
├── page404.jsx         # Fallback 404 page
└── index.css           # Global styles and Tailwind setup

public/
└── ...                 # Images and other static assets
```

## 📱 Responsive Behavior

- Desktop screens use the full sidebar navigation.
- Mobile screens use a compact header toggle for opening the sidebar.
- Sidebar links close the mobile sidebar after navigation.
- Clicking outside the mobile sidebar closes it.
- Components adapt their spacing, sizing, and layout to smaller screens.
- The gallery avoids unnecessary horizontal overflow on mobile.

## 🌙 Theme Support

The application supports light and dark themes through `next-themes`. Use the theme toggle in the header to switch between themes.

## 🖼️ Preview Image

The project includes a share preview image at:

```text
public/comonent_link_prev_1200x630.jpg
```
