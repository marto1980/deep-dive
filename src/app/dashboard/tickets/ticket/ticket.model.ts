type TicketStatus = 'open' | 'close'

type TicketModel = {
  id: string
  title: string
  request: string
  status: TicketStatus
}

export type { TicketModel }
