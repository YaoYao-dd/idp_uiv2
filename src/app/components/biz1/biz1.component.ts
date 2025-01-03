import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-biz1',
  standalone: true,
  imports: [],
  templateUrl: './biz1.component.html',
  styleUrl: './biz1.component.scss'
})
export class Biz1Component {
  @Input()
  pageInput1: string=""

  @Input()
  b1id: string=""
}
