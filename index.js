import { createNote, readNote, updateNote, deleteNote } from './notes.js';

const cmd = process.argv[2];
const title = process.argv[3];
const content = process.argv[4];

switch (cmd) {
    case 'create':
        createNote(title, content);
        break;
    case 'read':
        readNote(title);
        break;
    case 'update':
        updateNote(title, content);
        break;
    case 'delete':
        deleteNote(title);
        break;
    default:
        console.error('Invalid command. Use "create", "read", "update", or "delete"');
        break;
}