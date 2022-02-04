import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { SliderModule } from 'primeng/slider';
import { GalleriaModule } from 'primeng/galleria';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { routing, appRoutingProviders } from './app.routing';
import { PhotoService } from './services/project.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { ProjectwebJSComponent } from './components/projectweb-js/projectweb-js.component';
import { ProjectDBComponent } from './components/project-db/project-db.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    ErrorComponent,
    ProjectwebJSComponent,
    ProjectDBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing, 
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    SliderModule,
    GalleriaModule
  ],
  providers: [
    appRoutingProviders,
    PhotoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
