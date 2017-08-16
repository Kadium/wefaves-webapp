import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from "./dashboard.component";
import { FeedComponent } from "./feed/feed.component";
import { SettingComponent } from "./setting/setting.component";
import { ProfileComponent } from "./profile/profile.component";

const routes: Routes = [
{
    path: 'feed',
    component: FeedComponent
  },
  {
    path: 'setting',
    component: SettingComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class DashboardRoutingModule { }
