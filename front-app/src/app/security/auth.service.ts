
/**
 * Created by iZel on 4/9/17.
 */
import {Injectable,EventEmitter} from "@angular/core";

@Injectable()
export class Auth{

  eventIsLogin:EventEmitter<any>=new EventEmitter();

  eventCurrentUser:EventEmitter<any>=new EventEmitter();

  user:any=undefined;

  constructor(){
    let user = localStorage.getItem('user');
    if(user){
      this.login(JSON.parse(user))
    }
  }

  isLogin(){
    return this.user != undefined;
  }

  getUser(){
    return this.user;
  }

  login(user:any){
    localStorage.setItem('user',JSON.stringify(user));
    this.user=user;
    this.eventCurrentUser.emit(this.user);
    this.eventIsLogin.emit(true);
  }

  logout(){
    localStorage.removeItem('user');
    this.user=undefined;
    this.eventCurrentUser.emit(this.user);
    this.eventIsLogin.emit(false);
  }
}
