import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { NotesListComponent } from "./components/notes-list/notes-list.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

const appRoutes: Routes = [    
    { path: '', redirectTo: '/notes', pathMatch: 'full' },
    { path: 'notes', component: NotesListComponent },
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