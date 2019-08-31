import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { LeakingPageComponent } from './leaking.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }, {
        path: 'leaking',
        component: LeakingPageComponent
      }
    ])
  ],
  declarations: [HomePage, LeakingPageComponent]
})
export class HomePageModule { }
