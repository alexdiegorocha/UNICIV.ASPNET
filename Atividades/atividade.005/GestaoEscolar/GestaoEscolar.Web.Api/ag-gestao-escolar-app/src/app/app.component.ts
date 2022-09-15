import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  menu: Boolean = true;
  title = 'escola';

  fecharMenu(){
    this.menu = !this.menu;
  }
}
