import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DemoCanvasDivPage } from './demo-canvas-div.page';
import { DemoCanvasComponent } from './demo-canvas.component';
import { DemoCanvasIonContentPage } from './demo-canvas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [DemoCanvasComponent, DemoCanvasIonContentPage, DemoCanvasDivPage],
  entryComponents: [DemoCanvasIonContentPage],
  exports: [DemoCanvasComponent]
})
export class DemoCanvasModule {}
