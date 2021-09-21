import { useContext } from "react";
import { data } from "../../SpeakerData";
import ReactPlaceHolder from "react-placeholder/lib";
import useRequestDelay, {REQUEST_STATUS} from "../hooks/useRequestDelay";
import Speaker from "./Speaker";
import { SpeakerFilterContext } from "../contexts/SpeakerFilterContext";
import { ISpeakerFilter } from "../types/ISpeakerFilter";

const SpeakersList = () => {

  const {
    data: speakersData,
    requestStatus,
    error,
    updateRecord
  } = useRequestDelay(2000, data);

  const { searchQuery, eventYear } = useContext<ISpeakerFilter>(SpeakerFilterContext);

  console.log(searchQuery.searchQuery);

  if (requestStatus === REQUEST_STATUS.FAILURE) {
    return (
      <div className="text-danger">
        ERROR: <b>Loading Speaker Data Failed {error}</b>
      </div>
    );
  }

  return (
    <div className="container speaker-list">
      <ReactPlaceHolder
        type="media"
        rows={15}
        className="speakerlist-placeholder"
        ready={requestStatus === REQUEST_STATUS.SUCCESS}
      >
        <div className="row">
          {speakersData
            .filter (
              speaker =>
                speaker.first.toLowerCase().includes(searchQuery.searchQuery.toLowerCase()) ||
                 speaker.last.toLowerCase().includes(searchQuery.searchQuery.toLowerCase())
            )
            .filter (
              speaker =>
                speaker.sessions.find(
                  session =>
                    session.eventYear === eventYear.eventYear
                )
            )
            .map((speaker) => {
            return (
              <Speaker
                key={speaker.id}
                speaker={speaker}
                updateRecord={updateRecord}
              />
            );
          })}
        </div>
      </ReactPlaceHolder>
    </div>
  );
}

export default SpeakersList;
