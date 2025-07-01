# Fitness Class Booking App

## Project Description

A fitness class booking platform designed to offer a seamless, transparent, and value-driven experience, addressing market gaps in simplified pricing, curated studio networks, guaranteed availability, and integrated user experience.

## Mission

To connect users with high-quality fitness experiences through a modern, intuitive platform that prioritizes transparency, ease of use, and enhanced access.

## Market Gap Exploitation & Technology Stack Justification

This project leverages specific technologies to directly address the identified market gaps:

*   **Simplified and Transparent Pricing:**
    *   **Tech:** Node.js/Express.js backend, PostgreSQL database.
    *   **Justification:** A robust backend handles complex pricing logic (subscriptions, pay-as-you-go) efficiently and securely. PostgreSQL's relational integrity ensures accurate pricing and transaction records, free from the complexities of credit systems. This transparency is key to user acquisition.

*   **Curated, High-Quality Studio Network:**
    *   **Tech:** React.js frontend, Node.js/Express.js backend, PostgreSQL database.
    *   **Justification:** React allows for creating rich, filterable UIs to showcase the curated studio network effectively. The backend manages the studio onboarding and class data, while PostgreSQL stores this structured information efficiently. A well-designed backend API and frontend presentation are crucial for highlighting the curated aspect.

*   **Guaranteed or Priority Class Availability:**
    *   **Tech:** Node.js/Express.js backend, PostgreSQL database, Redis (caching).
    *   **Justification:** The backend API manages real-time booking, ensuring availability. PostgreSQL's transaction management guarantees data consistency during bookings. Redis can cache high-demand class slots or user booking statuses to improve performance and provide a smoother experience, crucial for guaranteeing availability against user expectations.

*   **Integrated and Intuitive User Experience:**
    *   **Tech:** React.js with Material-UI, Zustand/Context API, Styled-Components/Tailwind CSS.
    *   **Justification:** React's component-based architecture and libraries like Material-UI enable the creation of a cohesive, modern, and user-friendly interface. Efficient state management (Zustand/Context API) ensures a smooth flow between discovery, booking, and management. Consistent styling (Styled-Components/Tailwind CSS) across the application provides a unified and predictable user experience, a significant differentiator from fragmented legacy systems.

## Project Structure

The project follows a monorepo-like structure with distinct directories for the frontend (`client`) and backend (`server`).

*   **`client/`**: Contains all frontend React application code, including components, pages, state management, API services, and static assets.
    *   `public/`: Static assets served directly.
    *   `src/`: Core frontend source code organized into `assets`, `components`, `contexts`, `hooks`, `layouts`, `pages`, `services`, `store`, `styles`, and `utils`.
    *   `package.json`: Frontend-specific dependencies.
*   **`server/`**: Contains the backend Node.js/Express.js application.
    *   `src/`: Core backend source code organized into `config`, `controllers`, `middlewares`, `models`, `routes`, `services`, and `utils`.
    *   `server.js`: Application entry point.
    *   `app.js`: Express application setup.
    *   `db.js`: Database connection logic.
    *   `package.json`: Backend-specific dependencies.
*   **`prisma/`**: (Optional) If using Prisma ORM, this directory holds the schema and migration files.
*   **Root Directory**: Contains global configurations like `docker-compose.yml`, `Dockerfile`s, `.gitignore`, `LICENSE`, and the main `README.md`.

## Getting Started

### Prerequisites

*   Node.js (LTS version recommended)
*   npm or Yarn
*   PostgreSQL
*   Docker & Docker Compose (for local development)

### Local Development Setup

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd fitness-class-booking
    ```
2.  **Set up the database:**
    *   Ensure PostgreSQL is running.
    *   Configure your database connection details in `.env` files for both `client` and `server` or using Docker Compose.
    *   If using Prisma, run `npx prisma migrate dev --name init` after setting up the `server/.env`.
3.  **Install dependencies:**
    *   For the backend:
        ```bash
        cd server
        npm install  # or yarn install
        ```
    *   For the frontend:
        ```bash
        cd client
        npm install  # or yarn install
        ```
4.  **Run the application:**
    *   Start the backend server:
        ```bash
        cd server
        npm start   # or node src/server.js
        ```
    *   Start the frontend development server:
        ```bash
        cd client
        npm start   # or yarn start
        ```
    *   Alternatively, use Docker Compose for a fully containerized local environment:
        ```bash
        docker-compose up --build
        ```

### Environment Variables

Create `.env` files in `client/` and `server/` directories and populate them with the necessary environment variables (e.g., database URL, JWT secret, API keys). Refer to `.env.example` files if provided.

## Contributing

(Details on contribution guidelines, code style, etc. would go here)

## License

(Specify the project license, e.g., MIT License)
