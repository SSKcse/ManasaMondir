const http = require('http');
const fs = require('fs');
const path = require('path');

let PORT = parseInt(process.env.PORT || '3000', 10);
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.mp3': 'audio/mpeg',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.ogg': 'video/ogg',
  '.mov': 'video/quicktime',
  '.mkv': 'video/x-matroska',
  '.m4v': 'video/mp4',
  '.avi': 'video/x-msvideo'
};

const server = http.createServer((req, res) => {
  // CORS Preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, HEAD',
      'Access-Control-Allow-Headers': '*'
    });
    res.end();
    return;
  }

  let reqPath = decodeURI(req.url.split('?')[0]);

  // Direct unlimited video / media upload endpoint
  if (req.method === 'POST' && (reqPath === '/api/upload' || reqPath === '/upload')) {
    const urlObj = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    const queryFilename = urlObj.searchParams.get('filename') || req.headers['x-filename'] || ('video_' + Date.now() + '.mp4');
    const safeExt = path.extname(queryFilename).toLowerCase() || '.mp4';
    const cleanBase = path.basename(queryFilename, safeExt).replace(/[^a-zA-Z0-9_\-\u0980-\u09FF]/g, '_').slice(0, 50) || 'media';
    const finalFilename = `${cleanBase}_${Date.now()}${safeExt}`;

    const uploadDir = path.join(__dirname, 'uploads', 'videos');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const destPath = path.join(uploadDir, finalFilename);
    const writeStream = fs.createWriteStream(destPath);

    req.pipe(writeStream);

    writeStream.on('finish', () => {
      res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      });
      res.end(JSON.stringify({
        success: true,
        url: `uploads/videos/${finalFilename}`,
        filename: finalFilename
      }));
    });

    writeStream.on('error', (err) => {
      res.writeHead(500, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      });
      res.end(JSON.stringify({ success: false, error: err.message }));
    });
    return;
  }

  if (reqPath === '/' || reqPath === '') reqPath = '/index.html';

  const filePath = path.join(__dirname, reqPath);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*' });
      res.end('Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    // HTTP Range request support for smooth video streaming, seeking and buffering
    const range = req.headers.range;
    if (range) {
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : stats.size - 1;

      if (start >= stats.size) {
        res.writeHead(416, {
          'Content-Range': `bytes */${stats.size}`,
          'Access-Control-Allow-Origin': '*'
        });
        res.end();
        return;
      }

      const chunkSize = (end - start) + 1;
      const fileStream = fs.createReadStream(filePath, { start, end });
      res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${stats.size}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunkSize,
        'Content-Type': contentType,
        'Access-Control-Allow-Origin': '*'
      });
      fileStream.pipe(res);
      return;
    }

    res.writeHead(200, {
      'Content-Type': contentType,
      'Content-Length': stats.size,
      'Accept-Ranges': 'bytes',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': ext === '.mp4' || ext === '.webm' || ext === '.mp3' ? 'public, max-age=3600' : 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    });

    fs.createReadStream(filePath).pipe(res);
  });
});

function startServer(port) {
  server.listen(port, () => {
    console.log(`\n========================================`);
    console.log(` Shree Shree Maa Manasa Mandir Server`);
    console.log(` Local:   http://localhost:${port}/`);
    console.log(`========================================\n`);
  });

  server.once('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} is in use, trying port ${port + 1}...`);
      startServer(port + 1);
    } else {
      console.error(err);
    }
  });
}

startServer(PORT);
