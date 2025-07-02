         Tripzy — Airbnb-like Travel Listing Platform

**Tripzy** is a full-stack travel website inspired by Airbnb. It allows users to list properties, upload images, write reviews, and manage their listings with full authentication and authorization support.

🔗 **Live URL:** [https://tripzy-kezi.onrender.com/listings](https://tripzy-kezi.onrender.com/listings)


# Key Features

*  **User Authentication** – Register/Login using Passport.js and sessions.
*  **Create & Manage Listings** – Authenticated users can add, update, and delete their listings.
*  **Cloudinary Integration** – Users can upload photos to listings. Images are stored and served from Cloudinary.
*  **Reviews System** – Logged-in users can leave reviews on any listing.
*  **Owner Protection** – Only the original creator of a listing can edit or delete it.

##  Tech Stack

| Layer             | Tech Used                    |
| ----------------- | ---------------------------- |
| **Frontend**      | HTML, CSS, JavaScript, EJS   |
| **Backend**       | Node.js, Express.js          |
| **Database**      | MongoDB (via Mongoose)       |
| **Auth**          | Passport.js, express-session |
| **Image Hosting** | Cloudinary, Multer           |


##  Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/tripzy.git
cd tripzy
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
DB_URL=your_mongo_db_connection_string
SECRET=your_cookie_session_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET=your_cloudinary_api_secret
```

>  You can get Cloudinary credentials by signing up at [cloudinary.com](https://cloudinary.com)

### 4. Start the Server

```bash
node app.js
```

Visit: `http://localhost:3000`

---


# Authentication & Authorization

* Only **logged-in users** can create listings or reviews.
* Only the **listing owner** can edit or delete a listing.
* Middleware handles route protection and user validation.


##  Cloudinary Image Upload

Images are uploaded through **Multer** and stored in **Cloudinary**. Only the image URLs are stored in MongoDB. Cloudinary's CDN serves the images to ensure fast and optimized delivery.

Example flow:

1. User submits listing with image.
2. Image is uploaded to Cloudinary via Multer middleware.
3. Cloudinary returns a secure URL.
4. That URL is stored in MongoDB and used in your EJS templates.


# Future Improvements

*  Add payment gateway (Stripe/Razorpay)
*  Add geolocation support via Mapbox or Google Maps
*  Add availability calendar for bookings
*  Add unit and integration tests (Jest/Supertest)
*  Add multi-language support


# Contributing

Have ideas or improvements?
Feel free to fork the repo and open a pull request.
