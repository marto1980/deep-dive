import { Component } from '@angular/core'
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
  onSubmit(inputElement: Readonly<HTMLInputElement>) {
    console.log('FORM SUBMITTED!')
    console.log('input element', inputElement)
    console.dir(inputElement)
    console.log('Entered title:', inputElement.value)
  }
}
