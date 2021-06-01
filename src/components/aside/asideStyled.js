import styled from 'styled-components';

export const AsideStyled = styled.div`
    position: ${props => props.checkPosition ? 'sticky' : 'relative'};
    ${props => props.checkPosition && 'top: 138px'};
    width: 210px;
    border-radius: 6px;
    background-color: ${props => props.theme === 'dark' ? props.themeStyle.dark.bg : props.themeStyle.all.whiteColor};
    ${props => props.theme === 'dark' && 'border: 1px solid rgba(255, 255, 255, .2)'};
    padding: 20px 0px;
    box-shadow: 0 2px 8px 0 hsl(0deg 0% 64% / 19%);
    transition: all .3s ease-in-out;
`;