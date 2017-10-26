import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { SearchByPipe } from './pipe/search-by-pipe';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RoutingModule } from './app.routes';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumService } from './services/album.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchByPipe,
    NavbarComponent,
    HomepageComponent,
    AlbumDetailComponent,
    AlbumListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [AlbumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
