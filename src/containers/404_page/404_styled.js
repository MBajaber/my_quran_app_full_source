import styled from 'styled-components';
export const PageNotFound = styled.div`
    background-color: ${props => props.themeStyle[props.theme].bg};
    border-radius: 6px;
    padding: 40px;
    text-align: center;
    .img_not_found {
        max-width: 500px;
        margin: auto;
    }
    .text_not_found {
        font-family: ${props => props.site_lang === 'ar' ? `"Cairo", sans-serif` :`'Reggae One', cursive`};
        margin-top: 50px;
        font-size: 35px;
        font-weight: bold;
        color: ${props => props.themeStyle[props.theme].textNormal};
        @media (max-width: 676px) {
            font-size: 22px;
        }
        @media (max-width: 400px) {
            font-size: 18px;
        }
    }
`;