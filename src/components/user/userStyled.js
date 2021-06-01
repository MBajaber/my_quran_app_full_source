import styled from 'styled-components';

export const UserStyled = styled.div`
    & .img_logo {
        width: 35px;
        height: 35px;
        overflow: hidden;
        background-color: ${props => props.theme === 'light' ? props.themeStyle.all.grayColor : props.themeStyle.all.whiteColor};
        img {
            object-fit: cover;
        }
        & > svg {
            color: ${props => props.theme === 'light' ? props.themeStyle.all.whiteColor : props.themeStyle.all.blackColor}
        }
    }
    & .useName {
        font-size: 14px;
        font-weight: bold;
        color: ${props => props.themeStyle[props.theme].textNormal};
    }
`;