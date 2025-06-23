import { Component } from '@angular/core'

import { DashboardItem } from '../dashboard-item/dashboard-item'

@Component({
  selector: 'app-tickets',
  imports: [DashboardItem],
  templateUrl: './tickets.html',
})
export class Tickets {
  image = { src: 'list.png', alt: 'A list of items' }
  title = 'Support Tickets'
}
