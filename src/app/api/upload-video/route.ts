import { google } from "googleapis";
import { NextResponse } from "next/server";
import { Readable } from "stream";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { videoBase64, filename } = body;

    if (!videoBase64 || !filename) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }

    // Decode Base64 video content to a Buffer
    const videoBuffer = Buffer.from(videoBase64, "base64");

    // Convert Buffer to a readable stream
    const stream = new Readable();
    stream.push(videoBuffer);
    stream.push(null);

    // Authenticate with Google Drive API
    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(process.env.GOOGLE_CREDENTIALS!),
      scopes: ["https://www.googleapis.com/auth/drive.file"],
    });

    const drive = google.drive({ version: "v3", auth });

    const folderId = process.env.DRIVE_FOLDER_ID;

    // Upload the file to Google Drive
    const response = await drive.files.create({
      requestBody: {
        name: filename,
        mimeType: "video/webm", // Adjust as needed
        parents: [folderId],
      },
      media: {
        mimeType: "video/webm",
        body: stream, // Pass the readable stream
      },
    });
    console.log("Buffer length:", videoBuffer.length);
    console.log("Stream is readable:", stream.readable);

    return NextResponse.json({
      message: "File uploaded successfully!",
      fileId: response.data.id,
    });
  } catch (error) {
    console.error("Error uploading to Google Drive:", error);
    return NextResponse.json(
      { error: "Failed to upload to Google Drive: " + error.message },
      { status: 500 },
    );
  }
}
