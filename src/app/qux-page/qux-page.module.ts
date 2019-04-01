import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DemoCanvasModule } from '../demo-canvas/demo-canvas.module';
import { QuxPagePage } from './qux-page.page';

const routes: Routes = [
  {
    path: '',
    component: QuxPagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemoCanvasModule,
    RouterModule.forChild(routes)
  ],
  declarations: [QuxPagePage]
})
export class QuxPagePageModule {}
