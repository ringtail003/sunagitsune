import { Injectable } from "@angular/core";
import { DropdownComponent } from "src/app/components/shared/dropdown/dropdown/dropdown.component";

@Injectable({ providedIn: "root" })
export class DropdownSharedContext {
  #components: DropdownComponent[] = [];

  addToken(component: DropdownComponent): void {
    this.#components.push(component);
  }

  closeAll(): void {
    this.#components.forEach((component) => component.content.close());
  }
}
