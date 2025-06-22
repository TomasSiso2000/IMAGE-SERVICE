const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const convertToWebP = async (stream, originalName) => {
  const outputPath = path.join(__dirname, '..', 'uploads', `${Date.now()}-${originalName}.webp`);
  const writeStream = fs.createWriteStream(outputPath);

  await new Promise((resolve, reject) => {
    const transformer = sharp().webp();

    stream.pipe(transformer).pipe(writeStream)
      .on('finish', resolve)
      .on('error', reject);
  });

  return outputPath;
};

module.exports = { convertToWebP };
