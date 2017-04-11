import { Component, OnInit } from '@angular/core';

// import {menuService} from '../dynamic-components/sidebar/menu-sidebar.service'

import {MenuService} from '../security/menu.service'

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
    this.menuService.eventMenu.subscribe((data)=>{
      this.menus=data;
    })
  }
}
