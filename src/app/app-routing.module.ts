import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayaoutComponent } from './components/layaout/layaout.component';
import { ServicesPageComponent } from './components/services-page/services-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path:'',
    component:LayaoutComponent,
    children:[
      {
        path:'',
        redirectTo: '/monelec',
        pathMatch:"full"
      },
      {
        path:'monelec',
        component:HomeComponent
      },
      {
        path:'servicios',
        component:ServicesPageComponent,
      },
    ],
  },
  {
    path:'**',
    component:NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
