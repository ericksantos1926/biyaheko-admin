import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadScript('../../../assets/js/script.js');
    this.loadScript('../../../assets/js/sidebar-menu.js');
    this.loadScript('../../../assets/js/dashboard/default.js');
    this.loadScript('../../../assets/js/custom-card/custom-card.js');
  }


  loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

  
}
