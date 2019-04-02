import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DemoCanvasDivPage } from '../demo-canvas/demo-canvas-div.page';
import { DemoCanvasModule } from '../demo-canvas/demo-canvas.module';
import { DemoCanvasIonContentPage } from '../demo-canvas/demo-canvas.page';
import { FooPagePage } from './foo-page.page';

const routes: Routes = [
  { path: '', component: FooPagePage },
  { path: 'canvas-ion-content-page', component: DemoCanvasIonContentPage },
  { path: 'canvas-div-page', component: DemoCanvasDivPage },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemoCanvasModule,
    RouterModule.forChild(routes),
  ],
  declarations: [FooPagePage]
})
export class FooPagePageModule {}
