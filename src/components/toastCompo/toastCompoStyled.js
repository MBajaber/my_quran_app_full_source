import styled, { keyframes } from 'styled-components';

const showUp = keyframes`
    0% {
        transform: scale(0);
        ${props => ['ar', 'ur', 'ug', 'fa'].includes(props.site_lang) ? 'right' : 'left'}: -120vw;
        opacity: 0;
    }
    100% {
        transform: scale(1);
        ${props => ['ar', 'ur', 'ug', 'fa'].includes(props.site_lang) ? 'right' : 'left'}: 20px;
        opacity: 1;
    }
`;

export const ToastCompoStyled = styled.div`
    position: fixed;
    bottom: 100px;
    text-align: start;
    ${props => ['ar', 'ur', 'ug', 'fa'].includes(props.site_lang) ? 'right' : 'left'}: 20px;
    box-shadow: 0 2px 8px 0 hsl(0deg 0% 64% / 19%);
    background-color: #fff;
    padding: 5px 0 10px;
    animation: ${showUp} 1s ease-in-out alternate;
    color: ${props => props.themeStyle[props.theme].textNormal};
    border-radius: 6px;
    border-top: 3px solid ${props => props.myClass === 'added_item' ? '#39C2C9' : '#F5B44B'};
    .toastCompo-header {
        font-weight: bold;
        margin-bottom: 10px;
        padding: 15px 60px;
        border-bottom: 1px solid ${props => props.theme === 'light' ? '#EEE' : '#b4b4b4'};
        background-color: #fff;
        color: ${props => props.themeStyle.all.mainColor};
    }
    .toastCompo-para {
        padding: 10px 20px 0;
        font-size: 14px;
        color: ${props => props.themeStyle.all.blackColor};
    }
`;