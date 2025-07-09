const express = require('express');
const router = express.Router();
const multer = require('multer');
const { uploadResume, getAllResumes } = require('../controllers/resumeController');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

router.post('/upload', upload.single('resume'), uploadResume);
router.get('/', getAllResumes);

module.exports = router;
