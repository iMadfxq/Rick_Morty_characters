const Characters = () => {
  const view = `
    <div class="Character__inner">
      <article class="character__inner--card">
        <img src="image" alt="name">
        <h2>name</h2>
      </article>
      <article class="character__inner--card">
        <h3>Episodes:</h3>
        <h3>Status:</h3>
        <h3>Specie:</h3>
        <h3>Gender:</h3>
        <h3>Origin:</h3>
        <h3>Last location:</h3>
      </article>
    </div>
  `;
  return view;
}

export default Characters