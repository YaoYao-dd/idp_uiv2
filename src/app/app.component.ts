import { Component } from '@angular/core';
import { FrameworkComponent } from "./components/mainframework/framework.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FrameworkComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'idp_uiv2';
}
