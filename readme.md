# eskiz-client

A simple, modern, and type-safe Node.js/TypeScript client for [Eskiz.uz SMS API](https://eskiz.uz/).

## ✨ Features

- 🚀 Simple to use
- ✅ TypeScript support
- 🔐 Automatic token management
- 🔁 Reusable and extensible architecture

---

## 📦 Installation

```bash
npm install eskiz-client
```

## ⚙️ Usage

```ts
import { EskizClient } from "eskiz-client";

const client = new EskizClient({
  email: "your@email.com",
  password: "yourPassword",
});

await client.sms.send({
  to: "998901234567",
  message: "Salom!",
  from: "4546", // optional
});
```
