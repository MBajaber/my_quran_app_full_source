import styled from 'styled-components';

export const Letter = styled.a`
    &.fancy-button {
        display: inline-block;
        margin-right: 15px;
        margin-bottom: 10px;
        font-family: "Heebo", Helvetica, Arial, sans-serif;
        font-weight: 500;
        font-size: 16px;
        letter-spacing: 0.07em;
        text-transform: uppercase;
        line-height: 24px;
        color: ${props => props.themeStyle.all.whiteColor};
        position: relative;
        &:focus {
            color: ${props => props.themeStyle.all.whiteColor};
        }
        &:hover {
            color: ${props => props.themeStyle.all.whiteColor};
            span {
                filter: brightness(0.9) contrast(1.2);
                transform: scale(0.96);
            }
            &:before {
                bottom: -3px;
                filter: blur(6px) brightness(0.8);
            }
        }
        &:active span {
            filter: brightness(0.75) contrast(1.7);
        }
        span {
            display: inline-block;
            width: 35px;
            height: 35px;
            border-radius: 50%;
            position: relative;
            z-index: 2;
            will-change: transform, filter;
            transform-style: preserve-3d;
            transition: all 0.3s ease-out;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
        }
        &:before {
            content: "";
            display: inline-block;
            height: 40px;
            position: absolute;
            bottom: -1px;
            left: 10px;
            right: 10px;
            z-index: -1;
            border-radius: 2em;
            filter: blur(14px) brightness(0.9);
            transform-style: preserve-3d;
            transition: all 0.3s ease-out;
        }
        &.bg-gradient1 {
            text-shadow: 0px 0px 1px #bf4c28;
            span,
            &:before {
                background: ${props => props.themeStyle.all.secondaryColor};
                background: -moz-linear-gradient(
                    180deg,
                    ${props => props.themeStyle.all.secondaryColor} 0%,
                    ${props => props.themeStyle.all.secondaryColor} 80%,
                    ${props => props.themeStyle.all.secondaryColor} 100%
                );
                background: -webkit-linear-gradient(
                    180deg,
                    ${props => props.themeStyle.all.secondaryColor} 0%,
                    ${props => props.themeStyle.all.secondaryColor} 80%,
                    ${props => props.themeStyle.all.secondaryColor} 100%
                );
                background: linear-gradient(180deg, ${props => props.themeStyle.all.secondaryColor} 0%, ${props => props.themeStyle.all.secondaryColor} 80%, ${props => props.themeStyle.all.secondaryColor} 100%);
            }
        }
    }
`;

export const LetterSectionStyled = styled.h3`
    font-size: 22px;
    margin-bottom: 16px;
    &.fancy-button {
        &.bg-gradient2 {
            text-shadow: 0px 0px 1px #227270;
            span,
            &:before {
                background: ${props => props.themeStyle.all.mainColor};
                background: -moz-linear-gradient(
                180deg,
                ${props => props.themeStyle.all.mainColor} 0%,
                ${props => props.themeStyle.all.mainColor} 80%,
                ${props => props.themeStyle.all.mainColor} 100%
                );
                background: -webkit-linear-gradient(
                    180deg,
                    ${props => props.themeStyle.all.mainColor} 0%,
                    ${props => props.themeStyle.all.mainColor} 80%,
                    ${props => props.themeStyle.all.mainColor} 100%
                );
                background: linear-gradient(180deg, ${props => props.themeStyle.all.mainColor} 0%, ${props => props.themeStyle.all.mainColor} 80%, ${props => props.themeStyle.all.mainColor} 100%);
            }
        }
        span {
            border-radius: 10px;
            border-bottom-left-radius: 0;
            margin-right: 0;
            color: ${props => props.themeStyle.all.whiteColor};
            padding: 2px 10px
        }
    }  
`;