import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { AuthService } from '../servicios/auth.service'
import { Router } from '@angular/router'



@Component({
  selector: 'app-index2',
  templateUrl: './index2.page.html',
  styleUrls: ['./index2.page.scss'],
})
export class Index2Page implements OnInit {
  constructor(public alertController: AlertController,
    private fauth: AuthService,
    private router: Router,

  ) { }
  @ViewChild('focus',{static: true}) myInput;

  correo: string;
  pass: string;
  password_type: string = 'password';
  login() {
    this.fauth.login(this.correo, this.pass).then(res => {
      this.router.navigate(['/indexconfirmacion']);
    }).catch(err => {
      this.fauth.ingresoinvalido()
    });
  }

  ngOnInit() {
    setTimeout(() => {
      this.myInput.setFocus();
    }, 150)
  }

  togglePasswordMode() {
    this.password_type = this.password_type === 'text' ? 'password' : 'text';
  }
}
