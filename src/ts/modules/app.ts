import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Header, Layout, Navigation } from '../components';

import { LayoutService } from '../services';

@NgModule({
  declarations: [
    Header,
    Layout,
    Navigation
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    LayoutService
  ],
  bootstrap: [Layout]
})
export class App { }
