import { useContext } from "react";
import ReactPlaceHolder from "react-placeholder/lib";
import Speaker from "./Speaker";
import { SpeakerFilterContext } from "../contexts/SpeakerFilterContext";
import { ISpeakerFilter } from "../types/ISpeakerFilter";
import { SpeakerAdd } from "./SpeakerAdd";
import useRequestRest, {REQUEST_STATUS} from '../hooks/useRequestRest';
import { TypeOfTag } from "typescript";

const SpeakersList = () => {

  const {
    data: speakersData,
    requestStatus,
    error,
    mutateRecord
  } = useRequestRest();

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
        <SpeakerAdd eventYear={eventYear.eventYear} mutateRecord={mutateRecord} />
        <div className="row">
          {speakersData
            .filter (
              (speaker: any) =>
                speaker.first.toLowerCase().includes(searchQuery.searchQuery.toLowerCase()) ||
                 speaker.last.toLowerCase().includes(searchQuery.searchQuery.toLowerCase())
            )
            .filter (
              (speaker: any) =>
                speaker.sessions.find(
                  (session: any) =>
                    session.eventYear === eventYear.eventYear
                )
            )
            .map((speaker:any) => {
            return (
              <Speaker
                key={speaker.id}
                speaker={speaker}
                mutateRecord={mutateRecord}
              />
            );
          })}
        </div>
      </ReactPlaceHolder>
    </div>
  );
}

export default SpeakersList;
