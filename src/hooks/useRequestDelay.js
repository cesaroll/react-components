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

  useEffect( async () => {
    try {
      await delay(delayTime);
      // throw "Had error";
      setRequestStatus(REQUEST_STATUS.SUCCESS);
      setData(data);
    } catch(e) {
      setRequestStatus(REQUEST_STATUS.FAILURE);
      setError(e);
    }
  }, []);

  const updateRecord = (recordUpdated) => {

    const newRecords = data.map(rec => rec.id === recordUpdated.id ? recordUpdated : rec);

    const setDataWithDelay = async () => {
      try {
        await delay(delayTime);
        setData(newRecords);
      } catch(e) {
        console.log("Error inside delay function", e);
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
