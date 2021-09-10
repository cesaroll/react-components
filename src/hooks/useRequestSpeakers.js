import { useState, useEffect } from "react";
import { data } from "../../SpeakerData";

export const REQUEST_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  FAILURE: "failure"
};

const useRequestSpeakers = (delayTime = 1000) => {

  const [speakersData, setSpeakersData] = useState([]);
  const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
  const [error, setError] = useState("");

  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  useEffect( async () => {
    try {
      await delay(delayTime);
      // throw "Had error";
      setRequestStatus(REQUEST_STATUS.SUCCESS);
      setSpeakersData(data);
    } catch(e) {
      setRequestStatus(REQUEST_STATUS.FAILURE);
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
    speakersData,
    requestStatus,
    error,
    onFavoriteToggle
  };
}

export default useRequestSpeakers;
