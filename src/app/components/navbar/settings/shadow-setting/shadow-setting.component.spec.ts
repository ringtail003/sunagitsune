import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowSettingComponent } from './shadow-setting.component';

describe('ShadowSettingComponent', () => {
  let component: ShadowSettingComponent;
  let fixture: ComponentFixture<ShadowSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShadowSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadowSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
