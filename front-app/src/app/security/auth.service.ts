/**
 * Created by iZel on 4/9/17.
 */
import {Injectable} from "@angular/core";
@Injectable()
export class Auth{
  currentState:any={};

  constructor(){}

  getState(){
    return this.currentState;
  }

  setState(state){
    this.currentState=state
  }
}
