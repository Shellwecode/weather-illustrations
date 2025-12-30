import fs from "fs";
import path from "path";

const WEATHER_FOLDERS = [
  "clear-day",
  "clear-night",
  "rain-day",
  "rain-night",
  "snow-day",
  "snow-night",
];

for (const folder of WEATHER_FOLDERS) {
  const folderPath = path.join(process.cwd(), folder);
  if (!fs.existsSync(folderPath)) continue;

  const images = fs
    .readdirSync(folderPath)
    .filter((f) => f.endsWith(".png"))
    .filter((f) => f !== "index.json")
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  fs.writeFileSync(
    path.join(folderPath, "index.json"),
    JSON.stringify(images, null, 2)
  );
}
