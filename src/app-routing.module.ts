import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SettingPageComponent } from "src/app/components/pages/setting-page/setting-page.component";
import { UploadPageComponent } from "src/app/components/pages/upload-page/upload-page.component";

const routes: Routes = [
  {
    path: "setting",
    component: SettingPageComponent,
  },
  {
    path: "",
    pathMatch: "full",
    component: UploadPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
