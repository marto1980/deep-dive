import { Component } from '@angular/core'

import { Header } from './header/header'
import { ServerStatus } from './server-status/server-status'
import { SupportTickets } from './support-tickets/support-tickets'
import { Traffic } from './traffic/traffic'

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [Header, ServerStatus, Traffic, SupportTickets],
})
export class AppComponent {}
