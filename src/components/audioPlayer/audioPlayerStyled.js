import styled from 'styled-components';

export const PlayerContent = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;;
    height: 88px;
    direction: ltr;
    z-index: 999;
    transition: all .3s ease-in-out;
    .random {
        transition: all .3s ease-in-out;
        color: rgba(57, 194, 201, .4);
        position: absolute;
        top: 44px;
        left: 55px;
        &:hover {
            color: ${props => props.themeStyle.all.mainColor};
        }
        svg {
            cursor: pointer;
        }
        @media (max-width: 350px) {
            display: none;
        }
    }
    .favorite_box {
        transition: all .3s ease-in-out;
        color: ${props => props.themeStyle.all.mainColor};
        position: absolute;
        top: 44px;
        left: ${props => props.isFavPlaylist ? '50px' : '90px'};
        svg {
            cursor: pointer;
        }
    }
    .autoPlay_box {
        transition: all .3s ease-in-out;
        color: ${props => props.autoPlayAudio ? props.themeStyle.all.mainColor : "rgba(57,194,201,.4)"};
        position: absolute;
        top: 44px;
        left: ${props =>  props.isFavPlaylist && props.isFavoritePage ? '50px' : props.isFavPlaylist ? '85px' : props.isFavoritePage ? '50px' : '125px'};
        @media (max-width: 567px) {
            left: ${props =>  props.isFavPlaylist && props.isFavoritePage ? '50px' : props.isFavPlaylist ? '50px' : '90px'};
        }
        @media (max-width: 350px) {
            left: 50px;
        }
        &:hover {
            color: ${props => props.themeStyle.all.mainColor};
        }
        svg {
            cursor: pointer;
        }
    }
    .rhap_container {
        background-color: ${props => props.themeStyle[props.theme].secondaryColor};
        box-shadow: ${props => props.themeStyle.light.boxShadow};
        border-top: ${props => props.theme === 'dark' && '1px solid rgba(255,255,255,.2)'};
        transition: all .3s ease-in-out;
        .rhap_progress-indicator {
            background-color: rgb(52 196 197 / 90%);
            transition: all .3s ease-in-out;
            box-shadow: 0 0 5px hsl(0deg 0% 53% / 50%);
        }
        .rhap_progress-filled {
            background-color: rgb(52 196 197 / 50%);
            transition: all .3s ease-in-out;
        }
        .rhap_download-progress {
            background-color: ${props => props.theme === 'light' ? '#caebff' : '#ecf1f4'};
            transition: all .3s ease-in-out;
        }
        &:hover .rhap_progress-indicator,
        &:hover .rhap_progress-filled {
            background-color: ${props => props.themeStyle.all.mainColor};
        }
        .rhap_time {
            color: ${props => props.theme === 'light' ? '#6d6d6d' : props.themeStyle.all.whiteColor};
        }
        .rhap_controls-section {
            .rhap_additional-controls {
                button[aria-label='Disable Loop'] {
                    color: rgba(57, 194, 201, .4);
                }
                button[aria-label='Enable Loop'] {
                    color: ${props => props.themeStyle.all.mainColor};
                }
            }
            .rhap_main-controls {
                .rhap_main-controls-button {
                    transition: all .3s ease-in-out;
                    color: rgba(57, 194, 201, .4);
                    &:hover {
                        color: ${props => props.themeStyle.all.mainColor};
                    }
                    &.rhap_play-pause-button {
                        color: ${props => props.themeStyle.all.mainColor};
                    }
                }
            }
            .rhap_volume-controls {
                .rhap_volume-button {
                    color: rgba(57, 194, 201, .4);
                }
                .rhap_volume-bar-area {
                    .rhap_volume-bar {
                        background-color: rgba(57, 194, 201, .4);
                    }
                    .rhap_volume-indicator {
                        background-color: ${props => props.themeStyle.all.mainColor};
                    }
                }
            }
        }
    }
    .playlist_items {
        margin: 0 10px;
        position: relative;
        text-align: start;
        z-index: 99;
        transition: all 0.4s ease-in-out;
        svg {
            cursor: pointer;
            color: ${props => props.themeStyle.all.yellowColor};
        }
        .playlist_list {
            position: absolute;
            bottom: -100vh;
            width: 450px;
            background-color: ${props => props.themeStyle[props.theme].secondaryColor};
            box-shadow: ${props => props.themeStyle[props.theme].boxShadow};
            border: 1px solid ${props => props.themeStyle[props.theme].bg};
            border-radius: 10px;
            max-height: 260px;
            transition: all 0.3s ease-in-out;
            overflow: hidden;
            &.show {
                bottom: 117px;
            }
            .header {
                padding: 12px 15px;
                border-bottom: 1px solid ${props => props.themeStyle[props.theme].bg};
                box-shadow: ${props => props.themeStyle[props.theme].boxShadow};
                color: ${props => props.themeStyle[props.theme].textNormal};
                svg {
                    color: ${props => props.themeStyle.all.redColor};
                }
            }
            .sura_list {
                overflow-y: auto;
                max-height: 210px;
                &::-webkit-scrollbar {
                    width: 7px;
                }
                &::-webkit-scrollbar-track {
                    background-color: ${props => props.theme === 'light' ? '#ecf4f6' : '#111'};
                }
                &::-webkit-scrollbar-thumb {
                    background-color: ${props => props.theme === 'light' ? '#c7dbea' : '#666'};
                    border-radius: 10px;
                }
                .no_list {
                    padding: 20px 0 10px;
                    color: ${props => props.themeStyle.all.mutedColor};
                }
            }
        }
    }
`;