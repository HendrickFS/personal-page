---
id: bio-supply-twin
title: Bio Supply Digital Twin
tech: Python, Django, FastAPI, PostgreSQL, Redis, MQTT, Docker
description: A sophisticated microservices-based Digital Twin system for biological sample supply chain management.
date: 2024-12-01
---

# Bio Supply Digital Twin

[GitHub Repository - HendrickFS/bio-supply-twin](https://github.com/HendrickFS/bio-supply-twin)

The Bio Supply Twin is a living, data-driven replica of a biological sample supply chain. By combining a Django-powered Core Service for authoritative data with a fast, real-time FastAPI Digital Twin Service, this system creates an observable, high-performance environment for monitoring sensitive biological assets.

## 🏗️ The Architecture

![image](https://github.com/user-attachments/assets/8b0f86ce-3669-403e-8f53-46b9c533f92e)

The solution is driven by a resilient microservices architecture orchestrated via Docker Compose:
- **Core API Service**: A Django/DRF service handling authoritative sample and container records, ensuring ACID-compliant data persistence via PostgreSQL.
- **Digital Twin Service**: A FastAPI microservice offering high-speed real-time analytics, heavily backed by Redis for caching.
- **IoT Messaging Layer**: A Mosquitto MQTT broker that handles high-throughput telemetry data ingestion from environmental sensors.

## 📋 Key Features

- **Real-Time IoT Integration**: Asynchronous sensor data processing using MQTT pub/sub for tracking temperature, humidity, and GPS coordinates.
- **Performance Optimization**: Sub-millisecond read times using Redis caching layers with intelligent TTL and cache invalidation strategies.
- **Automated Alerts**: Intelligent SLA compliance monitoring that detects environmental excursions and automatically triggers notifications.
- **One-Command Full Deployment**: Fully containerized environment using Docker, spinning up PostgreSQL, Redis, Django, FastAPI, and MQTT simultaneously.

## 💻 Tech Stack & Tools

- **Backend Engineering**: \`Python\`, \`Django\`, \`FastAPI\`, \`async/await\`
- **Data & Caching**: \`PostgreSQL\`, \`Redis\`
- **Event-Driven & DevOps**: \`MQTT (Mosquitto)\`, \`Docker\`, \`Docker Compose\`
- **Testing & Quality**: \`pytest\`, \`CI/CD\`

## 🧠 Technical Highlights & Learnings

Building a modern microservices architecture from scratch provided invaluable insights into distributed system design:
- **Microservices Architecture**: Designing a clear boundary between the persistent Core API and the volatile, high-speed Digital Twin analytics layer to prevent resource bottlenecks.
- **Caching Strategies**: Moving beyond simple key-value storage to implement advanced Redis caching with strict TTLs, deeply lowering the query burden on the PostgreSQL database during high-traffic telemetry ingestion.
- **Testing Distributed Systems**: Writing comprehensive integration and unit tests across multiple communicating services using \`pytest\`, alongside robust CI/CD pipelines.
