import { useState } from 'react';
import { IShowSessions } from '../types/IShowSessions';

export const useSpeakerFilter = (startingShowSessions: boolean): IShowSessions => {

  const [showSessions, setShowSessions] = useState<boolean>(startingShowSessions);

  const validateShowSessions = (showSessions: boolean) => {
    setShowSessions(showSessions);
  }

  return {
    showSessions: showSessions,
    setShowSessions: validateShowSessions
  };
};
