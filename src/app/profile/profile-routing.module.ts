import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileCoreComponent } from './profile.core.component';

const routes: Routes = [
    {
        path: '',
        component: ProfileCoreComponent,
        children: [
            {
                path: 'view',
                loadChildren: './profile-view/profile-view.core.module#ProfileViewCoreModule'
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
