import {
  Component,
  HostListener,
  input,
  ViewEncapsulation,
} from '@angular/core'

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.scss',
  encapsulation: ViewEncapsulation.None,
  host: { class: 'control' },
})
export class Control {
  label = input.required<string>()
  @HostListener('click')
  onClick = () => {
    console.log('Control clicked')
  }
}
