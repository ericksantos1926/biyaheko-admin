import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';

const routes: Routes = [
  //{ path: 'home', component: HomeComponent },
  { path: '', component:LoginComponent,pathMatch:'full'},
  { path: 'register', component:RegisterComponent,pathMatch: 'full'},
  { path: 'home', component:HomeComponent,pathMatch: 'full' },
  { path: 'agent', loadChildren: () => import('./agent/agent.module').then(m => m.AgentModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
