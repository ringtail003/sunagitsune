import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgxDropzoneModule } from "ngx-dropzone";
import { NavbarEffectsMenuComponent } from "src/app/components/navbar/navbar-effects-menu/navbar-effects-menu.component";
import { NavbarFooterComponent } from "src/app/components/navbar/navbar-footer/navbar-footer.component";
import { NavbarSettingComponent } from "src/app/components/navbar/navbar-setting/navbar-setting.component";
import { PreviewComponent } from "src/app/components/preview/preview.component";
import { IconLoadingComponent } from "src/app/components/shared/icons/icon-loading/icon-loading.component";
import { AppComponent } from "./app.component";
import { NavbarButtonComponent } from "./components/navbar/navbar-button/navbar-button.component";
import { NavbarEffectsComponent } from "./components/navbar/navbar-effects/navbar-effects.component";
import { NavbarComponent } from "./components/navbar/navbar/navbar.component";
import { BorderSettingComponent } from "./components/navbar/settings/border-setting/border-setting.component";
import { FilenameSettingComponent } from "./components/navbar/settings/filename-setting/filename-setting.component";
import { ResizeSettingComponent } from "./components/navbar/settings/resize-setting/resize-setting.component";
import { RotateSettingComponent } from "./components/navbar/settings/rotate-setting/rotate-setting.component";
import { ShadowSettingComponent } from "./components/navbar/settings/shadow-setting/shadow-setting.component";
import { IconChevronComponent } from "./components/shared/icons/icon-chevron-down/icon-chevron-down.component";
import { IconChevronLeftComponent } from "./components/shared/icons/icon-chevron-left/icon-chevron-left.component";
import { IconClipboardComponent } from "./components/shared/icons/icon-clipboard/icon-clipboard.component";
import { IconCogComponent } from "./components/shared/icons/icon-cog/icon-cog.component";
import { InputNumberComponent } from "./components/shared/input/input-number/input-number.component";
import { LogoComponent } from "./components/shared/logo/logo.component";
import { UploaderComponent } from "./components/uploader/uploader.component";

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
    NavbarButtonComponent,
    NavbarFooterComponent,
    IconClipboardComponent,
    IconChevronLeftComponent,
    PreviewComponent,
    IconLoadingComponent,
    BorderSettingComponent,
    BorderSettingComponent,
    ResizeSettingComponent,
    ShadowSettingComponent,
    RotateSettingComponent,
    FilenameSettingComponent,
    InputNumberComponent,
  ],
  imports: [BrowserModule, NgxDropzoneModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
