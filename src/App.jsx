import { useState } from "react";
import { tvShows } from "./shows/data";
import "./episodes/episodes.css";
import "./shows/shows.css";
import ShowDetails from "./shows/ShowDetails";
import ShowSelection from "./shows/ShowSelection";

export default function App() {
  const [selectedShow, setSelectedShow] = useState(null);
  // console.log("ShowSelection props:", tvShows);

  return (
    <div>
      <header>
        <ShowSelection tvShows={tvShows} setSelectedShow={setSelectedShow} />
      </header>
      <main>
        <ShowDetails show={selectedShow} />
      </main>
    </div>
  );
}
