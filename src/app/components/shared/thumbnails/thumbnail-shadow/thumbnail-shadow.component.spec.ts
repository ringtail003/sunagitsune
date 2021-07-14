import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailShadowComponent } from './thumbnail-shadow.component';

describe('ThumbnailShadowComponent', () => {
  let component: ThumbnailShadowComponent;
  let fixture: ComponentFixture<ThumbnailShadowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThumbnailShadowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbnailShadowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
