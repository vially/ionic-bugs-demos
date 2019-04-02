import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-demo-canvas-page',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>canvas inside ion-content demo</ion-title>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/" *ngIf="!isModal"></ion-back-button>
          <ion-button (click)="modalCtrl.dismiss()" *ngIf="isModal">Close</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <app-demo-canvas></app-demo-canvas>
    </ion-content>
  `
})
export class DemoCanvasIonContentPage {
    constructor(protected modalCtrl: ModalController) {}

    @Input() isModal = false;
}
