import path from "path";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { readFile } from "fs/promises";

const coversFolder = path.join(process.cwd(), "covers");
if (!existsSync(coversFolder)) mkdirSync(coversFolder);

const defaultCoverPath = path.join(coversFolder, "default.jpg");
if (!existsSync(defaultCoverPath)) {
  console.log("Downloading default cover...");
  const response = await fetch(
    "https://osu.ppy.sh/images/headers/profile-covers/c2.jpg",
    {
      method: "GET",
    },
  );
  const buffer = await response.arrayBuffer();
  writeFileSync(defaultCoverPath, Buffer.from(buffer));
}

const defaultCover = readFileSync(defaultCoverPath);

export async function GET({ params, setHeaders }) {
  const userId = params.userId;
  const coverPath = path.join(coversFolder, `${userId}.jpg`);
  if (existsSync(coverPath)) {
    const cover = await readFile(coverPath);
    setHeaders({
      "Content-Type": "image/jpeg",
    });
    return new Response(cover, {
      status: 200,
    });
  }
  return new Response(defaultCover, {
    status: 200,
  });
}
