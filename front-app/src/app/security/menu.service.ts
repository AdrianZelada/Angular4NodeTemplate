/**
 * Created by iZel on 4/9/17.
 */
import {Injectable,EventEmitter} from "@angular/core";

@Injectable()
export class MenuService{
  private menus : any[]=[];

  eventMenu:EventEmitter<any>=new EventEmitter();

  constructor(){
  }

  getMenus(){
    return this.menus;
  }

  setMenus(data){
    this.menus=data;
    this.eventMenu.emit(this.menus)
  }
}
