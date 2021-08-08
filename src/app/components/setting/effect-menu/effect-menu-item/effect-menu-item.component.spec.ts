import { ComponentFixture, TestBed } from "@angular/core/testing";
import { EffectsMenuItemComponent } from "./effect-menu-item.component";

describe("NavbarEffectsMenuItemComponent", () => {
  let component: EffectsMenuItemComponent;
  let fixture: ComponentFixture<EffectsMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EffectsMenuItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EffectsMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
