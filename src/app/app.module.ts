import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { NgxDropzoneModule } from "ngx-dropzone";
import { NavbarEffectsMenuComponent } from "src/app/components/navbar/navbar-effects-menu/navbar-effects-menu.component";
import { NavbarFooterComponent } from "src/app/components/navbar/navbar-footer/navbar-footer.component";
import { PreviewComponent } from "src/app/components/preview/preview.component";
import { SettingComponent } from "src/app/components/setting/setting.component";
import { IconLoadingComponent } from "src/app/components/shared/icons/icon-loading/icon-loading.component";
import { AppComponent } from "./app.component";
import { NavbarButtonComponent } from "./components/navbar/navbar-button/navbar-button.component";
import { NavbarEffectsComponent } from "./components/navbar/navbar-effects/navbar-effects.component";
import { NavbarLinkComponent } from "./components/navbar/navbar-link/navbar-link.component";
import { NavbarComponent } from "./components/navbar/navbar/navbar.component";
import { BorderSettingComponent } from "./components/setting/effect-setting/border-setting/border-setting.component";
import { FilenameSettingComponent } from "./components/setting/effect-setting/filename-setting/filename-setting.component";
import { ResizeSettingComponent } from "./components/setting/effect-setting/resize-setting/resize-setting.component";
import { RotateSettingComponent } from "./components/setting/effect-setting/rotate-setting/rotate-setting.component";
import { ShadowSettingComponent } from "./components/setting/effect-setting/shadow-setting/shadow-setting.component";
import { TextSettingComponent } from "./components/setting/effect-setting/text-setting/text-setting.component";
import { AreaTitleComponent } from "./components/shared/area-title/area-title.component";
import { OutlineButtonComponent } from "./components/shared/buttons/outline-button/outline-button.component";
import { FormContentComponent } from "./components/shared/form-layout/form-content/form-content.component";
import { FormErrorComponent } from "./components/shared/form-layout/form-error/form-error.component";
import { FormFooterComponent } from "./components/shared/form-layout/form-footer/form-footer.component";
import { FormGroupSectionComponent } from "./components/shared/form-layout/form-group-section/form-group-section.component";
import { FormHeaderComponent } from "./components/shared/form-layout/form-header/form-header.component";
import { FormLabelForDirective } from "./components/shared/form-layout/form-label-for/form-label-for.directive";
import { FormLabelComponent } from "./components/shared/form-layout/form-label/form-label.component";
import { FormLayoutComponent } from "./components/shared/form-layout/form-layout.component";
import { FormSectionComponent } from "./components/shared/form-layout/form-section/form-section.component";
import { FormUnitComponent } from "./components/shared/form-layout/form-unit/form-unit.component";
import { IconClipboardComponent } from "./components/shared/icons/icon-clipboard/icon-clipboard.component";
import { IconCogComponent } from "./components/shared/icons/icon-cog/icon-cog.component";
import { IconExclamationCircleComponent } from "./components/shared/icons/icon-exclamation-circle/icon-exclamation-circle.component";
import { IconXComponent } from "./components/shared/icons/icon-x/icon-x.component";
import { InputColorComponent } from "./components/shared/input/input-color/input-color.component";
import { InputFilenameComponent } from "./components/shared/input/input-filename/input-filename.component";
import { InputFontComponent } from "./components/shared/input/input-font/input-font.component";
import { InputNumberComponent } from "./components/shared/input/input-number/input-number.component";
import { InputRadioComponent } from "./components/shared/input/input-radio/input-radio.component";
import { InputTextComponent } from "./components/shared/input/input-text/input-text.component";
import { RangeListComponent } from "./components/shared/input/list/range-list/range-list.component";
import { LogoComponent } from "./components/shared/logo/logo.component";
import { ThumbnailComponent } from "./components/shared/thumbnail/thumbnail.component";
import { SplashComponent } from "./components/splash/splash.component";
import { UploaderComponent } from "./components/uploader/uploader.component";
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    UploaderComponent,
    NavbarComponent,
    IconCogComponent,
    LogoComponent,
    NavbarEffectsMenuComponent,
    NavbarEffectsComponent,
    SettingComponent,
    NavbarButtonComponent,
    NavbarFooterComponent,
    IconClipboardComponent,
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
    NavbarLinkComponent,
    InputFontComponent,
    IconXComponent,
    SplashComponent,
    RangeListComponent,
    FormHeaderComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    NgxDropzoneModule,
    FormsModule,
    RouterModule.forRoot([], { useHash: false }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
