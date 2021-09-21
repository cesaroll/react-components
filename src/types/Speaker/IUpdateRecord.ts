import { ISpeaker } from "./ISpeaker";

export interface IUpdateRecord {
  updateRecord(speaker: ISpeaker, doneCallback: Function): void
}
