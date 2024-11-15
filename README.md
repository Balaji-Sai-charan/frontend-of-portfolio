# Portfolio Website 🌐

This project is a **personal portfolio** website built to showcase skills, projects, and achievements. It is a full-stack implementation with a React.js frontend and a Node.js + Express backend, ensuring a dynamic and scalable platform for users to explore the portfolio content.

🌐 **Live Demo**: [Portfolio Website](https://frontend-of-portfolio.vercel.app/)

---

## 📋 Project Overview

The portfolio website features:
- A sleek, responsive design to ensure accessibility on all devices.
- A backend service to manage and update portfolio content dynamically.

### Frontend Repository
- **Repository**: [Frontend of Portfolio](https://github.com/Balaji-Sai-charan/frontend-of-portfolio)
- **Tech Stack**: React.js, CSS, and Axios.
- **Features**:
  - **Responsive UI**: Optimized for mobile, tablet, and desktop viewing.
  - **Dynamic Content**: Fetches portfolio details from the backend for easy updates.
  - **Sections**:
    - **About**: A brief introduction.
    - **Projects**: Showcasing a list of completed and ongoing projects.
    - **Skills**: Highlighting technical expertise.
    - **Contact**: A form for visitors to get in touch.

### Backend Repository
- **Repository**: [Backend of Portfolio](https://github.com/Balaji-Sai-charan/backend-of-portfolio)
- **Tech Stack**: Node.js, Express.js, MongoDB, and Mongoose.
- **Features**:
  - **API Endpoints**: Provides data for the portfolio content (e.g., projects, skills, and contact details).
  - **Database Management**: MongoDB used for storing and managing portfolio details.
  - **Contact Form**: Handles form submissions and stores inquiries.
  - **Admin Routes**: Secure endpoints for managing portfolio content.

---

## 💻 How to Run Locally

### Prerequisites
- **Node.js** (>= 14.x)
- **MongoDB** server running locally or on the cloud
- **npm** (for package management)

### Installation

#### Frontend Setup
1. Clone the frontend repository:
   ```bash
   git clone https://github.com/Balaji-Sai-charan/frontend-of-portfolio.git
## 📂 Project Structure

### Frontend (`frontend-of-portfolio`)
- **`src/components/`**: Contains reusable UI components.
- **`src/pages/`**: Main application sections (e.g., About, Projects, Contact).
- **`src/services/`**: Functions for making API requests to the backend.

### Backend (`backend-of-portfolio`)
- **`controllers/`**: Handles the main business logic for routes.
- **`models/`**: Contains Mongoose schemas for portfolio content.
- **`routes/`**: Defines API routes for accessing and managing content.
- **`utils/`**: Utility functions for token handling, error management, etc.

---

## ✨ Future Enhancements

- **CMS Integration**: Add a content management system for easier updates.
- **Admin Dashboard**: Build an admin interface for real-time management of portfolio content.
- **Visitor Analytics**: Track visitor interactions and page views.
- **Dark Mode**: Provide an option for a dark-themed UI.
