import { Component, input, signal } from '@angular/core'

import { TicketModel } from './ticket.model'

@Component({
  selector: 'app-ticket',
  imports: [],
  templateUrl: './ticket.html',
  styleUrl: './ticket.scss',
})
export class Ticket {
  data = input.required<TicketModel>()
  isDetailsVisible = signal(false)
  onToggleDetails() {
    this.isDetailsVisible.update((wasClosed: boolean) => !wasClosed)
  }
}
