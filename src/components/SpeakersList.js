import { data } from "../../SpeakerData";
import ReactPlaceHolder from "react-placeholder/lib";
import useRequestDelay, {REQUEST_STATUS} from "../hooks/useRequestDelay";
import Speaker from "./Speaker";

const SpeakersList = ({showSessions}) => {

  const {
    data: speakersData,
    requestStatus,
    error,
    updateRecord
  } = useRequestDelay(2000, data);

  if (requestStatus === REQUEST_STATUS.FAILURE) {
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
        ready={requestStatus === REQUEST_STATUS.SUCCESS}
      >
        <div className="row">
          {speakersData.map((speaker) => {
            return (
              <Speaker
                key={speaker.id}
                speaker={speaker}
                showSessions={showSessions}
                onFavoriteToggle={(doneCallback) => updateRecord({
                  ...speaker,
                  favorite: !speaker.favorite
                }, doneCallback)}
              />
            );
          })}
        </div>
      </ReactPlaceHolder>
    </div>
  );
}

export default SpeakersList;
