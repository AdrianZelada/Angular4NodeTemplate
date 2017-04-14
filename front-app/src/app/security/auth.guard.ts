/**
 * Created by iZel on 4/9/17.
 */
import { Injectable,Inject }     from '@angular/core';
import { CanActivate,Router,ActivatedRouteSnapshot, RouterStateSnapshot}    from '@angular/router';
import { MenuService} from './menu.service';
import { InterceptPath} from './intercept-path.service'

import {Auth} from './auth.service';

@Injectable()

export class AuthGuard implements CanActivate {

  constructor(private interceptPath:InterceptPath, private router: Router,private auth :Auth){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    let status = this.interceptPath.viewPath(state.url);
    if(!status){
      this.router.navigate(['./pages/login']);
    }
    return status;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route,state);
  }
}
