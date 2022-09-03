import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    // this.loadScript('../../../../assets/js/bootstrap/popper.min.js');
    // this.loadScript('../../../../assets/js/bootstrap.min.js');

    this.loadScript('../../../../assets/js/script.js');
    this.loadScript('../../../../assets/js/sidebar-menu.js');
    this.loadScript('../../../../assets/js/dashboard/default.js');
    this.loadScript('../../../../assets/js/custom-card/custom-card.js');
    this.loadScript('../../../../assets/js/form-wizard/form-wizard-three.js');
    this.loadScript('../../../../assets/js/form-wizard/jquery.backstretch.min.js');
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

  // ionViewWillEnter(){

  // }
}
