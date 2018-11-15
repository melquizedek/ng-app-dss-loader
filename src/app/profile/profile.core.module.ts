import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileCoreComponent } from './profile.core.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule
  ],
  declarations: [ ProfileCoreComponent ],
  exports: [ProfileCoreComponent]
})
export class ProfileCoreModule { }
