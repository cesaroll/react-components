import { IEventYear } from './IEventYear';
import { IShowSessions } from './IShowSessions';
import { ISearchQuery } from './ISearchQuery';

export interface ISpeakerFilter {
  showSessions: IShowSessions,
  eventYear: IEventYear,
  searchQuery: ISearchQuery,
  EVENT_YEARS: string[]
}
