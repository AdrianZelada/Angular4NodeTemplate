/**
 * Created by iZel on 4/4/17.
 */
import {Component,ElementRef,OnInit, Input} from "@angular/core";
import {Location} from '@angular/common';
import { InterceptPath} from './intercept-path.service';

@Component({
  selector:'[auth]',
  template:'<ng-content></ng-content>'

})

export class AuthDirective implements OnInit{
  @Input() path? :string;
  @Input() action? :string;
  constructor(public el:ElementRef , public interceptPath:InterceptPath,public location:Location){}

  ngOnInit(){
    let path=this.path ? this.path : this.location.path();
    let authDirec =this.interceptPath.getStatePath(path);

    if(!this.interceptPath.validPath(authDirec,this.action)){
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

  constructor(public el:ElementRef , public interceptPath:InterceptPath,public location:Location){
    super(el,interceptPath,location);
  }
  ngOnInit(){
    super.ngOnInit()
  }
}
