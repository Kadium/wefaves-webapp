import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormsModule } from "@angular/forms";

import { DashboardComponent } from "./dashboard.component";
import { FeedComponent } from "./feed/feed.component";
import { ProfileComponent } from "./profile/profile.component";
import { UpdateUserFormComponent } from "./profile/update-user-form.component"
import { UpdatePasswordFormComponent } from "./profile/update-password-form.component"
import { SettingComponent } from "./setting/setting.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    SettingComponent,
    ProfileComponent,
    FeedComponent,
    UpdateUserFormComponent,
    UpdatePasswordFormComponent
  ]
})
export class DashboardModule { }
