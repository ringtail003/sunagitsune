import {
  AfterContentInit,
  Component,
  ContentChild,
  OnInit,
} from "@angular/core";
import { FormLabelForDirective } from "src/app/components/shared/form-layout/form-label-for/form-label-for.directive";
import { FormLabelComponent } from "src/app/components/shared/form-layout/form-label/form-label.component";

@Component({
  selector: "app-form-section",
  templateUrl: "./form-section.component.html",
  styleUrls: ["./form-section.component.scss"],
})
export class FormSectionComponent implements OnInit, AfterContentInit {
  @ContentChild(FormLabelComponent) labelElement!: FormLabelComponent;
  @ContentChild(FormLabelForDirective) labelForElement!: FormLabelForDirective;

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    if (!this.labelElement || !this.labelForElement) {
      throw new Error(
        `form-section using with label element and label-for directive.`
      );
    }

    this.labelElement.for = this.labelForElement.id;
    this.labelForElement.label = this.labelElement.label;
  }
}
