# Flask Vercel App

A simple Flask application configured for deployment on Vercel.

## Features

- Flask web application with multiple routes
- API endpoints returning JSON responses
- Vercel deployment configuration
- Responsive HTML interface

## Local Development

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Run the application:
```bash
python app.py
```

3. Visit http://localhost:5000 in your browser

## API Endpoints

- `/` - Home page with application information
- `/api/hello` - Returns a JSON greeting message
- `/api/info` - Returns system and environment information

## Deployment

This application is configured for automatic deployment to Vercel:

1. Push changes to GitHub
2. Connect the repository to Vercel
3. Deploy with zero configuration

## Environment Variables

The application uses the following environment variables:
- `VERCEL_ENV` - Deployment environment (automatically set by Vercel)
- `VERCEL_REGION` - Deployment region (automatically set by Vercel)

## Technologies

- Python 3.9+
- Flask 3.0.0
- Vercel for hosting