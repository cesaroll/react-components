import { useState, useEffect } from "react";
import { ISpeaker } from '../types/Speaker/ISpeaker';
import { IMutateRecord } from "../types/Speaker/IMutateRecord";

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

  const updateRecord = (record: ISpeaker, doneCallback: Function): void => {
    const originalRecords = [...data];
    const newRecords = data.map(rec => rec.id === record.id ? record : rec);

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

  const insertRecord = (record: ISpeaker, doneCallback: Function): void => {
    const originalRecords = [...data];
    const newRecords = [record, ...data];

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

  const deleteRecord = (record: ISpeaker, doneCallback: Function): void => {
    const originalRecords = [...data];
    const newRecords = data.filter(rec => rec.id !== record.id);

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
    mutateRecord: {insert: insertRecord, update: updateRecord, delete: deleteRecord} as IMutateRecord
  };
}

export default useRequestDelay;
