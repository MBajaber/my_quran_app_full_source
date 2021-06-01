import * as actionType from './actionTypes';

export const addToPlayList = (item) => ({type: actionType.ADD_TO_PLAYLIST, item: item});
export const playlistStorage = (items) => ({type: actionType.PLAYLIST_STORAGE, items: items});
export const removeItemFromPlayList = (item) => ({type: actionType.REMOVE_ITEM_FROM_PLAYLIST, item: item});
export const deleteFavFromSurabox = (item) => ({type: actionType.DELETE_FAVOURITE_FROM_SURABOX, item: item});
export const emptyFavFromSurabox = () => ({type: actionType.EMPTY_FAVOURITE_FROM_SURABOX});
export const isFromFavouritePlaylist = (bool) => ({type: actionType.IS_FROM_FAVOURITE_PLAYLIST, booleanValue: bool });
export const isFavoritePage = (value) => ({type: actionType.iS_FAVORITE_PAGE, value: value});