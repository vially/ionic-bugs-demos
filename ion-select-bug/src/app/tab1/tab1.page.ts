import { Component } from '@angular/core'
import { Observable, of } from 'rxjs'
import { delay, startWith } from 'rxjs/operators'

interface Option {
  label: string
  selected: boolean
}

const demoOptions: Option[] = [
  {
    label: 'Foo',
    selected: true
  },
  {
    label: 'Bar',
    selected: false
  }
]

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  brokenOptions$: Observable<Option[]>
  workingOptions$: Observable<Option[]>

  constructor() {
    this.workingOptions$ = of(demoOptions)
    this.brokenOptions$ = of(demoOptions).pipe(
      delay(500),
      startWith([])
    )
  }
}
