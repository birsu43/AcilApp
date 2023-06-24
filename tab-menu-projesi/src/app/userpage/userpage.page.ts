import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.page.html',
  styleUrls: ['./userpage.page.scss'],
})
export class UserpagePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  logMeIn(){
    this.router.navigate(['/login']);
   }
   logMeIn2(){
    this.router.navigate(['/signup']);
   }
}
