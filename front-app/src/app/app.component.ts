import { Component, OnInit } from '@angular/core';
import {menuService} from './dynamic-components/sidebar/menu-sidebar.service'

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit{

  menus:any[]=[];
  constructor(private poolM : menuService){

  }

  ngOnInit(){
    this.menus=[
      {
        path:'/dashboard',
        icon:'fa fa-home',
        label:'Dashboard',
      },
      {
        path:'/components',
        icon:'fa fa-th-large',
        label:'Components',
        children:[
          {
            path:'/components/buttons',
            icon:'fa fa-home',
            label:'Buttons'
          },
          {
            path:'/components/social-buttons',
            icon:'fa fa-bar-chart',
            label:'Social Buttons'
          },
        ]
      },
    ];
    setTimeout(()=>{
      this.poolM.setMenus(this.menus)
    },1000)

  }
}
