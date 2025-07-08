import { Component, HostBinding, input, ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.scss',
  encapsulation: ViewEncapsulation.None,
})
export class Control {
  @HostBinding('class') className = 'control'
  label = input.required<string>()
}
