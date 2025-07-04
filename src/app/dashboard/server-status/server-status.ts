import { Component } from '@angular/core'

@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.html',
  styleUrl: './server-status.scss',
})
export class ServerStatus {
  currentStatus = 'online'
}
