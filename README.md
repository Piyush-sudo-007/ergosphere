# 📚 Document Intelligence Platform (RAG-based Book System)

A full-stack AI-powered web application that collects, processes, and enables intelligent querying over book data using a **Retrieval-Augmented Generation (RAG)** pipeline.

---

## 🚀 Features

### 🔹 Backend (Django REST Framework)

* 📖 Store and manage book data (title, author, description, rating, URL)
* 🌐 Automated book scraping (Selenium-based)
* 🤖 AI-powered insights:

  * Book summaries
  * Genre classification
  * Smart recommendations
* 🧠 RAG Pipeline:

  * Embedding generation using Sentence Transformers
  * Vector similarity search
  * Context-aware answer generation
* 🔗 REST APIs:

  * List all books
  * Retrieve book details
  * Upload books
  * Ask questions (RAG)
  * Get recommendations

---

### 🔹 Frontend (React + Tailwind CSS)

* 📊 Dashboard displaying all books
* 🔍 Book detail page
* 💬 Q&A interface for asking questions
* 🎨 Clean and responsive UI

---

## 🧠 RAG Pipeline Architecture

1. User asks a question
2. Question is converted into embeddings
3. Similar book chunks are retrieved
4. Relevant context is constructed
5. LLM generates final answer with context

---

## 🛠️ Tech Stack

### Backend:

* Python
* Django REST Framework
* SQLite (or MySQL)
* Sentence Transformers
* HuggingFace Transformers

### Frontend:

* ReactJS / NextJS
* Tailwind CSS
* Axios

### AI / ML:

* Sentence Embeddings (`all-MiniLM-L6-v2`)
* Optional: OpenAI / LM Studio

---


---

## ⚙️ Setup Instructions

### 1. Clone the repository

```
git clone <your-repo-link>
cd backend
```

---

### 2. Create virtual environment

---

### 3. Install dependencies

```
pip install -r requirements.txt
```

---

### 4. Run migrations

```
python manage.py makemigrations
python manage.py migrate
```

---

### 5. Run server

```
python manage.py runserver
```

Backend runs at:

```
http://127.0.0.1:8000/
```

---

## 📡 API Endpoints

### 🔹 GET APIs

#### Get all books

```
GET /api/books/
```

#### Get book detail

```
GET /api/books/<id>/
```

#### Get recommendations

```
GET /api/recommend/?book_id=<id>
```

---

### 🔹 POST APIs

#### Upload book

```
POST /api/upload/
```

**Body:**

```json
{
  "title": "Book Name",
  "author": "Author Name",
  "description": "Book description"
}
```

---

#### Ask question (RAG)

```
POST /api/ask/
```

**Body:**

```json
{
  "question": "What is this book about?"
}
```

---

## 🧪 Sample Q&A

### ❓ Question:

```
What is the theme of Atomic Habits?
```

### ✅ Answer:

```
Atomic Habits focuses on building small habits that lead to remarkable results over time...
```
---

## 🎯 Key Highlights

* 🔥 End-to-end RAG implementation
* ⚡ Fast embedding-based retrieval
* 🧩 Modular service architecture
* 💡 Clean REST API design
* 🎨 Responsive frontend UI

---

## 👨‍💻 Author

Developed as part of internship assignment.

---

## 📄 License

This project is for educational purposes only.
