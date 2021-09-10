import { data } from "../../SpeakerData";
import Header from "./Header";
import SpeakersList from "./SpeakersList";
import SpeakersToolbar from "./SpeakersToolbar";

const Speakers = () => {
  return (
    <div class="container-fluid">
      <Header />
      <SpeakersToolbar />
      <SpeakersList data={data} />
    </div>
  );
}

export default Speakers;
