import { createContext } from "react"
import { ISpeaker } from '../types/Speaker/ISpeaker';

export const SpeakerContext = createContext<ISpeaker>({} as ISpeaker);

export const SpeakerProvider = ({
  children,
  speaker
}: {
  children: any,
  speaker: ISpeaker
}) => {

  return(
    <SpeakerContext.Provider value={speaker}>
      {children}
    </SpeakerContext.Provider>
  );
}
