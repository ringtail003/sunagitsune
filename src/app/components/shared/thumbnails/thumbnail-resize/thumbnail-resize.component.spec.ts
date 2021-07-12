import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailResizeComponent } from './thumbnail-resize.component';

describe('ThumbnailResizeComponent', () => {
  let component: ThumbnailResizeComponent;
  let fixture: ComponentFixture<ThumbnailResizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThumbnailResizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbnailResizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
