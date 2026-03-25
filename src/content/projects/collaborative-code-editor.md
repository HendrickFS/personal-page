---
id: collaborative-code-editor
title: Collaborative Code Editor
tech: React, TypeScript, Monaco Editor, Yjs, WebSockets
description: A real-time collaborative code editor supporting simultaneous multi-user editing with conflict-free replication.
date: 2024-10-15
---

# Collaborative Code Editor

[GitHub Repository - HendrickFS/collaborative-code-editor](https://github.com/HendrickFS/collaborative-code-editor)

A powerful real-time code editor that enables multiple users to seamlessly edit code files simultaneously. Built to showcase expertise in **real-time communication**, **distributed state management**, and **WebSocket architecture**, this application provides a production-grade editing experience with VS Code-level capabilities.

## 🏗️ The Architecture

![image](https://github.com/user-attachments/assets/e8a3a50f-4342-4b29-ac6f-efef9e2137a1)

The system relies on a high-concurrency Node.js WebSocket backend communicating with a modern React frontend:
- **Synchronization Engine**: Utilizes **Yjs CRDT** (Conflict-free Replicated Data Type) to guarantee seamless multi-user editing without manual conflict resolution. P2P-style data states are synchronized safely.
- **WebSocket Rooms**: Express.js and `y-websocket` handle bidirectional data streams, isolating collaboration sessions into per-file channels.
- **Shared File System**: Distributed state management ensures that creating or uploading a file broadcasts the updated directory structure to all connected clients instantly.


## 📋 Key Features

![editor_showcase](https://github.com/user-attachments/assets/44c04033-d9cd-4075-805a-f97b409cc76a)

- **Simultaneous Real-Time Editing**: Users can edit the exact same document at the exact same time; the CRDT structure perfectly reconciles changes even during network partitions.
- **Production-Grade Editor**: Deep integration with **Monaco Editor** provides rich syntax highlighting and developer ergonomics matching traditional IDEs.
- **Per-File Collaboration Rooms**: Each file maintains its own isolated collaboration channel, reducing noise and network payload.
- **Multi-File Management**: Support for creating, dragging, dropping, and switching between completely independent code files on the fly.
![filetree_showcase](https://github.com/user-attachments/assets/de79b81e-c272-4694-b478-7f39d871c95d)

## 💻 Tech Stack & Tools

- **Frontend Core**: `React`, `TypeScript`, `Ant Design`
- **Editor & State Engine**: `Monaco Editor`, `Yjs (CRDT)`
- **Network & Server Environment**: `Node.js`, `Express.js`, `WebSockets (ws)`, `y-websocket`
- **Deployment**: `Docker`, `Docker Compose`

## 🧠 Technical Highlights & Learnings

Building a collaborative infrastructure forced deep exploration of distributed system consistencies and advanced React lifecycle management:
- **Real-time Collaboration**: Implemented a real-time collaborative code editor using **Yjs CRDT** (Conflict-free Replicated Data Type) to guarantee seamless multi-user editing without manual conflict resolution. P2P-style data states are synchronized safely.
- **WebSocket Rooms**: Express.js and `y-websocket` handle bidirectional data streams, isolating collaboration sessions into per-file channels.
- **Shared File System**: Distributed state management ensures that creating or uploading a file broadcasts the updated directory structure to all connected clients instantly.
