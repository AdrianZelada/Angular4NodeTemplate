import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';

// Routing Module
import { AppRoutingModule } from './app.routing';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';

// Sidebar

import {DynamicComponentsModule} from './dynamic-components/components.module'

import { AuthModule} from './security/auth.module';
import { SegurityService} from './security/auth.module.service';
import { MenuService} from './security/menu.service';
import { InterceptPath} from './security/intercept-path.service';

export function interceptFactory(menuService : MenuService){
  // return new InterceptPath(menuService ,(obj:any,action?:string) : boolean=>{
  return new InterceptPath(menuService ,(obj:any) : boolean=>{
    return obj.permission
  })
}

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    DynamicComponentsModule,
    AuthModule
  ],
  declarations: [
    AppComponent,
    FullLayoutComponent,
    SimpleLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  },
    MenuService,
    SegurityService,
    [{
      provide:InterceptPath,
      useFactory:interceptFactory,
      deps:[MenuService]
    }]
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
