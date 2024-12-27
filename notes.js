import fs from "fs";

const curDir = ".";

export function createNote(title, content) {
  const filePath = `${curDir}/${title}.txt`;
  fs.writeFileSync(filePath, content);
  console.log("Created!!");
}

export function readNote(title) {
  const filePath = `${curDir}/${title}.txt`;
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath).toString();
    console.log(content);
  }
  else {
    console.log("Note not found.");
  }
}

export function updateNote(title, content) {
    const filePath = `${curDir}/${title}.txt`;
    if (fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, content);
        console.log("Updated!!");
    } else {
        console.log("Note not found.");
    }
}

export function deleteNote(title) {
    const filePath = `${curDir}/${title}.txt`;
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        console.log("Deleted!!");
    } else {
        console.log("Note not found.");
    }
}

// module.exports = { createNote, readNote, writeNote, deleteNote };