import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DemoCanvasIonContentPage } from '../demo-canvas/demo-canvas.page';

@Component({
  selector: 'app-foo-page',
  templateUrl: './foo-page.page.html',
})
export class FooPagePage {
  constructor(private modalCtrl: ModalController) {}

  async openCanvasModal() {
    const modal = await this.modalCtrl.create({
      component: DemoCanvasIonContentPage,
      componentProps: {isModal: true},
      animated: false
    });
    modal.present();
  }
}
