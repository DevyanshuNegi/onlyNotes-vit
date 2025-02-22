"use server";

// Dynamically import Cloudinary to avoid issues
const cloudinary = (await import("cloudinary")).v2;

// Ensure environment variables are set
if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
  throw new Error("❌ Missing Cloudinary configuration. Please check your environment variables.");
}

// Cloudinary Config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

console.log("✅ Cloudinary configured successfully.");

export async function uploadFile(file: File): Promise<string> {
  try {
    const buffer = await file.arrayBuffer();
    const base64 = Buffer.from(buffer).toString("base64");
    const dataURI = `data:${file.type};base64,${base64}`;

    console.log("Uploading file to Cloudinary...");

    // Cloudinary Upload
    const result = await cloudinary.uploader.upload(dataURI, {
      folder: "vit-notes",
      resource_type: file.type.includes("image") ? "image" : "auto",
    });

    console.log("✅ Upload Successful:", result.secure_url);
    return result.secure_url;
  } catch (error: any) {
    console.error("❌ Cloudinary Upload Error:", error.message || error);
    throw new Error("File upload failed. Please try again.");
  }
}
