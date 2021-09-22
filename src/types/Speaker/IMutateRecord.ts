import { ISpeaker } from "./ISpeaker";

export interface IMutateRecord {
  insert(speaker: ISpeaker, doneCallback: Function): void
  update(speaker: ISpeaker, doneCallback: Function): void
  delete(speaker: ISpeaker, doneCallback: Function): void
}
