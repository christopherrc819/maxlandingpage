document.addEventListener('DOMContentLoaded', () => {

const searchImage = document.querySelector('[data-search-image]')
const searchField = document.querySelector('[data-search-field]')
searchImage.addEventListener('click', ()=> {
  if (searchField.style.display === 'none') {
    searchField.style.display = 'block';
  } else {
      searchField.style.display = 'none';
    }
})

})
