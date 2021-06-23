import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { AppComponent } from './app.component';
import { UploaderComponent } from './uploader/uploader.component';

@NgModule({
  declarations: [AppComponent, UploaderComponent],
  imports: [BrowserModule, NgxDropzoneModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
