import axios from 'axios';

export function searchGiphy(search) {
  return {
    type:'SEARCH_GIPHY',
    payload: axios.get(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC `)
                  .then(res => res.data)
  }
}
