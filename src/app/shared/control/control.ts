import { Component, input } from '@angular/core'

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
})
export class Control {
  label = input.required<string>()
}
