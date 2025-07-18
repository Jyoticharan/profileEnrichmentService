# 🧠 Profile Enrichment Service

![Node.js](https://img.shields.io/badge/Node.js-18.x-brightgreen?logo=node.js&logoColor=white&style=flat-square)
![Status](https://img.shields.io/badge/status-active-success?style=flat-square)

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

## 🛠️ Installation

### 📁 Prerequisites

> ✅ Node.js 18.x or later  
> ✅ Git installed

### 🔧 Setup Steps

```bash
# 1. Clone the repository
git clone https://github.com/your-username/profileEnrichmentService.git

# 2. Navigate into the project folder
cd profileEnrichmentService

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev

🔗 Server: http://localhost:3000
📄 Swagger Docs: http://localhost:3000/api-docs

## 📥 API Endpoint

### `POST /users/enrich`

**Request Body:**

```json
{
  "username": "testuser",
  "email": "test@example.com",
  "profileUrl": "https://httpbin.org/html"
}
