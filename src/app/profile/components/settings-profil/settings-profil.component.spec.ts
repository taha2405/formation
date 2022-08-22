import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsProfilComponent } from './settings-profil.component';

describe('SettingsProfilComponent', () => {
  let component: SettingsProfilComponent;
  let fixture: ComponentFixture<SettingsProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsProfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
