/**
 * Created by iZel on 4/6/17.
 */
/**
 * Created by iZel on 4/4/17.
 */
import {Component,Input,OnInit,ElementRef} from "@angular/core";
@Component({
  selector:'[menu-sidebar]',
  templateUrl:'menu-sidebar.component.html'
})

export class MenuSidebarComponent implements OnInit{
  @Input('menu') menuItem :any;
  @Input() isParent :boolean;
  constructor(private el:ElementRef){
  }

  ngOnInit(){
    console.log(this.isParent)
  }

  open(e){
    this.el.nativeElement.classList.toggle('open');
    e.stopPropagation();
  }
}
