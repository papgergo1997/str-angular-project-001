import { Injectable } from '@angular/core';

export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  appName: string = 'Nyolcas Terminál';

  menuItems: IMenuItem[] = [
    { text: 'Home', link: '/', icon: 'home' },
    { text: 'Külföldi utak', link: '/cat01' },
    { text: 'Belföldi utak', link: '/cat02' },
  ];

  constructor() { }
}
