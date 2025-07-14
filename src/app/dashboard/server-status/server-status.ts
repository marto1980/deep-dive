import { isPlatformBrowser } from '@angular/common'
import {
  AfterViewInit,
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
export class ServerStatus implements OnInit, OnDestroy, AfterViewInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline'
  private interval?: NodeJS.Timeout
  private readonly platformId = inject(PLATFORM_ID)

  ngOnInit() {
    console.log('ON INIT')
    if (isPlatformBrowser(this.platformId)) {
      this.interval = setInterval(() => {
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

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT')
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval)
    }
  }
}
