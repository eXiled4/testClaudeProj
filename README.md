# Test Task Manager

A full-stack task management application built with React and PHP.

## Project Structure

```
testClaudeProj/
├── client/          # React frontend application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── services/      # API service layer
│   │   ├── App.jsx        # Main App component
│   │   ├── main.jsx       # Application entry point
│   │   └── index.css      # Global styles
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
└── server/          # PHP backend API
    ├── api/
    │   └── tasks.php      # RESTful API endpoints
    ├── config/
    │   └── database.php   # Database configuration
    ├── database/          # SQLite database storage
    └── index.php          # Server entry point
```

## Technology Stack

### Frontend
- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Axios** - HTTP client for API requests

### Backend
- **PHP 8.2+** - Server-side language
- **SQLite** - Lightweight database
- **RESTful API** - API architecture

## Features

- ✅ Create new tasks with title and description
- ✅ View all tasks in a clean interface
- ✅ Mark tasks as completed
- ✅ Delete tasks
- ✅ Persistent storage with SQLite
- ✅ Responsive design

## Quick Start

### Prerequisites

- Node.js 16 or higher
- PHP 8.2 or higher with SQLite extension
- npm or yarn

### Installation & Running

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd testClaudeProj
   ```

2. **Start the backend server**
   ```bash
   cd server
   php -S localhost:8000
   ```
   The API will be available at `http://localhost:8000`

3. **Start the frontend (in a new terminal)**
   ```bash
   cd client
   npm install
   npm run dev
   ```
   The application will be available at `http://localhost:3000`

4. **Open your browser**
   Navigate to `http://localhost:3000` to use the application

## API Endpoints

- `GET /api/tasks.php` - Retrieve all tasks
- `POST /api/tasks.php` - Create a new task
- `PUT /api/tasks.php?id={id}` - Update a task
- `DELETE /api/tasks.php?id={id}` - Delete a task

## Development

### Frontend Development
```bash
cd client
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

### Backend Development
The PHP backend uses the built-in PHP development server. For production, consider using Apache or Nginx with PHP-FPM.

## Database

The application uses SQLite for data storage. The database file is created automatically at `server/database/tasks.db` on first run.

### Database Schema

**tasks** table:
- `id` - INTEGER PRIMARY KEY AUTOINCREMENT
- `title` - TEXT NOT NULL
- `description` - TEXT
- `status` - TEXT (pending/completed)
- `created_at` - DATETIME
- `updated_at` - DATETIME

## License

This project is open source and available for educational purposes.
