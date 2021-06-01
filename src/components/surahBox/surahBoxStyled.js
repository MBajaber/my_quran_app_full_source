import styled from 'styled-components';

export const SurahBoxList = styled.li`
    padding-top: 7px;
    padding-bottom: 7px;
    border-radius: 6px;
    background-color: ${props => props.linkState ? props.themeStyle.all.mainColor : props.themeStyle[props.theme].secondaryColor};
    box-shadow: ${props => props.themeStyle[props.theme].boxShadow};
    transition: all .3s ease-in-out;
    & .icon_name_number {
        flex-basis: 66%;
        @media (max-width: 350px) {
            flex-basis: 100%;
        }
        & .play-btn {
            color: ${props => props.themeStyle.all.yellowColor};
        }
        & .surah-box-number {
            margin: 0 3px;
            color: ${props => props.linkState ? props.themeStyle.all.whiteColor : props.theme === 'light' ? props.themeStyle.all.mutedColor : props.themeStyle.all.secondaryColor};
        }
        & .surah-box-name {
            margin: 0 9px;
            color: ${props => props.linkState ? props.themeStyle.all.whiteColor : props.themeStyle[props.theme].textNormal};
            white-space: nowrap;
        }
    }
    & .surah-box-imam-page-info {
        flex-basis: 30%;
        justify-content: space-between;
        @media (max-width: 450px) {
            flex-basis: 100%;
            justify-content: flex-end;
        }
        .list {
            cursor: pointer;
            border-radius: 6px;
            transition: all 0.3s ease-in-out;
            @media (max-width: 450px) {
                margin: 0 7px;
            }
            button {
                color: ${props => props.linkState ? props.themeStyle.all.whiteColor : '#6d6d6d'};
                padding: 2px 5px;
            }
            &.heart .full_heart_btn {
                color: ${props => props.themeStyle.all.yellowColor};
            }
            &.show_on_hover {
                opacity: 1;
            }
        }
    }
    &:hover .list:hover {
        background-color: #14eeaa;
        svg {
            color: #fff;
        }
        button {
            color: #fff;;
        }
    }
`;