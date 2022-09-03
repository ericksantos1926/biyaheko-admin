import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) { }

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

  loginpage(){
    this.router.navigate([
      '',
    ]);
  }

}
