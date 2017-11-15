import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <div>
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <a class="navbar-brand">{{pageTitle}}</a>
          <ul class="nav navbar-nav">
            <li [routerLink] = "['/welcome']" ><a>Home</a></li>
            <li [routerLink] = "['/products']"><a>Product List</a></li>
          </ul>
        </div>
      </nav>
      <div class="container">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
