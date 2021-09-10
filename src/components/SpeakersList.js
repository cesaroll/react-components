
import ReactPlaceHolder from "react-placeholder/lib";
import useRequestSpeakers from "../hooks/useRequestSpeakers";
import Speaker from "./Speaker";

const SpeakersList = ({showSessions}) => {

  const {
    speakersData, isLoading,
    hasErrored, error,
    onFavoriteToggle
  } = useRequestSpeakers(2000);

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
