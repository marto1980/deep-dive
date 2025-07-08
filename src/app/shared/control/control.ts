import {
  Component,
  ElementRef,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core'

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.scss',
  encapsulation: ViewEncapsulation.None,
  host: { class: 'control', '(click)': 'onClick()' },
})
export class Control {
  label = input.required<string>()
  el = inject(ElementRef)
  onClick() {
    console.log('Control clicked')
    console.log(this.el)
  }
}
