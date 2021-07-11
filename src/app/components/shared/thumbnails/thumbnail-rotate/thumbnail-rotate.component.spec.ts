import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailRotateComponent } from './thumbnail-rotate.component';

describe('ThumbnailRotateComponent', () => {
  let component: ThumbnailRotateComponent;
  let fixture: ComponentFixture<ThumbnailRotateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThumbnailRotateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbnailRotateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
