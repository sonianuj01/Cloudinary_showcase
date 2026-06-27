# 🎥 Cloudinary Showcase

A modern full-stack media management platform built with **Next.js** that allows users to securely upload, compress, manage, and share videos and images. The application integrates **Cloudinary** for cloud storage and media optimization, **Clerk** for authentication, **Prisma ORM** for database management, and **PostgreSQL** as the backend database.

🌐 **Live Demo:** https://cloudinary-showcase-mu.vercel.app/

---

## 📌 Overview

Cloudinary Showcase is designed to demonstrate how modern web applications handle media management at scale. Users can authenticate securely, upload videos or images, store metadata in PostgreSQL, and generate shareable links for uploaded content.

The project follows the latest **Next.js App Router** architecture, where both the frontend and backend are built within the same Next.js application.

---

## ✨ Features

### Authentication

* Secure Sign In & Sign Up using Clerk
* Google OAuth authentication
* Route protection using middleware
* Session management
* Protected API routes

### Video Management

* Upload videos to Cloudinary
* Automatic media optimization
* Display uploaded videos
* Store metadata in PostgreSQL
* Video duration tracking
* File size comparison

### Image Management

* Upload images
* Cloudinary storage
* Public image URLs
* Instant preview

### Social Sharing

* Generate shareable links
* Download uploaded media
* Copy share URLs
* Public media access

### Modern UI

* Responsive design
* Tailwind CSS
* DaisyUI components
* Loading states
* Toast notifications
* Mobile-friendly layout

---

# 🏗️ Tech Stack

## Frontend

* Next.js 16 (App Router)
* React 19
* TypeScript
* Tailwind CSS 4
* DaisyUI
* Axios

## Backend

* Next.js Route Handlers
* Prisma ORM
* PostgreSQL
* Cloudinary SDK
* Clerk Authentication

---

# 📂 Project Structure

```text
app/
│
├── (app)/
│   ├── home/
│   ├── social-share/
│   ├── video-upload/
│
├── (auth)/
│   ├── sign-in/
│   └── sign-up/
│
├── api/
│   ├── image-upload/
│   ├── video-upload/
│   └── videos/
│
components/
│
├── VideoCard.tsx
│
lib/
│
├── prisma.ts
│
prisma/
│
├── schema.prisma
│
public/
```

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/sonianuj01/Cloudinary_showcase.git
```

Move into the project

```bash
cd Cloudinary_showcase
```

Install dependencies

```bash
npm install
```

Generate Prisma Client

```bash
npx prisma generate
```

Push the schema to your database

```bash
npx prisma db push
```

Start the development server

```bash
npm run dev
```

---

# 🔑 Environment Variables

Create a `.env.local` file and add the following variables:

```env
DATABASE_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

---

# 🗄️ Database Schema

## Video

| Field          | Type     |
| -------------- | -------- |
| id             | String   |
| title          | String   |
| description    | String?  |
| publicId       | String   |
| originalSize   | String   |
| compressedSize | String   |
| duration       | Float    |
| createdAt      | DateTime |
| updatedAt      | DateTime |

---

# 🔄 Application Flow

```text
User
   │
   ▼
Authentication (Clerk)
   │
   ▼
Upload Media
   │
   ▼
Cloudinary Storage
   │
   ▼
Store Metadata (Prisma + PostgreSQL)
   │
   ▼
Display Media
   │
   ▼
Share & Download
```

---

# 🚀 Deployment

The project is deployed on **Vercel**.

**Live URL**

https://cloudinary-showcase-mu.vercel.app/

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a new feature branch

```bash
git checkout -b feature/new-feature
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push the branch

```bash
git push origin feature/new-feature
```

5. Open a Pull Request

---

# 👨‍💻 Author

**Anuj Verma**

* GitHub: https://github.com/sonianuj01

