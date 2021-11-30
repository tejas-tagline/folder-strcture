import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileFolderInputComponent } from './file-folder-input/file-folder-input.component';



@NgModule({
  declarations: [
    FileFolderInputComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FileFolderInputComponent
  ]
})
export class SharedModule { }
