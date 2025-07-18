# 🧠 Profile Enrichment Service

This backend service enriches user profiles by scraping the `<h1>` tag from a provided profile URL and returns the full name along with the user data.

---

## 🚀 Features

- Accepts `POST /users/enrich` requests
- Fetches the HTML content of the given `profileUrl`
- Scrapes the first `<h1>` tag and uses it as `fullName`
- Returns enriched user data in JSON format
- Provides Swagger API documentation at `/api-docs`

---

## 📦 Tech Stack

- **Node.js** – Backend runtime environment
- **Express.js** – Web server framework
- **Axios** – To fetch HTML content from the target URL
- **Cheerio** – To parse and scrape HTML content
- **Swagger UI** – For interactive API documentation

---

## 📥 API Endpoint

### `POST /users/enrich`

**Request Body:**

```json
{
  "username": "testuser",
  "email": "test@example.com",
  "profileUrl": "https://httpbin.org/html"
}


