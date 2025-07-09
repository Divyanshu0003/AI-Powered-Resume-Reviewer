const fs = require('fs');
const pdf = require('pdf-parse');
const Resume = require('../models/Resume');
const { getSuggestionsFromAI } = require('../services/aiService');

const uploadResume = async (req, res) => {
  try {
    const fileBuffer = fs.readFileSync(req.file.path);
    const data = await pdf(fileBuffer);
    const text = data.text;

    const suggestions = await getSuggestionsFromAI(text);

    const resume = await Resume.create({
      filename: req.file.filename,
      textContent: text,
      suggestions,
    });

    res.status(201).json(resume);
  } catch (err) {
    console.error('Error uploading resume:', err);
    res.status(500).json({ message: 'Failed to process resume' });
  }
};

const getAllResumes = async (req, res) => {
  const resumes = await Resume.find().sort({ createdAt: -1 });
  res.json(resumes);
};

module.exports = { uploadResume, getAllResumes };
