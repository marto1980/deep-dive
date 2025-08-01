import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  output,
  ViewChild,
} from '@angular/core'
import { FormsModule } from '@angular/forms'

import { Button } from '../../../shared/button/button'
import { Control } from '../../../shared/control/control'
import { TicketData } from './new-ticket.model'

@Component({
  selector: 'app-new-ticket',
  imports: [Button, Control, FormsModule],
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.scss',
})
export class NewTicket implements OnInit, AfterViewInit {
  @ViewChild('form') form?: ElementRef<HTMLFormElement>
  add = output<TicketData>()
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
    const ticketData: TicketData = { title, request: ticketText }
    this.add.emit(ticketData)
    console.log('title', title)
    console.log('ticketText', ticketText)
  }
}
