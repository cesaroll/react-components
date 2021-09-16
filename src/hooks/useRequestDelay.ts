import { useState, useEffect } from "react";
import { ISpeaker } from '../types/Speaker/ISpeaker';

export const REQUEST_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  FAILURE: "failure"
};

const useRequestDelay = (
  delayTime: number = 1000,
  initialData: ISpeaker[] = []) => {

  const [data, setData] = useState(initialData);
  const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
  const [error, setError] = useState("");

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  useEffect(() => {
    const delayFunc = async () => {
      try {
        await delay(delayTime);
        // throw "Had error";
        setRequestStatus(REQUEST_STATUS.SUCCESS);
        setData(data);
      } catch(e) {
        setRequestStatus(REQUEST_STATUS.FAILURE);
        setError((e as Error).message);
      }

    };
    delayFunc();
  }, []);

  const updateRecord = (recordUpdated: ISpeaker, doneCallback: Function) => {
    const originalRecords = [...data];
    const newRecords = data.map(rec => rec.id === recordUpdated.id ? recordUpdated : rec);

    const setDataWithDelay = async () => {
      try {
        setData(newRecords);
        await delay(delayTime);
        // throw "Had error";
        if (doneCallback) {
          doneCallback();
        }
      } catch(e) {
        console.log("Error inside delay function", e);
        if (doneCallback) {
          doneCallback();
        }
        setData(originalRecords);
      }
    };

    setDataWithDelay();

  };

  return {
    data,
    requestStatus,
    error,
    updateRecord
  };
}

export default useRequestDelay;
