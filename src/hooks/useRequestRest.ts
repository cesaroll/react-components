import { useState, useEffect } from "react";
import axios from 'axios';
import { ISpeaker } from '../types/Speaker/ISpeaker';
import { IMutateRecord } from "../types/Speaker/IMutateRecord";

export const REQUEST_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  FAILURE: "failure"
};

const restUrl = "api/speakers";

const useRequestRest = () => {

  const [data, setData] = useState([]);
  const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
  const [error, setError] = useState("");


  useEffect(() => {
    const delayFunc = async () => {
      try {
        const result = await axios.get(restUrl);
        // throw "Had error";
        setRequestStatus(REQUEST_STATUS.SUCCESS);
        setData(result.data);
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
        await axios.put(`${restUrl}/${record.id}`, record);
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
        await axios.post(`${restUrl}/99999`, record);
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
        await axios.delete(`${restUrl}/${record.id}`);
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

export default useRequestRest;
