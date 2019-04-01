import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DemoCanvasComponent } from '../demo-canvas/demo-canvas.component';
import { BarPagePage } from './bar-page.page';

const routes: Routes = [
  {
    path: '',
    component: BarPagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BarPagePage, DemoCanvasComponent]
})
export class BarPagePageModule {}
