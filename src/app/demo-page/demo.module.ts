import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DemoCanvasModule } from '../demo-canvas/demo-canvas.module';
import { DemoDivPage } from './demo-div.page';
import { DemoIonContentPage } from './demo-ion-content.page';

const routes: Routes = [
  { path: '', component: DemoIonContentPage },
  { path: 'sidenav-inside-div', component: DemoDivPage },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatSidenavModule,
    DemoCanvasModule,
    RouterModule.forChild(routes),
  ],
  declarations: [DemoIonContentPage, DemoDivPage]
})
export class FooPagePageModule {}
