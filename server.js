const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Define the route
app.get('/create-timestamp-file', (req, res) => {
    // Get the current timestamp
    const timestamp = new Date().toISOString();
    
    // Define the folder and file name
    const folderPath = path.join(__dirname, 'timestamp_files');
    const filePath = path.join(folderPath, `timestamp_${Date.now()}.txt`);
    
    // Ensure the folder exists
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }

    // Write the timestamp to the file
    fs.writeFile(filePath, timestamp, (err) => {
        if (err) {
            console.error("Error writing file:", err);
            return res.status(500).send('Error creating file');
        }
        res.send(`File created successfully at ${filePath}`);
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
