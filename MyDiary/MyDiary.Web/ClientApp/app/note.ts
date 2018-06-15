import { Photo } from "./photo";

export class Note {
    public Id: number;
    public Description: string;
    public Date: Date;
    public Photos: Photo[];
}