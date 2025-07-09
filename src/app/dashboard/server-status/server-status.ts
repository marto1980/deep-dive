import { isPlatformBrowser } from '@angular/common'
import {
  Component,
  inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core'

@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.html',
  styleUrl: './server-status.scss',
})
export class ServerStatus implements OnInit, OnDestroy {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline'
  private intervalId?: ReturnType<typeof setInterval>
  private readonly platformId = inject(PLATFORM_ID)

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.intervalId = setInterval(() => {
        // eslint-disable-next-line sonarjs/pseudo-random
        const rnd = Math.random()
        if (rnd < 0.5) {
          this.currentStatus = 'online'
        } else if (rnd < 0.9) {
          this.currentStatus = 'offline'
        } else {
          this.currentStatus = 'unknown'
        }
      }, 5000)
    }
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId)
    }
  }
}
