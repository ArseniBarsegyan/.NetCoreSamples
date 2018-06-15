import { Photo } from "./photo";

export class Note {
    constructor(public Id?: number,
        public Description?: string,
        public Date?: Date,
        public Photos?: Photo[]) 
    { }
}