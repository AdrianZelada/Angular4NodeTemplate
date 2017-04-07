/**
 * Created by iZel on 4/4/17.
 */
import {Injectable,EventEmitter} from "@angular/core";
@Injectable()
export class menuService{
  private menus : any[]=[];
  eventMenu:EventEmitter<any>=new EventEmitter();
  constructor(){}

  getMenus(){
    return this.menus;
  }

  setMenus(data){
    this.menus=data;
    this.eventMenu.emit(this.menus)
  }

}
