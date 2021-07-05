import { Directive, Input } from "@angular/core";
import { uniqueId } from "src/app/utils/unique-id";

@Directive({
  selector: "[appFormLabelFor]",
})
export class FormLabelForDirective {
  label!: string;

  constructor() {}

  id(): string {
    return uniqueId();
  }
}
