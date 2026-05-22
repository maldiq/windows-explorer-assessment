# Windows Explorer Assessment

Windows Explorer-like web application built using:

## Tech Stack

### Backend

- Bun
- Elysia
- Prisma ORM
- PostgreSQL
- TypeScript

### Frontend

- Vue 3
- Composition API
- TypeScript
- Pinia
- TailwindCSS

---

# Features

- Recursive folder tree
- Expand / collapse folder
- Search folder
- Breadcrumb
- Context menu
- Rename folder
- Delete folder
- Drag & drop
- File display
- Lazy loading ready
- Virtual scrolling
- Unit testing

---

# Architecture

- Clean architecture
- Repository pattern
- Service layer
- REST API standard

---

# Run Backend

```bash
cd backend

bun install

bunx prisma migrate dev

bun run seed

bun run dev
```

# Run Frontend

```bash
cd frontend

bun install

bun run dev
```

# API Endpoints

```bash

Get Tree
GET /api/v1/folders/tree

Get Children
GET /api/v1/folders/:id/children

Search Folder
GET /api/v1/folders/search/:query

Rename Folder
PUT /api/v1/folders/:id

Delete Folder
DELETE /api/v1/folders/:id
```
