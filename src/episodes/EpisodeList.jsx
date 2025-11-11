import "./episodes.css";

/** A list of episode names that allows the user to select an episode */
export default function EpisodeList({ episodes, setSelectedEpisode }) {
  return (
    <ul>
      {episodes.map((episode) => (
        <li key={episode.number}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setSelectedEpisode(episode);
            }}
          >
            {episode.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
