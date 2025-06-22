import { Component, input } from '@angular/core'

import { Img } from './dashboard-item.model'

@Component({
  selector: 'app-dashboard-item',
  imports: [],
  templateUrl: './dashboard-item.html',
})
export class DashboardItem {
  img = input.required<Img>()
  title = input.required<string>()
}
