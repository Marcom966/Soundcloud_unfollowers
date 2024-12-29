import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { LogInComponentComponent } from './components/log-in-component/log-in-component.component';

const routes: Routes = [{
  path: 'home', component: HomeComponentComponent
},{
  path: 'LogIn', component: LogInComponentComponent
},{
  path: '**', redirectTo: 'home'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
