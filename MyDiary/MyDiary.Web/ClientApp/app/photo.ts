import { Note } from "./note";

export class Photo {
    constructor(public id?: number,
        public name?: string,
        public noteId?: number,
        public note?: Note,
        public image?: string) { }
}