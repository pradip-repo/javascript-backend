import multer from "multer";

// Set up storage for uploaded files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/temp');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);
      //console.log("File:", file);
    }
  });
  
  // Create the multer instance
  export const upload = multer({ storage: storage });
  
  