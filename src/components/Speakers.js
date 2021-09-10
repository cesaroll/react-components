import { data } from "../../SpeakerData";
import SpeakersList from "./SpeakersList";

const Speakers = () => {
  return (
    <div class="container-fluid">
      <SpeakersList data={data} />
    </div>
  );
}

export default Speakers;
