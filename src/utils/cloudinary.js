import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Function to upload image to Cloudinary
const uploadOnCloudinary = async (localFilePath) => {
  try {
    // checks if the path exists as a string
    if (!localFilePath) return null;   

    // Upload the file to Cloudinary
    const uploadResult = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    console.log("File uploaded to Cloudinary:", uploadResult.url);
    //console.log(uploadResult)

    //Delete local file after upload
    if (fs.existsSync(localFilePath)) {   //  checks if the file exists on the filesystem
      fs.unlinkSync(localFilePath);
    }

    return uploadResult;

  } catch (error) {
    console.error("Cloudinary upload failed:", error);

    // Cleanup local file on error
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }

    return null;
  }
};

export { uploadOnCloudinary };
