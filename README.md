# 🧠 Profile Enrichment Service

This backend service enriches user profiles by scraping the `<h1>` tag from a provided profile URL.

---

## 🚀 Features

- Accepts `POST /users/enrich`
- Fetches the HTML content of the profile URL
- Extracts the `<h1>` text as `fullName`
- Returns enriched user data as JSON
- Swagger API documentation at `/api-docs`

---

## 📦 Tech Stack

- Node.js
- Express.js
- Axios
- Cheerio
- Swagger UI (via `swagger.yaml`)

---

## 📥 API Endpoint

### `POST /users/enrich`

**Request Body:**

```json
{
  "username": "testuser",
  "email": "test@example.com",
  "profileUrl": "https://example.com"
}

