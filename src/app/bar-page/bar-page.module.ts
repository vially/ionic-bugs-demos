import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DemoCanvasModule } from '../demo-canvas/demo-canvas.module';
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
    DemoCanvasModule,
    RouterModule.forChild(routes),
  ],
  declarations: [BarPagePage]
})
export class BarPagePageModule {}