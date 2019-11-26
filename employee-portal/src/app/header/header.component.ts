import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isUserLoggedIn:Boolean = false;
  constructor(private router:Router,private basicAuthenticationService:BasicAuthenticationService) { }

  ngOnInit() {
      this.isUserLoggedIn=this.basicAuthenticationService.isUserLoggedIn()

  }

  handleLogOut(){
    this.router.navigate(['logout']);
  }

}
