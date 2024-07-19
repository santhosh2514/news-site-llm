# News Site Setup Instructions

This guide will help you set up and start both the client and server for the News Site project which uses newsapi for data and google's gemini LLM for summarisation.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (preferably the latest stable version)
- npm (comes with Node.js)
- Get a free newsapi key from https://newsapi.org/account
- Get a free gemini api key from https://aistudio.google.com/app/apikey

## Setting Up the Server

1. Navigate to the `server` directory from the root of the project:
   ```
   cd news-site/server
   ```
2. Install the necessary dependencies with
   ``` 
   npm install
   ```
3. Add the following env
   ```
   NEWS_API_KEY = YOUR_NEWS_API_KEY
   GEMINI_API_KEY = YOUR_GEMINI_API_KEY
   ```
4. Start the server:
   ```
   npm start
   ```
   The server will start on the port specified in your .env file or 2356 by default. You should see a message indicating that the application has started on the port.

## Setting Up the Client

1. Navigate to the client directory from the root of the project:
   ```
   cd news-site/client
   ```
2. Install the necessary dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
   This will start the Next.js development server. Open http://localhost:3000 with your browser to see the result.
