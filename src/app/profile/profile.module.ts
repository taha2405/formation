import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { SettingsProfilComponent } from './components/settings-profil/settings-profil.component';


@NgModule({
  declarations: [
    ProfileComponent,
    SettingsProfilComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
