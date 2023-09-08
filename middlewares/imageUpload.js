const path = require("path");
const multer = require("multer");
const loggerEvent = require("../services/logger")
const logger = loggerEvent("blogs")
//photo Storage

const blogPhotoStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/blogs");
  },
  filename: function (req, file, cb) {
    if (file) {
      let fileName = path.extname(file.originalname) 
      // cb(null, Date.now() + fileName)
      cb(null,  Date.now() + fileName);
    } else {
      cb(null, false);
    }
  },
});



const userPhotoStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/user");
  },
  filename: function (req, file, cb) {
    if (file) {
      let fileName = path.extname(file.originalname) 
      cb(null,  Date.now() + fileName);
    } else {
      cb(null, false);
    }
  },
});

let userPhotoUpload = multer({
  storage: userPhotoStorage,
  fileFilter: function (req, file, cb) {
    if (file.mimetype.startsWith("image")) {
      cb(null, true);
    } else {
        logger.error("Unsupported file format")
      cb({ message: "Unsupported file format" }, false);
    }
  },
  limits: { fileSize: 1024 * 1024 * 5 }, 
});

module.exports = {
  blogPhotoUpload,
  userPhotoUpload,
  
};