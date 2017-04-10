/**
 * Created by iZel on 4/4/17.
 */
import {Component,ElementRef,OnInit, Input, Inject} from "@angular/core";
import {Location} from '@angular/common';
import { MenuService} from './menu.service'

@Component({
  selector:'[auth]',
  template:'<ng-content></ng-content>'

})

export class AuthDirective implements OnInit{
  @Input() path? :string;
  @Input() action? :string;
  constructor(public el:ElementRef , public menuService:MenuService,public location:Location){
  // constructor(private el:ElementRef ,  @Inject(MenuService) private menuService:MenuService ,private location:Location){
  }

  ngOnInit(){
    let path=this.path ? this.path : this.location.path();
    let authDirec =this.menuService.getStatePath(path);

    if(!this.menuService.validPath(authDirec,this.action)){
      this.el.nativeElement.remove();
    }
  }
}

@Component({
  selector:'[auth-save]',
  template:'<ng-content></ng-content>'
})

export class AuthDirectiveSave extends AuthDirective implements OnInit{

  action:string='save';

  constructor(public el:ElementRef , public menuService:MenuService,public location:Location){
    super(el,menuService,location);
  }
  ngOnInit(){
    super.ngOnInit()
  }
}
