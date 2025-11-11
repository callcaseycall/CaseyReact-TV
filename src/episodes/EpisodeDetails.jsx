import "./episodes.css";

/** Details about the selected episode */
export default function EpisodeDetails({ episode }) {
  // if (!episode) {
  //   return (
  //     <section className="episode-details">
  //       <h2>Episode Details</h2>
  //       <p>Select an episode to learn more.</p>
  //     </section>
  //   );
  // }

  return (
    <article>
      <h3>
        Episode {episode.number}: {episode.title}
      </h3>
      <p>{episode.description}</p>
    </article>
  );
}
