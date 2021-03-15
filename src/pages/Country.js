import getHash from '../assets/utils/getHash'
import getData from '../assets/utils/getData'

const COUNTRY = async () => {
  const ID = getHash(),
        COUNTRY = await getData(ID)

  let population = new Intl.NumberFormat('es').format(COUNTRY[0].population)

  const VIEW = `
    <section class="main_sectionCountry">
      <figure class="main_sectionCountry-figure">
        <img class="main_sectionCountry-figure-image" src="${COUNTRY[0].flag}" alt="${COUNTRY[0].name}" title="${COUNTRY[0].name}">
      </figure>
      <article class="main_sectionCountry-article">
        <ul class="main_sectionCountry-article-list">
          <li class="main_sectionCountry-article-list-item">
            <span class="main_sectionCountry-article-list-item-span">Capital:</span>
            <b class="main_sectionCountry-article-list-item-b">${COUNTRY[0].capital}</b>
          </li>
          <li class="main_sectionCountry-article-list-item">
            <span class="main_sectionCountry-article-list-item-span">Region:</span>
            <b class="main_sectionCountry-article-list-item-b">${COUNTRY[0].region}</b>
          </li>
          <li class="main_sectionCountry-article-list-item">
            <span class="main_sectionCountry-article-list-item-span">Population:</span>
            <b class="main_sectionCountry-article-list-item-b">${population}</b>
          </li>
        </ul>
      </article>
    </section>
  `
  return VIEW
}

export default COUNTRY