---
id: iot-presence-register
title: IoT Presence Register
tech: Python, Django, C++, Arduino, RF24, RFID
description: A comprehensive IoT-based employee presence tracking system using RFID cards and RF24 wireless communication modules.
date: 2024-11-20
---

# IoT Presence Register System

[GitHub Repository - HendrickFS/iot-presence-register](https://github.com/HendrickFS/iot-presence-register)

A comprehensive IoT-based employee presence tracking system designed to modernize workplace attendance. By combining hardware sensors (RFID cards and RF24 wireless modules) with a robust web backend (Django REST Framework), this system provides real-time monitoring and scalable data collection across distributed locations.

## 🏗️ The Architecture

![image](https://github.com/user-attachments/assets/fed583af-5fa0-4fdc-8554-905880589ad0)

The system is built on a distributed IoT architecture designed for reliability and scale:
- **RFID Nodes (Edge)**: Arduino-based sensors deployed at various entry points. They read RFID cards and transmit data securely via long-range RF24 transceivers.
- **Central Gateway**: A central communication hub that collects incoming RF data and streams it via Serial to a connected processing unit.
- **Data Integration Service**: A custom Python application that runs on the gateway computer, constantly polling for serial data and sending HTTP POST requests to the API.
- **Backend Infrastructure**: A Django REST API that processes the biometric logs, determines continuous employee IN/OUT state, and stores the structured data in a relational database.

## 📋 Key Features

![1760107439637](https://github.com/user-attachments/assets/5dbb3b7d-4a93-4916-8e52-6d1571952b01)

- **Real-time Synchronization**: Near-instantaneous reflection of employee logs through the distributed node network.
- **Smart State Tracking**: Automatic detection and calculation of entry (IN) and exit (OUT) states based on sequential scans.
- **Scalable Sensor Network**: Effortless integration of new sensor nodes into the central mesh without backend reconfiguration.
- **Comprehensive Admin Dashboard**: A customized Django admin interface allowing administrators to manage employee details, sensor locations, and view attendance logs dynamically.
- **RESTful API Architecture**: Exposes full CRUD capabilities, making it easy to extend for mobile apps or third-party integrations.

## 💻 Tech Stack & Tools

- **Backend Development**: \`Django 5.1\`, \`Django REST Framework\`, \`Python 3\`
- **Embedded & Hardware**: \`C++\`, \`Arduino Nano\`, \`MFRC522 (RFID)\`, \`nRF24L01 (RF24)\`
- **Data & Communication**: \`Serial Communication\`, \`HTTP/REST\`, \`Relational Databases\`

## 🧠 Technical Highlights & Learnings

Building a Cyber-Physical System required seamlessly blending low-level hardware constraints with high-level web infrastructure. Significant challenges included:
- **Avoiding Signal Collision**: Implementing asynchronous polling patterns and correct addressing for the RF24 modules to ensure no data loss during simultaneous RFID scans.
- **Serial to Web Gateway**: Designing a reliable, multi-threaded Python gateway script that robustly handled connection drops and ensured data was safely transmitted to the REST API over the network.
- **Database Modeling**: Architecting a relational data flow where every sensor interaction is uniquely tied to employees and locations, opening the door for future analytics.
