import { useState, useEffect } from "react";
import { data } from "../../SpeakerData";

const useRequestSpeakers = (delayTime = 1000) => {

  const [speakersData, setSpeakersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasErrored, setHasErrored] = useState(false);
  const [error, setError] = useState("");

  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  useEffect( async () => {
    try {
      await delay(delayTime);
      // throw "Had error";
      setIsLoading(false);
      setSpeakersData(data);
    } catch(e) {
      setIsLoading(false);
      setHasErrored(true);
      setError(e);
    }
  }, []);

  const onFavoriteToggle = id => {
    const speakerRecPrevious = speakersData.find(rec => rec.id === id);

    const speakerRecUpdated = {
      ...speakerRecPrevious,
      favorite: !speakerRecPrevious.favorite
    };

    const speakersDataNew = speakersData.map( rec => rec.id === id ? speakerRecUpdated : rec);

    setSpeakersData(speakersDataNew);
  }

  return {
    speakersData, isLoading,
    hasErrored, error,
    onFavoriteToggle
  };
}

export default useRequestSpeakers;
