import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavigationEnd, Route, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule,
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule

  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  @Output("menuBtnTriggered")
  menuBtnTriggered = new EventEmitter<void>();

  currentRouter: string=""

  constructor(private router: Router){}
  ngOnInit(){
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe({
      next: x=>this.currentRouter=x.toString()
    });
    
  }

  menuBtn_clicked() {
    this.menuBtnTriggered.emit();
    return false;
  }
}
