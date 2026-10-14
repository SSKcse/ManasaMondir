const fs = require('fs');
const path = require('path');

const assets = [
  'header image.jpg',
  'gallary image.png',
  'ma manasa mondir font.jpg',
  'ma manasa mondir lake dighi view.jpg',
  'logo (1).jpg',
  'ma manasa mondir goila.jpg',
  'manasaprofile.jpg',
  'kobi bijoy gupta.png',
  'bkash QR.jpg'
];

async function downloadAll() {
  const baseUrl = 'https://www.manasamondirgoila.com/';

  for (const asset of assets) {
    const encoded = encodeURI(asset);
    const targetUrl = baseUrl + encoded;
    console.log(`Downloading: ${targetUrl}`);
    try {
      const res = await fetch(targetUrl);
      if (!res.ok) {
        console.error(`Failed ${asset}: status ${res.status}`);
        continue;
      }
      const buffer = await res.arrayBuffer();
      fs.writeFileSync(asset, Buffer.from(buffer));
      console.log(`Successfully saved ${asset} (${buffer.byteLength} bytes)`);
    } catch (e) {
      console.error(`Error downloading ${asset}:`, e.message);
    }
  }
}

downloadAll();
