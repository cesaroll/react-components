import { ISession } from './ISession';

export interface ISpeaker {
  id: string,
  first: string,
  last: string,
  company: string,
  bio: string,
  twitterHandle: string,
  favorite: boolean,
  sessions: ISession[]
}
