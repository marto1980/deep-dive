import { Component, input } from '@angular/core'

import { TicketModel } from './ticket.model'

@Component({
  selector: 'app-ticket',
  imports: [],
  templateUrl: './ticket.html',
  styleUrl: './ticket.scss',
})
export class Ticket {
  data = input.required<TicketModel>()
}
