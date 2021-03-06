import { useState, useContext, memo } from "react";
import { SpeakerFilterContext } from "../contexts/SpeakerFilterContext";
import { ISpeakerFilter } from '../types/ISpeakerFilter';
import { ISession, IRoom } from '../types/Speaker/ISession';
import { ISpeaker } from '../types/Speaker/ISpeaker';
import { SpeakerProvider, SpeakerContext } from "../contexts/SpeakerContext";
import { MutateRecordContext, MutateRecordProvider } from "../contexts/MutateRecordContext";
import { IMutateRecord } from "../types/Speaker/IMutateRecord";
import { SpeakerDelete } from "./SpeakerDelete";
import ErrorBoundary from "./ErrorBoundary";

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

const Sessions = () => {

  const { sessions } = useContext(SpeakerContext);

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

const SpeakerImage = () => {

  const {id, first, last} = useContext(SpeakerContext);

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

const SpeakerFavorite = () => {

  const speaker = useContext(SpeakerContext);
  const mutateRecord = useContext(MutateRecordContext);

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
          mutateRecord.update (
            {
              ...speaker, favorite: !speaker.favorite
            },
            doneCallback
          )
        }}
      >
        <i className={speaker.favorite === true ? "fa fa-star orange" : "fa fa-star-o orange"}
        />{" "}
        Favorite{" "}
        {inTransition ? (
          <span className="fas fa-circle-notch fa-spin"></span>
        ) : null}
      </span>
    </div>
  );
}

const SpeakerDemographics = () => {

  const {
    first,
    last,
    favorite,
    bio,
    company,
    twitterHandle
  } = useContext(SpeakerContext);

  return (
    <div className="speaker-info">
      <div className="d-flex justify-content-between mb-3">
        <h3 className="text-truncate w-200">
          {first} {last}
        </h3>
      </div>
      <SpeakerFavorite />
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

const areEqualsSpeaker = (prevProps: any, nextProps: any) => {
  return (prevProps.speaker.favorite === nextProps.speaker.favorite);
}

const SpeakerNoErrorBoundary = memo(
  ({
  speaker,
  mutateRecord,
  showErrorCard
}: {
  speaker: ISpeaker,
  mutateRecord: IMutateRecord,
  showErrorCard: boolean
}) => {
  const { showSessions } = useContext(SpeakerFilterContext);

  console.log(`speaker: ${speaker.id} ${speaker.first} ${speaker.last}`);

  if (showErrorCard) {
    return(
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
          <div className="card card-height p-4 mt-4">
            <img src="/images/speaker-99999.jpg" />
            <div><b>Error showing Speaker</b></div>
          </div>
        </div>
    );
  }

  return (
    <SpeakerProvider speaker={speaker} >
      <MutateRecordProvider mutateRecord={mutateRecord}>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
          <div className="card card-height p-4 mt-4">
            <SpeakerImage />
              <SpeakerDemographics />
          </div>
          {showSessions.showSessions === true ?
            <Sessions /> : null
          }
          <SpeakerDelete />
        </div>
      </MutateRecordProvider>
    </SpeakerProvider>
  );
}, areEqualsSpeaker);

const Speaker = (props: any) => {
  return (
    <ErrorBoundary
      errorUI={<SpeakerNoErrorBoundary {...props} showErrorCard={true}></SpeakerNoErrorBoundary>}
    >
      <SpeakerNoErrorBoundary {...props}></SpeakerNoErrorBoundary>
    </ErrorBoundary>
  );
}

export default Speaker;
