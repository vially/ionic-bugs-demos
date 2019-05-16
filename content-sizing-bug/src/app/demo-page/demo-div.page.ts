import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-div-page',
  template: `
    <div>
      <h1>Material sidenav inside plain div</h1>
      <mat-sidenav-container>
        <mat-sidenav mode="side" opened style="background-color: rgba(0,0,0,0.2)">Sidenav content</mat-sidenav>
        <mat-sidenav-content style="background-color: red">Main content</mat-sidenav-content>
      </mat-sidenav-container>
      <a routerLink="/">Show sidenav inside ion-content</a>
    </div>
  `
})
export class DemoDivPage {}
