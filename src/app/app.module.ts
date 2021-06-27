import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgxDropzoneModule } from "ngx-dropzone";
import { NavbarEffectsMenuComponent } from "src/app/components/navbar/navbar-effects-menu/navbar-effects-menu.component";
import { NavbarSettingComponent } from "src/app/components/navbar/navbar-setting/navbar-setting.component";
import { AppComponent } from "./app.component";
import { IconChevronComponent } from "./components/icons/icon-chevron-down/icon-chevron-down.component";
import { IconClipboardComponent } from "./components/icons/icon-clipboard/icon-clipboard.component";
import { IconCogComponent } from "./components/icons/icon-cog/icon-cog.component";
import { NavbarEffectsComponent } from "./components/navbar/navbar-effects/navbar-effects.component";
import { NavbarComponent } from "./components/navbar/navbar/navbar.component";
import { SettingButtonComponent } from "./components/navbar/setting-button/setting-button.component";
import { UploaderComponent } from "./components/uploader/uploader.component";
import { LogoComponent } from "./logo/logo.component";
import { NavbarFooterComponent } from "./navbar-footer/navbar-footer.component";
import { IconChevronLeftComponent } from "./components/icons/icon-chevron-left/icon-chevron-left.component";

@NgModule({
  declarations: [
    AppComponent,
    UploaderComponent,
    NavbarComponent,
    IconCogComponent,
    LogoComponent,
    IconChevronComponent,
    NavbarEffectsMenuComponent,
    NavbarEffectsComponent,
    NavbarSettingComponent,
    SettingButtonComponent,
    NavbarFooterComponent,
    IconClipboardComponent,
    IconChevronLeftComponent,
  ],
  imports: [BrowserModule, NgxDropzoneModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
