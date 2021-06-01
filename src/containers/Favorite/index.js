import React, { useState, useEffect } from 'react';
import { FavouriteStyled } from './favouriteStyled';
import Form from 'react-bootstrap/Form';
import FavoriteList from './favoriteList';
import { connect } from 'react-redux';
import { CgTrashEmpty } from 'react-icons/cg';
import * as favoriteActions from '../../store/action/favoriteActions';
import * as radioActions from '../../store/action/radioActions';
import * as getDataActions from '../../store/action/getDataActions';
import * as settingActions from '../../store/action/settingActions';

const Favorite = ({ playlist, isFavoritePage, isRadioPage, deleteFavFromSurabox, deleteItemFromPlaylist, theme, themeStyle, language, site_language, showPlayer, isFromFavouritePlaylist,  suraLinkFunc}) => {

    const [search, setSearch] = useState('');
    const [playlistFavorite, setPlaylistFavorite] = useState(playlist);
    const [allElements, setAllElements] = useState([...playlistFavorite]);

    useEffect(() => {
        isFavoritePage(true);
        isRadioPage(false);
    }, []);
    
    useEffect(() => {
        setPlaylistFavorite(playlist);
        setAllElements(playlist)
    }, [playlist]);

    useEffect(() => {
        let favArray = [];
        playlistFavorite.map(favorite => {
            if(search === '') {
                favArray.push(favorite);

            } else if(favorite.suraName.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
                favArray.push(favorite)
            }
            return null;
        });

        setAllElements(favArray);
    }, [search]);

    const deleteItems = (item) => {
        deleteFavFromSurabox(item.server);
        deleteItemFromPlaylist(item);
    }

    const playSura = (link) => {
        suraLinkFunc(link);
        isFromFavouritePlaylist(true);
        showPlayer();
    }

    return (
        <FavouriteStyled theme={theme} themeStyle={themeStyle} language={language.lang}>
            <h2 className='title text-capitalize mb-4'>{site_language && site_language.favorite}</h2>
            <div className='form mb-4'>
                <Form>
                    <Form.Control type='text' placeholder={`${site_language && site_language.search} ${site_language && site_language.surah_name}`} className='rounded-pill search-filed' onChange={e => setSearch(e.target.value)} dir='auto' />
                </Form>
            </div>
            <ul className='playlist-content'>
                {
                    allElements.length > 0 ? (
                        allElements.map(favorite =>
                            <FavoriteList
                                key={`${favorite.server}/${favorite.name}/${favorite.suraName}/${favorite.server}`}
                                name={favorite.name}
                                number={favorite.number}
                                server={favorite.server}
                                suraName={favorite.suraName}
                                rewaya={favorite.rewaya}
                                deleteItems={(item) => deleteItems(item)}
                                playSura={(link) => playSura(link)}
                            />
                        )
                    ) : <div className='no-list text-center'>{`${site_language && site_language.no_playlist_added}... `}<CgTrashEmpty size={28} /></div>
                }                
            </ul>
        </FavouriteStyled>
    );
};

const mapStateToProps = state => ({
    playlist: state.fav.playlist,
    theme: state.theme.theme,
    themeStyle: state.theme.themeStyle,
    site_language: state.lang.site_language,
    language: state.lang.language
});

const mapDispatchToProps = dispatch => ({
    deleteItemFromPlaylist: (item) => dispatch(favoriteActions.removeItemFromPlayList(item)),
    deleteFavFromSurabox: (item) => dispatch(favoriteActions.deleteFavFromSurabox(item)),
    isFavoritePage: (value) => dispatch(favoriteActions.isFavoritePage(value)),
    isRadioPage: (value) => dispatch(radioActions.isRadioPage(value)),

    suraLinkFunc: (link) => dispatch(getDataActions.suraLink(link)),
    showPlayer: () => dispatch(settingActions.showPlayer()),
    isFromFavouritePlaylist: (bool) => dispatch(favoriteActions.isFromFavouritePlaylist(bool))
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
