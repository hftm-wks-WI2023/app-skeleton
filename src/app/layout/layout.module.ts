import {NgModule} from '@angular/core';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {SharedModule} from "../shared/shared.module";
import {SideBarComponent} from './nav-bar/side-bar/side-bar.component';
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    NavBarComponent,
    SideBarComponent
  ],
  exports: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class LayoutModule {
}
