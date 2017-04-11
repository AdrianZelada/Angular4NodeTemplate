/**
 * Created by iZel on 4/10/17.
 */
import {Injectable} from "@angular/core";
import {MenuService} from "./menu.service";

@Injectable()
export class InterceptPath{

  constructor(public menuService:MenuService,private callback :(obj:any,action?:string) => void ){}

  _getModule(menu:any[],path : String,ind:number=0){
    if(menu.length > ind){
      if(menu[ind].componentPath==path){
        return menu[ind]
      }else{
        if(menu[ind].children){
          return this._getModule(menu[ind].children, path, 0);
        }else{
          return this._getModule(menu, path, ind+1);
        }
      }
    }else{
      return {}
    }
  }

  viewPath(path : string){
    let status=true;
    if(this.menuService.getMenus().length>0){
      let states=this._getModule(this.menuService.getMenus(),path,0);
      status=states.componentPath==path;
    }else{
      console.log('sin menu')
    }
    return status;
  }

  getStatePath(path : string){
    return this._getModule(this.menuService.getMenus(),path,0);
  }

  validPath(objPath : any,action?:string){
    return this.callback(objPath,action);
  }
}
