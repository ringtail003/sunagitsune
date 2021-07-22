import { AfterViewInit, Directive, ElementRef, OnInit } from "@angular/core";
import { findElements } from "src/app/utils/find-element";
import { uniqueId } from "src/app/utils/unique-id";

@Directive({
  selector: "[appFormLabelFor]",
})
export class FormLabelForDirective implements OnInit, AfterViewInit {
  label!: string;
  id!: string;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.id = uniqueId();
  }

  ngAfterViewInit(): void {
    const children = findElements(this.elementRef.nativeElement, [
      "input",
      "select",
    ]);

    if (!children.length) {
      throw new Error(
        `form-label-for using component that contains input element.`
      );
    }

    if (children.length > 1) {
      throw new Error(
        `form-label-for expected component that contains single input element. but got multiple input element.`
      );
    }

    children[0].setAttribute("id", this.id);
  }
}
