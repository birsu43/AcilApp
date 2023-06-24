import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-baslangic',
  templateUrl: './baslangic.page.html',
  styleUrls: ['./baslangic.page.scss'],
})
export class BaslangicPage implements OnInit {


  constructor(private router:Router) { }

  ngOnInit() {
  }
sorular(){
  this.router.navigate(['/soru1']);
}
}
