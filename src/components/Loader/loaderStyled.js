import styled, { keyframes } from 'styled-components';

const ldsRing = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const LoaderStyled = styled.div`
    display: inline-block;
    position: absolute;
    width: ${props => props.width ? props.width +'px' : '80px'};
    height: ${props => props.height ? props.height +'px' : '80px'};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    & > div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: ${props => props.size ? props.size +'px' : '80px'};
        height: ${props => props.size ? props.size +'px' : '80px'};
        margin: 8px;
        border: 8px solid #fff;
        border-radius: 50%;
        animation: ${ldsRing} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: ${props => props.themeStyle.all.secondaryColor} transparent transparent transparent;
        &:nth-child(1) {
            animation-delay: -0.45s;
        }
        &:nth-child(2) {
            animation-delay: -0.3s;
        }
        &:nth-child(3) {
            animation-delay: -0.15s;
        }
    }
`;