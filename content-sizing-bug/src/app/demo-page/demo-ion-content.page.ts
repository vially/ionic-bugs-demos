import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-ion-content-page',
  template: `
    <ion-content>
      <h1>Material sidenav inside ion-content</h1>
      <mat-sidenav-container>
        <mat-sidenav mode="side" opened style="background-color: rgba(0,0,0,0.2)">Sidenav content</mat-sidenav>
        <mat-sidenav-content style="background-color: red">Main content</mat-sidenav-content>
      </mat-sidenav-container>
      <a routerLink="/sidenav-inside-div">Show sidenav inside plain div</a>
    </ion-content>
  `
})
export class DemoIonContentPage {}
