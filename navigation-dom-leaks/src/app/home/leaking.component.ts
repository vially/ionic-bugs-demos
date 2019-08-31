import { Component } from '@angular/core';

@Component({
  template: '<ion-content>Navigating to this page is leaking DOM nodes</ion-content>'
})
export class LeakingPageComponent { }
