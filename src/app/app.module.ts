import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ServicesPageComponent } from './components/services-page/services-page.component';
import { ContacPageComponent } from './components/contac-page/contac-page.component';
import { LayaoutComponent } from './components/layaout/layaout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ModalImageComponent } from './components/modal-image/modal-image.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ServicesPageComponent,
    ContacPageComponent,
    LayaoutComponent,
    NotFoundComponent,
    HomeComponent,
    FooterComponent,
    GalleryComponent,
    ModalImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
