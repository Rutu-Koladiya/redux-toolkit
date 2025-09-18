import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Initialize Cloudinary only if environment variables are available
if (!process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
  console.error("Missing Cloudinary credentials!");
} else {
  console.log("Cloudinary credentials loaded successfully!");
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    console.log(process.env.CLOUDINARY_CLOUD_NAME, "cloud name");
    console.log(process.env.CLOUDINARY_API_KEY, "cloud api key");
    console.log(process.env.CLOUDINARY_API_SECRET, "cloud api secreat");
    console.log(localFilePath, "local file path");

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    // file has been uploaded successfull
    console.log(response, "response");

    console.log("file is uploaded on cloudinary ", response.url);

    // fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    console.error("Error uploading file to Cloudinary:", error);
    fs.unlinkSync(localFilePath); // remove the locally saved temporary file as the upload operation got failed
    return null;
  }
};
