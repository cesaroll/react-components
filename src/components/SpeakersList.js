import Speaker from "./Speaker";

const SpeakersList = ({data}) => {
  return (
    <div className="container speaker-list">
      <div className="row">
        {data.map((speaker) => {
          return (
            <Speaker key={speaker.id} speaker={speaker}/>
          );

        })}

      </div>
    </div>
  );
}

export default SpeakersList;
