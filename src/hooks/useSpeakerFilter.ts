import { useState } from 'react';
import { IShowSessions } from '../types/IShowSessions';
import { IEventYear } from '../types/IEventYear';
import { ISearchQuery } from '../types/ISearchQuery';
import { ISpeakerFilter } from '../types/ISpeakerFilter';

export const useSpeakerFilter = (startingShowSessions: boolean, startingEventYear: string) => {

  const [showSessions, setShowSessions] = useState<boolean>(startingShowSessions);
  const [eventYear, setEventYear] = useState<string>(startingEventYear);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const EVENT_YEARS = [
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
  ];

  return {
    showSessions: { showSessions: showSessions, setShowSessions: (showSessions: boolean) => setShowSessions(showSessions) } as IShowSessions,
    eventYear: { eventYear: eventYear, setEventYear: (eventYear: string) => setEventYear(eventYear) } as IEventYear,
    searchQuery: { searchQuery: searchQuery, setSearchQuery: (searchQuery: string) => setSearchQuery(searchQuery) } as ISearchQuery,
    EVENT_YEARS: EVENT_YEARS
  } as ISpeakerFilter;
};
