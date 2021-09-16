import { useState, useContext } from "react";
import { SpeakerFilterContext } from "../contexts/SpeakerFilterContext";
import { ISpeakerFilter } from '../types/ISpeakerFilter';
import { ISession, IRoom } from '../types/Speaker/ISession';
import { ISpeaker } from '../types/Speaker/ISpeaker';

const Session = ({
  title,
  room
}: {
  title: string,
  room: IRoom
}) => {
  return (
    <span className="session">
      {title} <strong>Room: {room.name}</strong>
    </span>
  );
}

const Sessions = ({sessions}: {sessions: ISession[]}) => {

  const { eventYear } = useContext<ISpeakerFilter>(SpeakerFilterContext);

  return (
    <div className="session-box card h-250">
      {sessions
        .filter(session => session.eventYear === eventYear.eventYear)
        .map(session => {
          return(
            <div className="session" key={session.id}>
              <Session {...session} />
            </div>
          )
        })

      }
    </div>
  );
}

const SpeakerImage = ({
  id,
  first,
  last
}: {
  id: string,
  first: string,
  last: string
}) => {
  return (
    <div className="speaker-img d-flex flex-row justify-content-center align-contents-center h-300">
      <img className="contain-fit"
        src={`/images/speaker-${id}.jpg`}
        width="300"
        alt={`${first} ${last}`}
        />
    </div>
  );
}

const SpeakerFavorite = ({
  favorite,
  onFavoriteToggle
}: {
  favorite: boolean,
  onFavoriteToggle: Function
}) => {

  const [inTransition, setInTransition] = useState(false);

  const doneCallback = () => {
    setInTransition(false);
    console.log(`In SpeakerFavorite: doneCallback     ${new Date().getMilliseconds()}`);
  };

  return(
    <div className="action padB1">
      <span
        onClick={() => {
          setInTransition(true);
          onFavoriteToggle(doneCallback);
        }}
      >
        <i className={favorite === true ? "fa fa-star orange" : "fa fa-star-o orange"}
        />{" "}
        Favorite{" "}
        {inTransition ? (
          <span className="fas fa-circle-notch fa-spin"></span>
        ) : null}
      </span>
    </div>
  );
}

const SpeakerDemographics = ({
  speaker,
  onFavoriteToggle
}:{
  speaker: ISpeaker,
  onFavoriteToggle: Function
}) => {

  const {
    first,
    last,
    favorite,
    bio,
    company,
    twitterHandle
  } = speaker;

  return (
    <div className="speaker-info">
      <div className="d-flex justify-content-between mb-3">
        <h3 className="text-truncate w-200">
          {first} {last}
        </h3>
      </div>
      <SpeakerFavorite favorite={favorite} onFavoriteToggle={onFavoriteToggle}/>
      <div>
        <p className="card-description">
          {bio}
        </p>
        <div className="social d-flex flex-row mt-4">
          <div className="company">
            <h5>Company</h5>
            <h6>{company}</h6>
          </div>
          <div className="twitter">
            <h5>Twitter</h5>
            <h6>{twitterHandle}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

const Speaker = ({
  speaker,
  onFavoriteToggle
}: {
  speaker: ISpeaker,
  onFavoriteToggle: Function
}) => {

  const {id, first, last, sessions} = speaker;
  const { showSessions } = useContext(SpeakerFilterContext);

  return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
      <div className="card card-height p-4 mt-4">
        <SpeakerImage id={id} first={first} last={last}/>
        <SpeakerDemographics speaker={speaker} onFavoriteToggle={onFavoriteToggle}/>
      </div>
      {showSessions.showSessions === true ?
        <Sessions sessions={sessions} /> : null
      }
    </div>
  );
}

export default Speaker;
