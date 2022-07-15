import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private ser: ServService,private router: Router) {
 
  }
login(){
  this.ser.login(this.email, this.password).subscribe(
    (token) => {
      this.ser.guardarStorage(token.token);
      if(token.ok){
        this.router.navigate(['/grafico']);
      }
    },
    (err) => {}
  );
}
  ngOnInit(): void {}
}
