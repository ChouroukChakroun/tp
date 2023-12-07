import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/mission-list', title: 'Mission List',  icon:'content_paste', class: '' },
    { path: '/maintenance-list', title: 'Maintenance List',  icon:'content_paste', class: '' },
    { path: '/vehicle-list', title: 'vehicle List',  icon:'directions_car', class: '' },
    { path: '/model-list', title: 'Model List',  icon:'view_list', class: '' },
    { path: '/icons', title: 'reports',  icon:'bubble_chart', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
