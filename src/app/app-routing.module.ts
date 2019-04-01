import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './foo-page/foo-page.module#FooPagePageModule' },
  { path: 'canvas-ion-content-page', loadChildren: './bar-page/bar-page.module#BarPagePageModule' },
  { path: 'canvas-div-page', loadChildren: './qux-page/qux-page.module#QuxPagePageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
