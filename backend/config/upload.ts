import multer from 'multer';
import path from 'path';

const config = require(path.join(__dirname, './config.json'))[process.env.NODE_ENV || 'development'];
const storage = multer.diskStorage({
  destination: (req: any, file: any, cb: any) => {
    cb(null, config.path.upload_path_index);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer(
  { storage: storage,
    dest: 'uploads/',
    limits: { fileSize: 1024 * 1024 * 300 }
  }
).any();

// const upload = multer({ dest: 'uploads/', limits: {fileSize: 1024 * 1024 * 8 }});

module.exports = upload;
