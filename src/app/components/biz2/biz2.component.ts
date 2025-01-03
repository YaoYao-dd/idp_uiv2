import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-biz2',
  standalone: true,
  imports: [],
  templateUrl: './biz2.component.html',
  styleUrl: './biz2.component.scss'
})
export class Biz2Component implements OnInit{
  pageInput1: string | null=null;
  paramFoo: string | null=null;
 

  constructor(private route: ActivatedRoute){}
  ngOnInit(): void {
    this.pageInput1 = this.route.snapshot.queryParams['pageInput1'];
    this.paramFoo = this.route.snapshot.paramMap.get("foo");
  }


}
