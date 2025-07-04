import { Component } from '@angular/core'

import { NewTicket } from './new-ticket/new-ticket'

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.html',
  imports: [NewTicket],
  styleUrl: './tickets.scss',
})
export class Tickets {
  image = { src: 'list.png', alt: 'A list of items' }
  title = 'Support Tickets'
}
