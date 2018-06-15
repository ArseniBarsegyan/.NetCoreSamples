import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { NotesListComponent } from "./components/notes-list/notes-list.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { CreateNoteComponent } from "./components/create-note/create-note.component";

const appRoutes: Routes = [    
    { path: '', redirectTo: '/notes', pathMatch: 'full' },
    { path: 'notes', component: NotesListComponent },
    { path: 'notes/create', component: CreateNoteComponent },    
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes)
    ],
    exports: [
        RouterModule]
})
export class AppRoutingModule { }