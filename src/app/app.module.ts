import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoseComponent } from './component/todose/todose.component';
import { TodoseFormComponent } from './component/todose/todose-form/todose-form.component';
import { TodoseListComponent } from './component/todose/todose-list/todose-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoseComponent,
    TodoseFormComponent,
    TodoseListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
