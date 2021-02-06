import { Injectable } from '@angular/core';

export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
}

export interface ITableHead {
  key: string;
  text: string;
  editable?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  appName: string = 'Nyolcas Terminál';

  menuItems: IMenuItem[] = [
    { text: 'Home', link: '/', icon: 'home' },
    { text: 'Külföldi utak', link: '/kulfoldi-utak' },
    { text: 'Belföldi utak', link: '/belfoldi-utak' },
    { text: 'Kapcsolat', link: '/kapcsolat' },
    { text: 'Admin', link: '/admin' },
  ];

  tableHead: ITableHead[] = [
    {key: 'id', text: '#', editable: false},
    {key: 'catId', text: 'CatId', editable: false},
    {key: 'name', text: 'Name', editable: true},
    {key: 'description', text: 'Description', editable: true},
    {key: 'image', text: 'Image', editable: true},
    {key: 'salesPrice', text: 'SalesPrice', editable: true},
    {key: 'stock', text: 'Stock', editable: true},
    {key: 'featured', text: 'Featured', editable: true},
    {key: 'featured2', text: 'Featured2', editable: true},
    {key: 'active', text: 'Active', editable: true},
  ];

  constructor() { }
}
