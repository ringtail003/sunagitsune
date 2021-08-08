import {
  AfterContentInit,
  Component,
  ContentChild,
  Input,
  OnInit,
} from "@angular/core";
import { DropdownContentComponent } from "src/app/components/shared/dropdown/dropdown-content/dropdown-content.component";
import { DropdownTriggerComponent } from "src/app/components/shared/dropdown/dropdown-trigger/dropdown-trigger.component";
import { DropdownSharedContext } from "src/app/components/shared/dropdown/dropdown/dropdown-shared-context";

@Component({
  selector: "app-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.scss"],
})
export class DropdownComponent implements OnInit, AfterContentInit {
  @ContentChild(DropdownTriggerComponent) trigger!: DropdownTriggerComponent;
  @ContentChild(DropdownContentComponent) content!: DropdownContentComponent;

  @Input() label!: string;

  constructor(private sharedContext: DropdownSharedContext) {}

  ngOnInit(): void {
    if (!this.label) {
      throw new Error(`Dropdown component should be use with "[label]".`);
    }
    this.sharedContext.addToken(this);
  }

  ngAfterContentInit(): void {
    this.trigger.setHandler(() => this.handleClickTrigger());
    this.content.setHandler(() => this.handleExtendContent());
  }

  handleClickTrigger(): void {
    this.sharedContext.closeAll();
    this.content.toggle();
  }

  handleExtendContent(): void {}
}
