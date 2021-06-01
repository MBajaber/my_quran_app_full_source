import styled from 'styled-components';

export const Surahbox = styled.li`
    padding: 7px;
    padding-bottom: 7px;
    border-radius: 6px;
    background-color: ${props => props.linkState ?  props.themeStyle.all.mainColor : props.themeStyle[props.theme].secondaryColor};
    box-shadow: ${props => props.themeStyle[props.theme].boxShadow};
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    transition: all .3s ease-in-out;
    .icon_name_number_section {
        flex-basis: 65%;
        @media (max-width: 350px) {
            flex-basis: 100%;
        }
        .surah-box-number {
            margin-left: 6px;
            margin-right: 6px;
            color: ${props => props.linkState ? props.themeStyle.all.whiteColor : props.theme === 'light' ? props.themeStyle.all.mutedColor : props.themeStyle.all.secondaryColor};
        }
        .surah-box-name {
            color: ${props => props.linkState ? props.themeStyle.all.whiteColor : props.themeStyle[props.theme].textNormal};
            white-space: nowrap;
        }
        .immam_name {
            font-size: 13px;
            letter-spacing: 0.3px;
            padding: 0 6px;
            color: ${props => props.linkState ? props.themeStyle.all.yellowColor : props.theme === 'light' ? props.themeStyle.all.mutedColor : props.themeStyle.all.yellowColor};
        }
        .immam_rewaya {
            font-size: 12px;
            letter-spacing: 0.3px;
            padding: 0 6px;
            color: ${props => props.themeStyle.all.secondaryColor};
        }
    }
    .surah-box-imam-page-info {
        flex-basis: 27%;
        justify-content: space-between;
        @media (max-width: 350px) {
            flex-basis: 100%;
            justify-content: flex-end;
        }
        .list {
            cursor: pointer;
            border-radius: 6px;
            transition: all 0.3s ease-in-out;
            button {
                color: ${props => props.linkState ? props.themeStyle.all.whiteColor : props.theme === 'light' ? '#6d6d6d' : props.themeStyle.all.whiteColor};
                padding: 2px 5px;
                transition: all .3s ease-in-out;
                &.delete_item {
                    color: ${props => props.linkState ? props.themeStyle.all.whiteColor : props.themeStyle.all.redColor};
                }
                &:hover .delete_item {
                    color: ${props => props.themeStyle.all.whiteColor};
                }
            }
            &:hover button {
                background-color: #14eeaa;
                color: ${props => props.themeStyle.all.whiteColor};
            }
            &.heart {
                color: ${props => props.themeStyle.all.blackColor};
                &.full_heart_btn {
                    color: ${props => props.themeStyle.all.yellowColor};
                }
            }
        }
    }
`;