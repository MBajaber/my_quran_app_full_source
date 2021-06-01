import * as actionType from '../action/actionTypes';

const initialState = {
    playlist: [],
    deleteFav: '',
    isFavPlaylist: false,
    isFavoritePage: false
}

const favoriteReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionType.PLAYLIST_STORAGE:
            return {...state, playlist: action.items}
        case actionType.ADD_TO_PLAYLIST:
            let allList = state.playlist && state.playlist.some(list => list.server === action.item.server);
            let item = null;
            if(action.item.isFavorite && !allList) {
                item = {...state, playlist: state.playlist.concat(action.item)};
            } else {
                item = {...state};
            }
            return item;
        case actionType.REMOVE_ITEM_FROM_PLAYLIST:
            let filterPlaylist = state.playlist.filter(list => list.server !== action.item.server);
            return {...state, playlist: filterPlaylist}
        case actionType.DELETE_FAVOURITE_FROM_SURABOX:
            return {...state, deleteFav: action.item}
        case actionType.EMPTY_FAVOURITE_FROM_SURABOX:
            return {...state, deleteFav: ''}
        case actionType.IS_FROM_FAVOURITE_PLAYLIST:
            return {...state, isFavPlaylist: action.booleanValue}
        case actionType.iS_FAVORITE_PAGE:
            return {...state, isFavoritePage: action.value}
        default:
            return state;
    }
}

export default favoriteReducer;