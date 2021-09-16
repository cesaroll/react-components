export interface ISession {
  id: string,
  title: string,
  eventYear: string,
  room : IRoom
}

export interface IRoom {
  name: string,
  capacity: number
}
