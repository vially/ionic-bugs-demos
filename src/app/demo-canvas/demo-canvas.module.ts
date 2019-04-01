import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DemoCanvasComponent } from './demo-canvas.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [DemoCanvasComponent],
  exports: [DemoCanvasComponent]
})
export class DemoCanvasModule {}
