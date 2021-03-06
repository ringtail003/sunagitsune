import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgxDropzoneModule } from "ngx-dropzone";
import { AppRoutingModule } from "src/app-routing.module";
import { NavbarFooterComponent } from "src/app/components/navbar/navbar-footer/navbar-footer.component";
import { SettingPageComponent } from "src/app/components/pages/setting-page/setting-page.component";
import { PreviewComponent } from "src/app/components/preview/preview.component";
import { EffectsMenuItemComponent } from "src/app/components/setting/effect-menu/effect-menu-item/effect-menu-item.component";
import { EffectMenuComponent } from "src/app/components/setting/effect-menu/effect-menu.component";
import { IconLoadingComponent } from "src/app/components/shared/icons/icon-loading/icon-loading.component";
import { AppComponent } from "./app.component";
import { NavbarButtonComponent } from "./components/navbar/navbar-button/navbar-button.component";
import { NavbarRouterLinkComponent } from "./components/navbar/navbar-router-link/navbar-router-link.component";
import { NavbarComponent } from "./components/navbar/navbar/navbar.component";
import { DescriptionPageComponent } from "./components/pages/description-page/description-page.component";
import { UploadPageComponent } from "./components/pages/upload-page/upload-page.component";
import { BorderSettingComponent } from "./components/setting/effect-setting/border-setting/border-setting.component";
import { FilenameSettingComponent } from "./components/setting/effect-setting/filename-setting/filename-setting.component";
import { ResizeSettingComponent } from "./components/setting/effect-setting/resize-setting/resize-setting.component";
import { RotateSettingComponent } from "./components/setting/effect-setting/rotate-setting/rotate-setting.component";
import { ShadowSettingComponent } from "./components/setting/effect-setting/shadow-setting/shadow-setting.component";
import { TextSettingComponent } from "./components/setting/effect-setting/text-setting/text-setting.component";
import { AreaTitleComponent } from "./components/shared/area-title/area-title.component";
import { OutlineButtonComponent } from "./components/shared/buttons/outline-button/outline-button.component";
import { DropdownContentComponent } from "./components/shared/dropdown/dropdown-content/dropdown-content.component";
import { DropdownTriggerComponent } from "./components/shared/dropdown/dropdown-trigger/dropdown-trigger.component";
import { DropdownComponent } from "./components/shared/dropdown/dropdown/dropdown.component";
import { FormContentComponent } from "./components/shared/form-layout/form-content/form-content.component";
import { FormErrorComponent } from "./components/shared/form-layout/form-error/form-error.component";
import { FormFooterComponent } from "./components/shared/form-layout/form-footer/form-footer.component";
import { FormGroupSectionComponent } from "./components/shared/form-layout/form-group-section/form-group-section.component";
import { FormHeaderComponent } from "./components/shared/form-layout/form-header/form-header.component";
import { FormLabelForDirective } from "./components/shared/form-layout/form-label-for/form-label-for.directive";
import { FormLabelComponent } from "./components/shared/form-layout/form-label/form-label.component";
import { FormLayoutComponent } from "./components/shared/form-layout/form-layout.component";
import { FormSectionTitleComponent } from "./components/shared/form-layout/form-section-title/form-section-title.component";
import { FormSectionComponent } from "./components/shared/form-layout/form-section/form-section.component";
import { FormUnitComponent } from "./components/shared/form-layout/form-unit/form-unit.component";
import { HeaderImageComponent } from "./components/shared/header-image/header-image.component";
import { IconCheckCircleComponent } from "./components/shared/icons/icon-check-circle/icon-check-circle.component";
import { IconExclamationCircleComponent } from "./components/shared/icons/icon-exclamation-circle/icon-exclamation-circle.component";
import { IconGithubComponent } from "./components/shared/icons/icon-github/icon-github.component";
import { IconPencilAltComponent } from "./components/shared/icons/icon-pencil-alt/icon-pencil-alt.component";
import { IconTwitterComponent } from "./components/shared/icons/icon-twitter/icon-twitter.component";
import { IconXComponent } from "./components/shared/icons/icon-x/icon-x.component";
import { InputColorComponent } from "./components/shared/input/input-color/input-color.component";
import { InputFilenameComponent } from "./components/shared/input/input-filename/input-filename.component";
import { InputFontComponent } from "./components/shared/input/input-font/input-font.component";
import { InputNumberComponent } from "./components/shared/input/input-number/input-number.component";
import { InputRadioComponent } from "./components/shared/input/input-radio/input-radio.component";
import { InputRangeComponent } from "./components/shared/input/input-range/input-range.component";
import { InputTextComponent } from "./components/shared/input/input-text/input-text.component";
import { LogoComponent } from "./components/shared/logo/logo.component";
import { ThumbnailComponent } from "./components/shared/thumbnail/thumbnail.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { SplashComponent } from "./components/splash/splash.component";
import { UploaderComponent } from "./components/uploader/uploader.component";
import { MenuLabelPipe } from "./pipes/menu-label.pipe";

@NgModule({
  declarations: [
    AppComponent,
    UploaderComponent,
    NavbarComponent,
    LogoComponent,
    EffectsMenuItemComponent,
    EffectMenuComponent,
    NavbarButtonComponent,
    NavbarFooterComponent,
    PreviewComponent,
    IconLoadingComponent,
    BorderSettingComponent,
    BorderSettingComponent,
    ResizeSettingComponent,
    ShadowSettingComponent,
    RotateSettingComponent,
    FilenameSettingComponent,
    InputNumberComponent,
    FormLayoutComponent,
    FormLabelComponent,
    FormContentComponent,
    FormSectionComponent,
    FormUnitComponent,
    FormLabelForDirective,
    InputColorComponent,
    InputRadioComponent,
    FormGroupSectionComponent,
    FormErrorComponent,
    IconExclamationCircleComponent,
    OutlineButtonComponent,
    FormFooterComponent,
    ThumbnailComponent,
    InputFilenameComponent,
    TextSettingComponent,
    InputTextComponent,
    AreaTitleComponent,
    InputFontComponent,
    IconXComponent,
    SplashComponent,
    FormHeaderComponent,
    SidebarComponent,
    MenuLabelPipe,
    IconCheckCircleComponent,
    HeaderImageComponent,
    IconPencilAltComponent,
    FormSectionTitleComponent,
    InputRangeComponent,
    SettingPageComponent,
    UploadPageComponent,
    NavbarRouterLinkComponent,
    DescriptionPageComponent,
    IconGithubComponent,
    DropdownContentComponent,
    DropdownComponent,
    DropdownTriggerComponent,
    IconTwitterComponent,
  ],
  imports: [BrowserModule, NgxDropzoneModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
