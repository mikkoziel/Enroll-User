import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  modelForm: FormGroup;
  currentUser: User = null; 

  constructor(
    private formBuilder : FormBuilder,
    // private authService: AuthService,
    // private wycieczkiService: WycieczkiServiceService,
    // private dbService: DbService
    ) { }

  ngOnInit(): void {
    // this.getUser();
    this.modelForm = this.formBuilder.group({
      mail: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  getUser(): void{
    // this.authService.getUserObs()
    // .subscribe((x: any)=> {
    //   console.log(x);
    //   this.assignAndEmmitUser(x);
    // });
  }

  assignAndEmmitUser(x:any){
    // if(x){
    //   this.user = x.mail;
    // }else{
    //   this.user = null;
    // }
    // this.userEmitter.next(this.user);
  }

  login(){
    // this.authService.login(this.mail, this.password)
  }

  logout(){
    // this.authService.logout()
  }
}
