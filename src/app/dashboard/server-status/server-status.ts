import { isPlatformBrowser } from '@angular/common'
import {
  AfterViewInit,
  Component,
  DestroyRef,
  inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core'

@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.html',
  styleUrl: './server-status.scss',
})
export class ServerStatus implements OnInit, AfterViewInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline'
  private readonly platformId = inject(PLATFORM_ID)
  private readonly destroyRef = inject(DestroyRef)

  ngOnInit() {
    console.log('ON INIT')
    if (isPlatformBrowser(this.platformId)) {
      const interval = setInterval(() => {
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
      this.destroyRef.onDestroy(() => {
        console.log('DESTROY')
        clearInterval(interval)
      })
    }
  }

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT')
  }
}
