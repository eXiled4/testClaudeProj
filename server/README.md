# Test Task Manager - Server

PHP backend API for the Test Task Manager application.

## Requirements

- PHP 7.4 or higher
- SQLite3 extension enabled

## Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Start the PHP development server:
   ```bash
   php -S localhost:8000
   ```

The API will be available at `http://localhost:8000`

## API Endpoints

- `GET /api/tasks.php` - Get all tasks
- `POST /api/tasks.php` - Create a new task
- `PUT /api/tasks.php?id={id}` - Update a task
- `DELETE /api/tasks.php?id={id}` - Delete a task

## Database

The application uses SQLite database stored at `server/database/tasks.db`. The database and table are created automatically on first run.
