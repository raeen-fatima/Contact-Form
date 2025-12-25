
#  Full-Stack Contact Form System

A simple, reliable, and production-ready **Full-Stack Contact Form** built using **Next.js (App Router)**, **Node.js**, **MongoDB**, and **Mongoose**.  
This system allows users to send messages through a frontend form and securely stores them in the database via API routes.

---

##  Features

- Responsive **Contact Form UI**
- Form submission using `fetch` API
- Backend API built with **Next.js App Router (`/api/contact`)**
- Data stored in **MongoDB using Mongoose Schema & Model**
- Proper error handling and success feedback
- Fast performance using **Turbopack**
- Clean and developer-friendly structure

---

##  Tech Stack

| Technology | Purpose |
|-----------|---------|
| React.js | UI Components |
| Next.js 16 (App Router) | Routing, Rendering, Backend APIs |
| Node.js | API Logic |
| MongoDB | Database |
| Mongoose | Schema, Model, and DB Connection |
| Tailwind CSS | Styling |

---

##  Project Structure

```

/app
├─ /contact/page.js          → Frontend form UI
├─ /api/contact/route.js     → Backend API route
/lib
├─ mongodb.js                → MongoDB connection using Mongoose
/models
├─ Contact.js                → Mongoose Schema & Model

````

---

## 🔧 Installation & Setup

1. Clone the repository
2. Install dependencies:
   ```sh
   npm install
````

3. Add your MongoDB URI in `.env`:

   ```
   MONGODB_URI=your_mongodb_connection_string
   ```
4. Run the project:

   ```sh
   npm run dev
   ```

---

##  API Endpoint

### `POST /api/contact`

Accepts JSON data:

```json
{
  "name": "Your Name",
  "email": "your@email.com",
  "message": "Your message here"
}
```

Stores data in MongoDB and returns success response.

---

## Sample Response

```
Form submitted successfully!
DB Connected
Received data saved to MongoDB
```

---

##  Why Next.js Instead of Plain React?

* **React** is a UI library — it only builds interfaces.
* **Next.js** is a framework — it includes:

  * File-based routing
  * Multiple rendering strategies (SSR, SSG, CSR)
  * Built-in backend support using API routes
  * Better performance and SEO

This project uses **Next.js App Router** to handle both frontend and backend in a single system.

---

##  Future Enhancements

* Add email notifications using Nodemailer
* Integrate form validation with Zod
* Add Admin panel to view messages
* Deploy using Vercel or cloud services

---

##  Acknowledgement

Built with patience, learning, and faith.
This project marks a personal comeback into consistency and development.

---

**Inshallah, more to come **

**Author:** *Raeen Fatima*
