---
id: rust-cli-tool
title: Rust Fast Search Engine
tech: Rust, CLI
description: Lightning fast terminal search engine built in Rust.
date: 2023-11-10
---
# Rust CLI Search Tool

This project solves the problem of slow file iteration inside deeply nested monolithic repositories. Built using Rust's high-performance standard library, it searches file contents up to **10x faster** than native bash \`grep\`.

### Challenges
- Implementing multi-threading using \`Rayon\` for parsing thousands of files simultaneously.
- Ensuring zero false positives for regex searches.

### Key Learnings
Rust is notoriously difficult when fighting the borrow checker, but memory-secure applications with zero downtime make it absolutely worth it.
