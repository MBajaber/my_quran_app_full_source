import styled from 'styled-components';

export const AsideLink = styled.div`
    & > a {
        color: ${props => props.theme === 'light' ? props.themeStyle.all.grayColor : props.themeStyle.all.whiteColor};
        display: flex;
        padding: 10px 20px;
        align-items: center;
        width: 100%;
        transition: all 0.3s ease-in-out;
        text-decoration: none;
        z-index: 2;
        position: relative;
        &.active {
            color: ${props => props.themeStyle.all.mainColor};
            background-color: #f2f3f4;
            &:before {
                content: '';
                background-color: ${props => props.themeStyle.all.mainColor};
                ${props => ['ar', 'ur', 'ug', 'fa'].includes(props.site_lang) ? 'right' : 'left'}: ${props => props.theme === 'light' ? '-2px' : '-3px'};
            }
            & .aside-list-logo {
                color: ${props => props.themeStyle.all.mainColor};
            }
        }
        &:before {
            content: '';
            position: absolute;
            top: 0;
            width: 3px;
            height: 100%;
            z-index: -1;
        }
        &:hover {
            &:before {
                content: '';
                ${props => ['ar', 'ur', 'ug', 'fa'].includes(props.site_lang) ? 'right' : 'left'}: ${props => props.theme === 'light' ? '-2px' : '-3px'};
                background-color: ${props => props.themeStyle.all.mainColor};        
            }
        }
        & .aside-list-logo {
            color: ${props => props.theme === 'light' ? props.themeStyle.all.grayColor : props.themeStyle.all.whiteColor};
            transition: all 0.3s ease-in-out;
            flex-basis: 18%;
        }
        & .aside-list .aside-list-text {
            font-size: 14px;
            margin: 0 15px;
        }
    }
`;