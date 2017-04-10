/**
 * Created by iZel on 4/9/17.
 */
import { Injectable,Inject }     from '@angular/core';
import { CanActivate,Router,ActivatedRouteSnapshot, RouterStateSnapshot}    from '@angular/router';
import { MenuService} from './menu.service'

import {Auth} from './auth.service';

@Injectable()

export class AuthGuard implements CanActivate {

  constructor(private menuService:MenuService, private router: Router,private auth :Auth){
  // constructor(@Inject(MenuService) private menuService : MenuService, private router: Router,private auth :Auth){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    console.log(this.menuService)
    let status = this.menuService.viewPath(state.url);
    if(!status){
      this.router.navigate(['./pages/login']);
    }
    return status;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route,state);
  }
}
