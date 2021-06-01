import styled from 'styled-components';

export const PlayListStyled = styled.li`
    display: flex;
    align-items: center;
    padding: 5px 15px;
    background-color: ${props => props.linkState ? props.themeStyle.all.mainColor : 'transparent'};
    .play_btn {
        flex-basis: 8%;
        height: 36px;
        border-radius: 50%;
        background-color: #f5b44b;
        box-shadow: 0 0 6px 0 rgb(245 180 75 / 53%);
        .play-btn {
            margin-bottom: 1px;
            margin-left: 2px;
            svg {
                color: ${props => props.themeStyle.all.whiteColor} !important;
            }
        }
    }
    .info {
        padding: 0 10px;
        flex-basis: 92%;
        color: #02070e;
        .sura_number {
            font-size: 14px;
            flex-basis: 10%;
            color: ${props => props.linkState ? props.themeStyle.all.whiteColor : props.theme === 'light' ? props.themeStyle.all.mutedColor : props.themeStyle.all.secondaryColor};
            margin-inline-end: 10px;
        }
        .sura_desc {
            display: flex;
            flex-basis: 92%;
            flex-direction: column;
            .sura_Name {
                font-weight: normal;
                color: ${props => props.linkState ? props.themeStyle.all.whiteColor : props.themeStyle[props.theme].textNormal};
            }
            .sura_info {
                color: ${props => props.linkState ? props.themeStyle.all.yellowColor : props.theme === 'light' ? props.themeStyle.all.mutedColor : props.themeStyle.all.yellowColor};
                font-size: 13px;
                width: 95%;
            }
        }
        .sura_delete {
            svg {
                color: ${props => props.themeStyle.all.redColor} !important;
            }
        }
        .download {
            button {
                margin: 0 6px;
            }
        }
    }
`;