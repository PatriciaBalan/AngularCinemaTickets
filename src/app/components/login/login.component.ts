import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    

    username:string;
    password:string;

    constructor(
        private http: HttpClient,
        private router:Router) {
        
    }

    ngOnInit(): void {

    }

    login() {
        if(this.username=="admin" && this.password =="pass1") {
          this.router.navigate[("/movies")]
        }
         else{
          alert("Please enter valid details");
        }
    }

}