import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResizeSettingComponent } from './resize-setting.component';

describe('ResizeSettingComponent', () => {
  let component: ResizeSettingComponent;
  let fixture: ComponentFixture<ResizeSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResizeSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResizeSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
