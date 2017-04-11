import { Component, OnInit } from '@angular/core';

import { MenuService} from './security/menu.service'

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
        "path":".",
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
            "inMenu":true
          },
          {
            "path":"/components/social-buttons",
            "componentPath":"/components/social-buttons",
            "icon":"fa fa-bar-chart",
            "label":"Social Buttons",
            "permission":true,
            "inMenu":true

          }
        ]
      }
    ];
    setTimeout(()=>{
      this.menuService.setMenus(this.menus)
    },1000)

  }
}
