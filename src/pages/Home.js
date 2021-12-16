import getData from "../utils/getData";

const Home = async () => {
  const characters = await getData()
  const view = `
  <div class="characters">
    ${characters.results.map(character => `
      <article class="characters__item">
        <a href="#/${character.id}/">
          <img src="${character.image}" alt="${character.name}" loading="lazy">
          <h2>${character.name}</h2>
        </a>
      </article>
    `).join('')}
  </div>
  <footer>
    <section class="footer__info">
      <a href="https://imadfxq.github.io/myOwnWebPage/" target="_blank">Developed by:<span>iMadfxq</span></a>
    </section>
  </footer>
  `
  return view;
};

export default Home;