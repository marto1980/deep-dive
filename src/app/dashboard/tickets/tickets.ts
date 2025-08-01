import { Component } from '@angular/core'

import { NewTicket } from './new-ticket/new-ticket'
import { TicketData } from './new-ticket/new-ticket.model'
import { Ticket as TicketComponent } from './ticket/ticket'
import { TicketModel } from './ticket/ticket.model'

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.html',
  imports: [NewTicket, TicketComponent],
  styleUrl: './tickets.scss',
})
export class Tickets {
  tickets: TicketModel[] = []
  image = { src: 'list.png', alt: 'A list of items' }
  title = 'Support Tickets'
  onAdd(ticketData: TicketData) {
    const newTicket: TicketModel = {
      id: crypto.randomUUID(),
      title: ticketData.title,
      request: ticketData.request ?? '',
      status: 'open',
    }

    this.tickets = [...this.tickets, newTicket]
  }
}
