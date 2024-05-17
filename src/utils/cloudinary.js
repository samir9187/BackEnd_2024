import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
cloudinary.config({
  cloud_name: "process.env.CLOUDINARY_CLOUD_NAME",
  api_key: "process.env.CLOUDINARY_CLOUD_API",
  api_secret: "process.env.CLOUDINARY_CLOUD_SECRET",
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    //upload file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resouce_type: "auto",
    });
    //file has been upload successfully
    console.log("file uploaded successfully", response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); //remove thr locally saved temp fileas the upload failed
    return null;
  }
};
export { uploadOnCloudinary };
