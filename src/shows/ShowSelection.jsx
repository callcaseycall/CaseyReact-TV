// import { tvShows } from "./data";

/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({ tvShows, setSelectedShow }) {
  if (!tvShows || tvShows.length === 0) {
    return <p>Loading shows...</p>;
  }

  return (
    <nav>
      {tvShows.map((show) => (
        <a
          key={show.name}
          className="show"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setSelectedShow(show);
          }}
        >
          {show.name}
        </a>
      ))}
    </nav>
  );
}
