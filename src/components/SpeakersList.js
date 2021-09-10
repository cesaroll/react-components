import Speaker from "./Speaker";

const SpeakersList = ({data, showSessions}) => {
  return (
    <div className="container speaker-list">
      <div className="row">
        {data.map((speaker) => {
          return (
            <Speaker key={speaker.id} speaker={speaker} showSessions={showSessions}/>
          );

        })}

      </div>
    </div>
  );
}

export default SpeakersList;
