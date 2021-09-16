import React,  { createContext } from 'react';
import { useSpeakerFilter } from '../hooks/useSpeakerFilter';
import { ISpeakerFilter } from '../types/ISpeakerFilter';

export const SpeakerFilterContext = createContext<ISpeakerFilter>({} as ISpeakerFilter);

export const SpeakerFilterProvider = ({
  children,
  startingEventYear,
  startingShowSessions = false
}: {
  children: any,
  startingEventYear: string,
  startingShowSessions: boolean
}) => {

  const speakerFilter = useSpeakerFilter(startingShowSessions, startingEventYear);

  return (
    <SpeakerFilterContext.Provider
      value={speakerFilter}
    >
      {children}
    </SpeakerFilterContext.Provider>
  );
}
