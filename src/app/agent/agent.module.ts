import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentRoutingModule } from './agent-routing.module';
import { AgentComponent } from './agent.component';
import { RegistrationComponent } from './page/registration/registration.component';


@NgModule({
  declarations: [
    AgentComponent,
    RegistrationComponent,
  ],
  imports: [
    CommonModule,
    AgentRoutingModule
  ]
})
export class AgentModule { }
