## Tech Stack and Choices

### Frontend
- **React (Vite + SWC)**: I chose React with Vite for its fast development experience and modern approach to building UIs. Vite's development server allows quick rebuilds, and SWC helps with faster compilation.
- **CSS and Tailwind CSS**: Tailwind CSS is used to manage the styling efficiently, allowing utility classes for rapid development. It’s combined with `@tailwindcss/typography` for handling content text blocks consistently across components.
- **Lingui**: This library provides internationalization (i18n) support, making it easier to handle multilingual content and reach a global audience.
- **Additional libraries**:
  - `dnd-kit`: For implementing drag-and-drop functionality in the resume builder.
  - `react-resizable-panels`: Helps create resizable panels within the editor.
  - `react-zoom-pan-pinch`: Provides zoom and pan capabilities, enhancing the user experience when editing detailed resume sections.

### Backend
- **NestJS**: A framework for building scalable server-side applications in Node.js. Its modular structure and TypeScript support make it a good choice for building robust and maintainable backends.
- **PostgreSQL**: As the primary database, PostgreSQL is used due to its stability, support for complex queries, and ACID compliance, which ensures data integrity for user and resume data.
- **Prisma ORM**: This is used to handle the database interactions seamlessly between the server and PostgreSQL. It provides a clean, type-safe way to work with data and supports migrations.
- **Redis**: Redis is used for caching and tracking statistics. Its in-memory data structure makes it ideal for handling frequently accessed data and fast retrieval. Redis complements PostgreSQL by reducing database load and increasing the responsiveness of certain functionalities.
- **Minio**: Chosen for storing resume files and images, Minio is an open-source alternative to AWS S3. It provides scalable object storage that integrates well with our architecture.
- **Browserless Chrome**: This service enables headless Chrome for generating previews and PDFs of resumes, running separately as a microservice. Browserless is a reliable way to handle printing tasks without affecting the main server’s performance.
- **Optional Integrations**:
  - SMTP Server: For sending password recovery emails.
  - Sentry: Used for error tracking to quickly identify and address issues in production.
  - OAuth (GitHub/Google): Simplifies authentication with popular platforms for a smoother user sign-up experience.
  - Crowdin: For managing translations collaboratively.

---

## Architecture Overview

### Frontend Structure
The frontend is structured as a micro-frontend, with two React applications:

1. **Client (Main App)**: This application runs on port 5173 and handles user interactions, account management, resume creation, and editing. The client communicates with the server API on port 3000 using Axios and React Query.
  - **Responsibilities**:
    - Rendering the homepage and user dashboard.
    - Managing user authentication and resume customization.
    - Sending resume data to the backend for processing.

2. **Artboard (Preview and Print)**: Running on port 6173, the Artboard application is used to display and render resumes as they would appear in print, independently of the client’s styles.
  - **Responsibilities**:
    - Receiving resume data from the client via `window.postMessage`.
    - Loading base styles, fonts, and icons.
    - Dynamically rendering the selected resume template with CSS Variables and Tailwind CSS for consistent styling.

### Backend Structure
The backend is built with NestJS and serves various purposes, organized into multiple services:
- **API Server (Port 3000)**: The main server manages API requests and business logic.
- **Database (PostgreSQL)**: Primary storage for user profiles, resume data, and other persistent information.
- **Redis Cache**: Used for storing frequently accessed data and handling tasks such as tracking resume views and metrics.
- **Minio Storage (Port 9000)**: Provides an S3-compatible object storage service for managing images and document uploads.
- **Headless Chrome (Browserless) (Port 3000)**: Runs in a separate container to handle PDF generation and resume previews without affecting server performance.

---

## Data Flow and Interactions
- **User requests**: Users access the frontend client to build and manage resumes. The client interacts with the backend server to save, retrieve, and edit resume data.
- **PDF generation**: When a user requests to download a resume, the server communicates with the Browserless Chrome instance to render the resume as a PDF.
- **Storage and retrieval**: Resume assets and images are uploaded to Minio, with URLs generated and sent back to the frontend for rendering or downloads.

---

## Setup Instructions

### Step 1: Environment Setup
Create an `.env` file at the root of the project with the required environment variables.

> **Note**: Replace `your_generated_access_token_secret`, `your_generated_refresh_token_secret`, and `your_generated_chrome_token` with values generated using `openssl rand -base64 64` for the secrets, and `openssl rand -hex 32` for the Chrome token.

### Step 2: Build Docker Containers
In the root of the project, locate the Docker Compose file under `tools/compose/simple.yml`. Run the following command to start up all services:

docker-compose -f tools/compose/simple.yml up -d
This will start the following services in detached mode (`-d` flag):

- **Postgres**: The primary database.
- **Minio**: Object storage service for resumes and images.
- **Browserless Chrome**: For generating resume previews and PDFs.
- **App**: The main Reactive Resume backend and frontend service.



### Step 3: Logging In and Using the Application
1. **Backend**: Visit `http://localhost:3000` in your browser to access the application.
2. **Minio**: Access the Minio console at `http://localhost:9000`. The default login credentials are `minioadmin` for both username and password.
3. **Health Check**: Run `curl http://localhost:3000/api/health` to ensure the backend is running correctly.


### Step 4: Running Without Docker (Optional)
To run the app without Docker and see live changes as you modify code:

1. **Install Dependencies**
   ```bash
   npm install  # or pnpm install
2. **Start Backend with Live Reloading**
   ```bash
  docker-compose -f tools/compose/simple.yml up postgres minio -d
  pnpm prisma migrate deploy
  pnpm run start:dev
3. **Start Frontend with Hot Reloading**
   ```bash
   pnpm run dev
  Access the app at http://localhost:5173.

---

## Integration Notes
When integrating this project into another system, consider the following:

### Environment Variables
- **Database and Storage URLs:** Ensure environment variables like `DATABASE_URL` and `STORAGE_URL` are properly configured based on your external environment.
- **Authentication Tokens:** Configure `ACCESS_TOKEN_SECRET`, `REFRESH_TOKEN_SECRET`, and any OAuth secrets if your integrated system has specific requirements for authentication and authorization.

### Networking
- **Port Conflicts:** This project uses ports `3000` (backend), `5173` (frontend), `9000` (Minio), and `5432` (Postgres). Adjust these in `docker-compose` and `.env` if these ports are occupied in your system.
- **Cross-Origin Requests (CORS):** The backend is configured for cross-origin requests. If integrating with a frontend hosted on a different domain, you may need to update the CORS configuration in the backend (`src/main.ts` in a NestJS app).

### Dependencies and Services
- **PostgreSQL and Redis:** The project uses PostgreSQL for main data storage and Redis for caching. For optimal integration, ensure that both services are reachable from the application within the target system.
  - **PostgreSQL:** Used for primary data storage.
  - **Redis:** Used for caching and tracking resume statistics.
  - **Note:** Redis isn’t essential for the application to function but improves performance.
- **Minio:** Minio is used as an S3-compatible storage service. If the target environment already has S3 or another object storage service, you can configure the project to use that instead by updating `STORAGE_URL`, `STORAGE_ACCESS_KEY`, and `STORAGE_SECRET_KEY`.
- **Browserless/Headless Chrome:** Used for generating PDFs. Ensure that the `CHROME_URL` and `CHROME_TOKEN` are set up correctly if a headless Chrome service is available in your system.
