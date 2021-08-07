import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotateSettingComponent } from './rotate-setting.component';

describe('RotateSettingComponent', () => {
  let component: RotateSettingComponent;
  let fixture: ComponentFixture<RotateSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotateSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RotateSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
