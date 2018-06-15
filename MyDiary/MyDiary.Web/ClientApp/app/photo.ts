import { Note } from "./note";

export class Photo {
    public Id: number;
    public Name: string;
    public NoteId: number;
    public Note: Note;
    public Image: string;
}