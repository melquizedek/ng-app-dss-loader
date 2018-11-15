import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileViewRoutingModule } from './profile-view-routing.module';
import { ProfileViewCoreComponent } from './profile-view.core.component';

@NgModule({
  imports: [
      CommonModule,
      ProfileViewRoutingModule
  ],
  declarations: [
      ProfileViewCoreComponent
  ]
})
export class ProfileViewCoreModule { }
