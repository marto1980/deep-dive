import { Component, ElementRef, ViewChild } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { Button } from '../../../shared/button/button'
import { Control } from '../../../shared/control/control'

@Component({
  selector: 'app-new-ticket',
  imports: [Button, Control, FormsModule],
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.scss',
})
export class NewTicket {
  @ViewChild('form') form?: ElementRef<HTMLFormElement>
  onSubmit(title: string, ticketText: string) {
    this.form?.nativeElement.reset()
    console.log('title', title)
    console.log('ticketText', ticketText)
  }
}
