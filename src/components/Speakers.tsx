import { useState } from 'react';
import SpeakersList from "./SpeakersList";
import SpeakersToolbar from "./SpeakersToolbar";

const Speakers = () => {
  const [showSessions, setShowSessions] = useState(true);

  return(
    <>
      <SpeakersToolbar
        showSessions={showSessions}
        setShowSessions={setShowSessions}
      />
      <SpeakersList showSessions={showSessions} />
    </>
  );
}

export default Speakers;