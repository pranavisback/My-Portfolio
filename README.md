# Pranav's AI/ML Portfolio Website

Welcome to the repository for Pranav's personal portfolio website! This project showcases a modern, interactive, and responsive web presence for an AI/ML Engineer, featuring dynamic backgrounds, custom cursor effects, and dedicated project pages.

## ✨ Features

*   **Dynamic 3D Background:** An engaging and subtle 3D animated background (powered by Vanta.js and Three.js) that adds depth and a futuristic feel.
*   **Interactive Cursor Effect:** A custom cursor that leaves a glowing trail and produces a ripple effect on click/tap, enhancing user interaction.
*   **Responsive Design:** Fully optimized for various screen sizes, ensuring a seamless experience on desktops, tablets, and mobile devices.
*   **Dedicated Project Pages:** Each featured project has its own detailed page, accessible via client-side routing, providing in-depth information and media.
*   **Glassmorphism UI Elements:** Modern translucent UI components with subtle blur and glow effects.
*   **Mailto Form Integration:** A contact form that directly opens the user's email client with pre-filled information, simplifying communication.
*   **Smooth Scrolling Navigation:** Effortless navigation between sections with smooth scroll animations.

## 🛠️ Technologies Used

*   **React.js:** A JavaScript library for building user interfaces.
*   **Vite:** A fast build tool for modern web projects.
*   **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
*   **Three.js:** A JavaScript 3D library for rendering animated graphics.
*   **Vanta.js:** A library for animated 3D backgrounds, built on Three.js.
*   **Lucide React:** A collection of beautiful and customizable open-source icons.
*   **React Router DOM:** For declarative routing in React applications.

## 🚀 Getting Started

Follow these steps to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have Node.js and npm (Node Package Manager) installed on your system.

*   [Node.js](https://nodejs.org/en/download/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/pranavisback/portfolio-website.git
    cd portfolio-website
    ```

2.  **Install dependencies:**
    Due to potential peer dependency conflicts, it's recommended to use the `--legacy-peer-deps` flag.
    ```bash
    npm install --legacy-peer-deps
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    This will start the development server, usually at `http://localhost:5173`. Open this URL in your browser to view the website.

### Build for Production

To create a production-ready build of the website:

```bash
npm run build
```
This will compile the project into the `dist` directory, which can then be deployed to any static hosting service.

## ⚙️ Customization

### Changing Content

*   **Text Content:** Most of the text content (e.g., hero section text, about me description, skill names) can be found and edited directly in `src/App.jsx`.
*   **Project Details:** Project information (title, description, image, tech stack, links) is managed within the `projects` array in `src/App.jsx` and `src/components/ProjectDetail.jsx`.

### Updating Images

*   **Profile Image:** Replace `src/assets/my_image.png` with your own profile picture. Ensure it's a circular image for best results with the existing styling.
*   **Project Thumbnails:** Replace the images in `src/assets/` (e.g., `project_thumbnail_1.png`) with your project-specific images.

### Adding New Projects

1.  **Add Project Data:** In `src/App.jsx` and `src/components/ProjectDetail.jsx`, add a new object to the `projects` (or `projectsData`) array following the existing structure. Ensure you provide a unique `id` for the new project.
2.  **Add Project Image:** Place your project's thumbnail image in the `src/assets/` directory and import it into `App.jsx` and `ProjectDetail.jsx`.

### Adjusting Styles

*   **Global Styles:** `src/App.css` contains global styles, custom utility classes, and animations.
*   **Tailwind CSS:** For component-specific styling, utilize Tailwind CSS classes directly in your JSX files. Refer to the [Tailwind CSS documentation](https://tailwindcss.com/docs) for available classes.

## 📧 Contact

If you have any questions or would like to connect, feel free to reach out:

*   **GitHub:** [https://github.com/pranavisback](https://github.com/pranavisback)
*   **LinkedIn:** [https://www.linkedin.com/in/pranav-pawar-op647](https://www.linkedin.com/in/pranav-pawar-op647)
*   **Email:** pranav647p@gmail.com

## 📄 License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).
