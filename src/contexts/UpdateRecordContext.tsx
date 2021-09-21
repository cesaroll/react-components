import { createContext } from "react"
import { ISpeaker } from '../types/Speaker/ISpeaker';
import { IUpdateRecord } from '../types/Speaker/IUpdateRecord';

export const UpdateRecordContext = createContext<IUpdateRecord>({} as IUpdateRecord);

export const UpdateRecordProvider = ({
  children,
  updateRecord
}: {
  children: any,
  updateRecord: IUpdateRecord
}) => {

  return (
    <UpdateRecordContext.Provider value={updateRecord}>
      {children}
    </UpdateRecordContext.Provider>
  );
}
