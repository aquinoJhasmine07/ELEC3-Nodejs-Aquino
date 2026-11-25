/*
 * Full Name: Jhasmine M. Aquino
 * Section: IV-BSIT-A
 * Activity Code: N3: File Manager with fs and path
 * Date: November 23, 2026
 */

import fs from "fs";
import path from "path";
import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const folder = path.join(__dirname, "files"); //Sa folder na ito masesave ung mga gagawing files

// Gagawa ng folder if wala pa
if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder);
}

const command = process.argv[2];
const fileName = process.argv[3];
const content = process.argv[4];

//Full path ng file inside the files folder
const filePath = path.join(folder, fileName || "");

//Creates new file with content
function createFile() {
    if (!fileName || content === undefined) {
        console.log("Please provide a file name and content.");
    } else if (fs.existsSync(filePath)) {
        console.log(`${fileName} already exists!`);
    } else {
        fs.writeFileSync(filePath, content);
        console.log(`${fileName} was created successfully!`);
    }
}

//This shows the contents of a file
function readFile() {
    if (!fileName) {
        console.log("Please provide a file name.");
    } else if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, "utf8");
        console.log("File contents:", data);
    } else {
        console.log(`${fileName} does not exist!`);
    }
}

//Updates a file
function updateFile() {
    if (!fileName || content === undefined) {
        console.log("Please provide a file name and content.");
    } else if (fs.existsSync(filePath)) {
        fs.appendFileSync(filePath, content);
        console.log(`${fileName} was updated successfully!`);
    } else {
        console.log(`${fileName} does not exist!`);
    }
}

//Deletes a file
function deleteFile() {
    if (!fileName) {
        console.log("Please provide a file name.");
    } else if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        console.log(`${fileName} deleted successfully!`);
    } else {
        console.log(`${fileName} does not exist!`);
    }
}

//Show all the files in the files folder
function listFiles() {
    const files = fs.readdirSync(folder);

    if (files.length === 0) {
        console.log("No files found!");
    } else {
        //Displays all the files in the folder and their details
        files.forEach(file => {
            const currentPath = path.join(folder, file);
            const data = fs.readFileSync(currentPath, "utf8");

            console.log("\nFile Name:", path.basename(file));
            console.log("Extension:", path.extname(file));
            console.log("Full Path:", currentPath);
            console.log("Contents:", data);
        });
    }
}

if (command === "create") {
    createFile();
} else if (command === "read") {
    readFile();
} else if (command === "update") {
    updateFile();
} else if (command === "delete") {
    deleteFile();
} else if (command === "list") {
    listFiles();
} else {
    console.log("Invalid command!");
    console.log("===== List of Commands =====");
    console.log('  node index.js create <filename> "<content>"');
    console.log("  node index.js read <filename>");
    console.log('  node index.js update <filename> "<text to add>"');
    console.log("  node index.js delete <filename>");
    console.log("  node index.js list");
}
