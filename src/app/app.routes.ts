import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomepageComponent } from './homepage/homepage.component';
import { AlbumDetailComponent} from './album-detail/album-detail.component';
import { AlbumListComponent } from './album-list/album-list.component';
const appRoutes: Routes = [
 {
   path:'',
   component: HomepageComponent
 },
 {
   path: 'albums',
   component: AlbumListComponent
 },
 {
   path: 'albums/:id',
   component: AlbumDetailComponent
 }
];

@NgModule({
 imports: [RouterModule.forRoot(appRoutes)],
 exports: [RouterModule]
})

export class RoutingModule {}
