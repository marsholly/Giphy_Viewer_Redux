export default function giphys(state = [], action) {
  if (action.error){
    return state;
  }
  switch (action.type) {
    case 'SEARCH_GIPHY':
      return action.payload.data;
    default:
      return state;
  }
}
