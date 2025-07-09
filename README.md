# 🧠 AI-Powered Resume Reviewer

An advanced Node.js web application that allows users to upload resumes and receive personalized suggestions from AI (powered by OpenAI). The app analyzes resume content, matches keywords, and provides improvement feedback.

---

## 🔧 Tech Stack

- **Backend Framework**: Express.js
- **Runtime**: Node.js
- **Database**: MongoDB (via Mongoose)
- **AI Integration**: OpenAI GPT API
- **PDF Parsing**: `pdf-parse`
- **File Uploads**: `multer`
- **Environment Config**: `dotenv`

---

## 📁 Folder Structure

ai-resume-reviewer/
├── config/
│ └── db.js # MongoDB connection
├── controllers/
│ └── resumeController.js # Resume upload & handling
├── models/
│ └── Resume.js # Mongoose schema
├── routes/
│ └── resumeRoutes.js # API endpoints
├── services/
│ └── aiService.js # OpenAI communication
├── uploads/ # Uploaded PDF resumes
├── .env # Environment variables
├── app.js # Entry point
├── package.json # NPM dependencies
├── README.md # Project documentation
