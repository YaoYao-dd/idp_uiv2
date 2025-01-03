import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-framework',
  standalone: true,
  imports: [SidebarComponent, HeaderComponent],
  templateUrl: './framework.component.html',
  styleUrl: './framework.component.scss'
})
export class FrameworkComponent {

  sideBarOpened=true;
  menuBtnTriggered() {
    this.sideBarOpened=!this.sideBarOpened;
    
  }

}
