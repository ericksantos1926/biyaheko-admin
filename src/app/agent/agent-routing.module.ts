import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentComponent } from './agent.component';
import { RegistrationComponent } from './page/registration/registration.component';

const routes: Routes = [
  // { 
  //   path: '', 
  //   component: AgentComponent,pathMatch: 'full' 
  // },
  {  
    path: '',
    redirectTo:'register',
    pathMatch: 'full' 
  },
  {  
    path: 'register',
    component:RegistrationComponent,
    pathMatch: 'full' 
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule { }
