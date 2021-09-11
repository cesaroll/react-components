import { useState, useEffect } from "react";

export const REQUEST_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  FAILURE: "failure"
};

const useRequestDelay = (delayTime = 1000, initialData = []) => {

  const [data, setData] = useState(initialData);
  const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
  const [error, setError] = useState("");

  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  useEffect(() => {
    const delayFunc = async () => {
      try {
        await delay(delayTime);
        // throw "Had error";
        setRequestStatus(REQUEST_STATUS.SUCCESS);
        setData(data);
      } catch(e) {
        setRequestStatus(REQUEST_STATUS.FAILURE);
        setError(e);
      }

    };
    delayFunc();
  }, []);

  const updateRecord = (recordUpdated, doneCallback) => {
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