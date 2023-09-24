import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nuevo-login-screen',
  templateUrl: './nuevo-login-screen.component.html',
  styleUrls: ['./nuevo-login-screen.component.scss']
})
export class NuevoLoginScreenComponent implements OnInit {

  constructor(){ }
  
  ngOnInit() : void {  
  }

  public type: String = "password";
  public username: String = "";
  public password: String = "";

  public errors:any = {};
  

  public nuevologin(){
    if(this.username == ""){
      this.errors.username = "Campo requerido";
    }
    if(this.password == ""){
      this.errors.password = "Campo requerido";
    }
  }

  public showPassword(){
    if(this.type == "password"){
      this.type = "text";
    }else{
      this.type = "password";
    }
  }
}


