import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilenameSettingComponent } from './filename-setting.component';

describe('FilenameSettingComponent', () => {
  let component: FilenameSettingComponent;
  let fixture: ComponentFixture<FilenameSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilenameSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilenameSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
