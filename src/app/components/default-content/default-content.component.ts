import { Component } from '@angular/core';
import {MatStepperModule} from '@angular/material/stepper';
@Component({
  selector: 'app-default-content',
  standalone: true,
  imports: [MatStepperModule,],
  templateUrl: './default-content.component.html',
  styleUrl: './default-content.component.scss'
})
export class DefaultContentComponent {

}
