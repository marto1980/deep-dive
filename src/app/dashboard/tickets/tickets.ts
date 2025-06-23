import { Component } from '@angular/core'

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.html',
})
export class Tickets {
  image = { src: 'list.png', alt: 'A list of items' }
  title = 'Support Tickets'
}
