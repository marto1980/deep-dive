import { Component } from '@angular/core'

import { DashboardItem } from '../dashboard-item/dashboard-item'

@Component({
  selector: 'app-server-status',
  imports: [DashboardItem],
  templateUrl: './server-status.html',
})
export class ServerStatus {
  currentStatus = 'online'
  image = { src: 'status.png', alt: 'A signal symbol' }
  title = 'Server Status'
}
