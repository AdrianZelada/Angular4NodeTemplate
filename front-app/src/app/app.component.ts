import { Component, OnInit } from '@angular/core';

import { MenuService} from './segurity/menu.service'

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit{

  menus:any[]=[];
  constructor(private menuService : MenuService){

  }

  ngOnInit(){
    this.menus=[
      {
        "path":"/dashboard",
        "icon":"fa fa-home",
        "componentPath":"/dashboard",
        "label":"Dashboard",
        "inMenu":true
      },
      {
        "path":"/",
        "icon":"fa fa-th-large",
        "componentPath":"/components",
        "label":"Components",
        "permission":true,
        "inMenu":true,
        "children":[
          {
            "path":"/components/buttons",
            "componentPath":"/components/buttons",
            "icon":"fa fa-home",
            "label":"Buttons",
            "permission":false,
            "inMenu":false
          },
          {
            "path":"/components/social-buttons",
            "componentPath":"/components/social-buttons",
            "icon":"fa fa-bar-chart",
            "label":"Social Buttons",
            "permission":true,
            "inMenu":false
          }
        ]
      }
    ];
    setTimeout(()=>{
      this.menuService.setMenus(this.menus)
    },1000)

  }
}
