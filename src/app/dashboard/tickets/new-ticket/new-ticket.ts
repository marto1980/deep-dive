import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core'
import { FormsModule } from '@angular/forms'

import { Button } from '../../../shared/button/button'
import { Control } from '../../../shared/control/control'

@Component({
  selector: 'app-new-ticket',
  imports: [Button, Control, FormsModule],
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.scss',
})
export class NewTicket implements OnInit, AfterViewInit {
  @ViewChild('form') form?: ElementRef<HTMLFormElement>
  // private readonly form =
  //   viewChild.required<ElementRef<HTMLFormElement>>('form')
  ngOnInit() {
    console.log('ON INIT')
    console.log(this.form?.nativeElement)
  }

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT')
    console.log(this.form?.nativeElement)
  }

  onSubmit(title: string, ticketText: string) {
    this.form?.nativeElement.reset()
    console.log('title', title)
    console.log('ticketText', ticketText)
  }
}
