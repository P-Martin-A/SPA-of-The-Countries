import getData from '../assets/utils/getData'

const HOME = async () => {
  const COUNTRIES = await getData() 
  
  const VIEW = COUNTRIES.map(country => `
    <article class="main_article">
      <a class="main_article-country" href="#/${country.name.toLocaleLowerCase()}" alt="${country.name}">
        <figure class="main_article-country-figure">
          <img class="main_article-country-figure-image" src="${country.flag}" alt="${country.name}" title="${country.name}">
        </figure>
      </a>
    </article>
  `).join('')

  return VIEW
}

export default HOME