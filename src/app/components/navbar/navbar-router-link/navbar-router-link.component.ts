import { Component, Input, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { filter, tap } from "rxjs/operators";

@Component({
  selector: "app-navbar-router-link",
  templateUrl: "./navbar-router-link.component.html",
  styleUrls: ["./navbar-router-link.component.scss"],
})
export class NavbarRouterLinkComponent implements OnInit {
  @Input() url!: string;
  @Input() text!: string;

  isActive = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        tap({
          next: (event) => {
            this.isActive = `/${this.url}` === (event as NavigationEnd).url;
          },
        })
      )
      .subscribe();
  }
}
