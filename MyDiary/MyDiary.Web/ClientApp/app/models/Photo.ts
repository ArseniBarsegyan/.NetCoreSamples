import { Entity } from "./Entity";

export interface Photo extends Entity {
    name: string;
    noteId: number;
    image: string;
}