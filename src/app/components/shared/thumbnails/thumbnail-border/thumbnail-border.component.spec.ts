import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailBorderComponent } from './thumbnail-border.component';

describe('ThumbnailBorderComponent', () => {
  let component: ThumbnailBorderComponent;
  let fixture: ComponentFixture<ThumbnailBorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThumbnailBorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbnailBorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
