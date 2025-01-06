import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DownloadButtonComponent } from '../download-button/download-button.component';



@NgModule({
  declarations: [
    HomeComponent,
    DownloadButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
