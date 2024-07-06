const express = require("express");
const route = express.Router();
const multer = require('multer');
const addFile = require('../controllers/addFile');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


route.post("/files", upload.single('file'), async (req, res) => {
  const file = req.file; 
  console.log(file)
  try {
    await addFile(file);
    res.status(200).json({ message: 'The file was successfully added' });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while adding the file' });
  }
});

module.exports = route;
