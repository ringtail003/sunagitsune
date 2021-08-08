import { ComponentFixture, TestBed } from "@angular/core/testing";
import { EffectMenuComponent } from "./effect-menu.component";

describe("EffectMenuComponent", () => {
  let component: EffectMenuComponent;
  let fixture: ComponentFixture<EffectMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EffectMenuComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EffectMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
