import { useState } from "react";
import { data } from "../../SpeakerData";
import Speaker from "./Speaker";

const SpeakersList = ({showSessions}) => {

  const [speakersData, setSpeakersData] = useState(data);

  const onFavoriteToggle = id => {
    const speakerRecPrevious = speakersData.find(rec => rec.id === id);

    const speakerRecUpdated = {
      ...speakerRecPrevious,
      favorite: !speakerRecPrevious.favorite
    };

    const speakersDataNew = speakersData.map( rec => rec.id === id ? speakerRecUpdated : rec);

    setSpeakersData(speakersDataNew);
  }

  return (
    <div className="container speaker-list">
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
    </div>
  );
}

export default SpeakersList;
