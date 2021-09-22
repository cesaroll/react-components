import { IMutateRecord } from "../types/Speaker/IMutateRecord";
import { ISpeaker } from '../types/Speaker/ISpeaker';

export const SpeakerAdd = ({
  eventYear,
  mutateRecord
}: {
  eventYear: string,
  mutateRecord: IMutateRecord
}) => {

  return (
    <a href="#" className="addSes">
      <i onClick={(e) => {
        e.preventDefault();
        const firstLast = window.prompt("Enter first and last name:", "");

        if (firstLast === null) return;

        const firstLastArray = firstLast.split(' ');
        mutateRecord.insert({
          id: "99999",
          first: firstLastArray[0],
          last: firstLastArray[1],
          bio: "Bio not entered yet",
          sessions: [
            {
              id: "88888",
              title: `New Session For ${firstLastArray[0]}`,
              room: {
                name: "Main Ball Room"
              },
              eventYear,
            }
          ]
        } as ISpeaker, () => {})
      }}>
        +
      </i>
    </a>
  );
}
