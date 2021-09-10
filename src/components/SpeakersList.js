import { useState, useEffect } from "react";
import ReactPlaceHolder from "react-placeholder/lib";
import { data } from "../../SpeakerData";
import Speaker from "./Speaker";

const SpeakersList = ({showSessions}) => {

  const [speakersData, setSpeakersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasErrored, setHasErrored] = useState(false);
  const [error, setError] = useState("");

  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  useEffect( async () => {
    try {
      await delay(2000);
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

  if (hasErrored === true) {
    return (
      <div class="text-danger">
        ERROR: <b>Loading Speaker Data Failed {error}</b>
      </div>
    );
  }

  return (
    <div className="container speaker-list">
      <ReactPlaceHolder
        type="media"
        rows={15}
        className="speakerlist-pLaceholder"
        ready={isLoading===false}
      >
        <div className="row">
          {speakersData.map((speaker) => {
            return (
              <Speaker
                key={speaker.id}
                speaker={speaker}
                showSessions={showSessions}
                onFavoriteToggle={() => {
                  onFavoriteToggle(speaker.id);
                }}
              />
            );
          })}
        </div>
      </ReactPlaceHolder>
    </div>
  );
}

export default SpeakersList;
