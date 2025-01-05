import {Component, ViewChild} from '@angular/core';
import {Sidebar} from "primeng/sidebar";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  sidebarVisible: boolean = false;
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  closeCallback(e: MouseEvent): void {
    this.sidebarRef.close(e);
  }

  toggle() {
    this.sidebarVisible = !!this.sidebarRef
  }
}
