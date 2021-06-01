import styled, { keyframes } from 'styled-components';

export const SidebarStyled = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 999999;
    user-select: none;
    & .sidebar_menu {
        position: fixed;
        top: 0;
        ${props => ['ar', 'ur', 'ug', 'fa'].includes(props.site_lang) ? 'left' : 'right'}: -100vw;
        width: 250px;
        height: 100vh;
        padding: 20px 0;
        background-color: ${props => props.theme ==='light' ? props.themeStyle.all.whiteColor : props.themeStyle.dark.bg};
        transition: all 1s ease-in-out;
        overflow-y: auto;
        &.show {
            ${props => ['ar', 'ur', 'ug', 'fa'].includes(props.site_lang) ? 'left' : 'right'}: 0px;
        }
        @media (max-width: 350px) {
            width: 70%;
        }
        & .user_name_logo {
            padding: 0 20px 20px;
            border-bottom-width: 2px;
            border-bottom-style: solid;
            border-bottom-color: ${props => props.theme ==='light' ? '#f5f5f5' : 'hsla(0,0%,100%,0.2)'};
        }

        & .nav_side {
            padding: 0px 0px 20px;
            border-bottom-width: 2px;
            border-bottom-style: solid;
            border-bottom-color: ${props => props.theme ==='light' ? '#f5f5f5' : 'hsla(0,0%,100%,0.2)'};
            .list {
                transition: all 0.3s ease-in-out;
                a {
                    padding: 11px 20px;
                    text-decoration: none;
                    color: ${props => props.theme === 'light' ? '#636a6f' : props.themeStyle.all.whiteColor};
                    &:hover {
                        background-color: #f2f3f4;
                        color: #636a6f;
                    }
                    &.active {
                        color: #39c2c9;
                        background-color: #f2f3f4;
                        text-align: start;
                        & .nav_side_icon {
                            svg {
                                color: ${props => props.themeStyle.all.mainColor};
                            }
                        }
                        & .nav_side_text {
                            color: ${props => props.themeStyle.all.mainColor};
                        }
                    }
                    & .nav_side_icon {
                        flex-basis: 15%;
                        @media (max-width: 300px) {
                            flex-basis: 22%;
                        }
                    }
                }
            }
        }
        & .text-section {
            text-align: start;
            color: ${props => props.theme === 'light' ? props.themeStyle.all.blackColor : props.themeStyle.all.whiteColor};
            padding: 20px;
            border-bottom-width: 2px;
            border-bottom-style: solid;
            border-bottom-color: ${props => props.theme ==='light' ? '#f5f5f5' : 'hsla(0,0%,100%,0.2)'};
            & .title-section {
                font-weight: bold;
                font-size: 14px;
            }
            &.choose_mode {
                .myForm {
                    flex-direction: ${props => ['ar', 'ur', 'ug', 'fa'].includes(props.site_lang) ? 'row-reverse' : 'row'};
                    justify-content: ${props => ['ar', 'ur', 'ug', 'fa'].includes(props.site_lang) ? 'flex-end' : 'flex-start'};
                    label {
                        margin: 0 5px;
                        & > svg.sun_icon {
                            color ${props => props.themeStyle.all.yellowColor};
                        }
                    }
                }
            }
            &.choose_language {
                form {
                    text-align: ${props => ['ar', 'ur', 'ug', 'fa'].includes(props.site_lang) ? 'right' : 'left'};
                    select {
                        text-align: ${props => ['ar', 'ur', 'ug', 'fa'].includes(props.site_lang) ? 'right' : 'left'};
                    }
                }
            }
        }
        & .signIn_signUp {
            padding: 20px;
            border-bottom-width: 2px;
            border-bottom-style: solid;
            border-bottom-color: ${props => props.theme ==='light' ? '#f5f5f5' : 'hsla(0,0%,100%,0.2)'};
            a {
                text-decoration: none;
                font-size: 16px;
                color: ${props => props.themeStyle.all.mainColor};
                margin-bottom: 15px;
            }
        }
        & .logout {
            padding: 20px;
            text-align: start;
            button {
                color: ${props => props.themeStyle.all.redColor};
                & .logout_text {
                    margin: 0 8px;
                }
            }
        }
        & > div:last-of-type {
            border-bottom: 0;
        }
    }
`;

const showup = keyframes`
    0% {
        opacity: 0;
        transform: scale(0);
    }

    100% {
        opacity: 1;
        transform: scale(1);
    }
`;

export const CloseBtn = styled.button`
    position: absolute;
    top: 20px;
    ${props => ['ar', 'ur', 'ug', 'fa'].includes(props.site_lang) ? 'left' : 'right'}: 250px;
    color: #fff;
    cursor: pointer;
    transition: all 1s ease-in-out;
    z-index: 9999999;
    @media (max-width: 350px) {
        ${props => ['ar', 'ur', 'ug', 'fa'].includes(props.site_lang) ? 'left' : 'right'}: 70%;
    }
    &.show {
        animation: ${showup} 0.3s ease-in-out;
    }
`;