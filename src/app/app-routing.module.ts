import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: 'profile',
		loadChildren: './profile/profile.core.module#ProfileCoreModule'
	},
	{
		path: '',
		redirectTo: 'profile/view',
		pathMatch: 'full'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingCoreModule { }
