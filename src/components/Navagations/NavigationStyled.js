import styled from 'styled-components';

export const NavigationStyled = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 65px;
    background-color: ${props => props.themeStyle.dark.secondaryColor};
    z-index: 99;
    .content .setting {
        color: ${props => props.themeStyle.all.whiteColor};
        cursor: pointer;
    }
`;