import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileViewCoreComponent } from './profile-view.core.component';

const routes: Routes = [
	{
		path: '',
		component: ProfileViewCoreComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileViewRoutingModule { }
