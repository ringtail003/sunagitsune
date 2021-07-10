import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroupSectionComponent } from './form-group-section.component';

describe('FormGroupSectionComponent', () => {
  let component: FormGroupSectionComponent;
  let fixture: ComponentFixture<FormGroupSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGroupSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGroupSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
