import { Component, OnInit } from '@angular/core';

// import {menuService} from '../dynamic-components/sidebar/menu-sidebar.service'

import {MenuService} from '../segurity/menu.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {

  menus:any[]=[];
  constructor(private menuService : MenuService){}

  public disabled: boolean = false;
  public status: {isopen: boolean} = {isopen: false};

  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  ngOnInit(): void {

    //
    // this.menus=[
    //   {
    //     path:'/dashboard',
    //     icon:'fa fa-home',
    //     label:'Dashboard',
    //   },
    //   {
    //     path:'/suma',
    //     icon:'fa fa-th-large',
    //     label:'Suma',
    //     children:[
    //       {
    //         path:'/suma/registroDEX',
    //         icon:'fa fa-home',
    //         label:'registroDEX'
    //       },
    //       {
    //         path:'/suma/envioTIF',
    //         icon:'fa fa-bar-chart',
    //         label:'envioTIF'
    //       },
    //     ]
    //   },
    // ];
    this.menuService.eventMenu.subscribe((data)=>{
      this.menus=data;
    })
  }
}
