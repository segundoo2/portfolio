import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: false,
  
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  toggleMenu() {
    const menu = document.querySelector('#menu-navigation') as HTMLElement;
    if (menu) {
      menu.style.display = menu.style.display === 'none' ? 'flex' : 'none';
    }
  }
}
