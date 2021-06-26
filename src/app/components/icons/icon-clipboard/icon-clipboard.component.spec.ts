import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconClipboardComponent } from './icon-clipboard.component';

describe('IconClipboardComponent', () => {
  let component: IconClipboardComponent;
  let fixture: ComponentFixture<IconClipboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconClipboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconClipboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
