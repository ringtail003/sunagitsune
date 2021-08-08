import {
  AfterContentInit,
  Component,
  ContentChild,
  OnInit,
} from "@angular/core";
import { DropdownContentComponent } from "src/app/components/shared/dropdown/dropdown-content/dropdown-content.component";
import { DropdownTriggerComponent } from "src/app/components/shared/dropdown/dropdown-trigger/dropdown-trigger.component";

@Component({
  selector: "app-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.scss"],
})
export class DropdownComponent implements OnInit, AfterContentInit {
  @ContentChild(DropdownTriggerComponent) trigger!: DropdownTriggerComponent;
  @ContentChild(DropdownContentComponent) content!: DropdownContentComponent;

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.trigger.setHandler(() => this.handleClickTrigger());
  }

  handleClickTrigger(): void {
    this.content.toggle();
  }
}
