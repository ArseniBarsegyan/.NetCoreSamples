import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { NotesListComponent } from "./components/notes-list/notes-list.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { CreateNoteComponent } from "./components/create-note/create-note.component";
import { NoteDetailComponent } from "./components/note-detail/note-detail.component";
import {SigninComponent} from "./components/auth/signin/signin.component";

const appRoutes: Routes = [    
    { path: '', redirectTo: '/notes', pathMatch: 'full' },
    { path: 'signin', component: SigninComponent },
    { path: 'notes', component: NotesListComponent },
    { path: 'notes/detail/:id', component: NoteDetailComponent },
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