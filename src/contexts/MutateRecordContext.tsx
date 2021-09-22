import { createContext } from "react"
import { IMutateRecord } from '../types/Speaker/IMutateRecord';

export const MutateRecordContext = createContext<IMutateRecord>({} as IMutateRecord);

export const MutateRecordProvider = ({
  children,
  mutateRecord
}: {
  children: any,
  mutateRecord: IMutateRecord
}) => {

  return (
    <MutateRecordContext.Provider value={mutateRecord}>
      {children}
    </MutateRecordContext.Provider>
  );
}
