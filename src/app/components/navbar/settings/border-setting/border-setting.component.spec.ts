import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderSettingComponent } from './border-setting.component';

describe('BorderSettingComponent', () => {
  let component: BorderSettingComponent;
  let fixture: ComponentFixture<BorderSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorderSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
