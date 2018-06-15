import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NotesService } from './notes.service';
@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent],
    providers: [NotesService],
    bootstrap: [AppComponent]
})
export class AppModule { }