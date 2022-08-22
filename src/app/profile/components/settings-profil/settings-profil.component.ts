import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-profil',
  templateUrl: './settings-profil.component.html',
  styleUrls: ['./settings-profil.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsProfilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
