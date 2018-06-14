import { Entity } from "./Entity";
import { Photo } from "./Photo";

export interface Note extends Entity {
    description: string;
    date: Date;
    photos: Photo[];
}