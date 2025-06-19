import { Component } from '@angular/core'

import { ServerStatus } from './dashboard/server-status/server-status'
import { Tickets } from './dashboard/tickets/tickets'
import { Traffic } from './dashboard/traffic/traffic'
import { Header } from './header/header'

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [Header, ServerStatus, Traffic, Tickets],
})
export class AppComponent {}
