import React,  { createContext } from 'react';
import { useSpeakerFilter } from '../hooks/useSpeakerFilter';
import { IShowSessions } from '../types/IShowSessions';

export const SpeakerFilterContext = createContext<IShowSessions>({showSessions: false, setShowSessions: () => {}});

export const SpeakerFilterProvider = ({
  children,
  startingShowSessions = false
}: {
  children: any,
  startingShowSessions: boolean
}) => {

  const showSessions = useSpeakerFilter(startingShowSessions);

  return (
    <SpeakerFilterContext.Provider
      value={showSessions}
    >
      {children}
    </SpeakerFilterContext.Provider>
  );
}
