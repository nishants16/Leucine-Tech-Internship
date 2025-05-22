Todo Summary Assistant

A full-stack productivity application that allows users to manage their personal to-do lists and generate AI-powered summaries of pending tasks, with automatic posting to a Slack channel.

## Features

- Add, edit, delete personal to-do items
- View a list of all current tasks
- Generate a smart summary of pending todos using a real LLM (e.g., OpenAI)
- Send the summary to a Slack channel via Incoming Webhooks
- Get real-time success/failure alerts for Slack operations

---

##Tech Stack

| Layer      | Technology                      |
|------------|----------------------------------|
| Frontend   | React.js                         |
| Backend    | Node.js with Express *(or Java Spring Boot)* |
| AI         | OpenAI / Cohere / Mistral (LLM APIs) |
| Database   | Supabase (PostgreSQL)            |
| Slack      | Slack Incoming Webhooks          |
| Hosting    | Vercel / Netlify / Firebase (optional) |

---


## 🧠 LLM & Slack Integration

### LLM (e.g., OpenAI)
- Sign up at [OpenAI](https://platform.openai.com/)
- Obtain your API key and add it to the `.env` file
- The app sends pending tasks to the LLM for summary generation

### Slack
- Go to [Slack API: Incoming Webhooks](https://api.slack.com/messaging/webhooks)
- Create a webhook URL and paste it into `.env` as `SLACK_WEBHOOK_URL`
- Make sure the Slack channel is public or the webhook has permission

---

## 📌 API Endpoints

### To-Do Management
- `GET /todos` - Fetch all to-dos
- `POST /todos` - Add a new to-do
- `DELETE /todos/:id` - Delete a specific to-do

### Summary
- `POST /summarize` - Generate a summary of todos and send it to Slack

---

## 🌐 Deployment

You can deploy the app using:

- **Frontend**: [Vercel](https://vercel.com/), [Netlify](https://netlify.com/), or [Firebase Hosting](https://firebase.google.com/)
- **Backend**: Supabase or Render for Node.js/Java services
- **Database**: Supabase PostgreSQL (Free tier is sufficient)

---

## 📁 Project Structure
