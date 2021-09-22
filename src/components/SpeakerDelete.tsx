import { useContext } from 'react';
import { MutateRecordContext } from '../contexts/MutateRecordContext';
import { SpeakerContext } from '../contexts/SpeakerContext';

export const SpeakerDelete = () => {
  const speaker = useContext(SpeakerContext);
  const mutateRecord = useContext(MutateRecordContext);

  return (
    <span className="session w-100">
      <a href="#" className="remSes">
        <i onClick={(e) => {
          e.preventDefault();
          if (window.confirm("Are you sure you want to delete this speaker?")) {
            mutateRecord.delete(speaker, ()=>{});
          }
        }}>
          -
        </i>
      </a>
      <span className="padL2">Delete Speaker</span>
    </span>
  );
}
