import styled from 'styled-components';

export const HeaderTitleStyled = styled.div`
    background-color: ${props => props.theme === 'light' ? props.themeStyle.all.whiteColor : '#535353'};
    border-bottom: 1px solid ${props => props.theme === 'light' ? '#d9dde2' : 'hsla(0,0%,100%,0.2)'};
    padding: 40px 20px;
    text-align: start;
    transition: all 0.3s ease-in-out;
    .content {
        width: 80%;
        background-color: ${props => props.themeStyle.all.mainColor};
        height: 95%;
        margin: auto;
        padding: 40px;
        border-radius: 15px;
        color: #FFF;
        @media (max-width: 767px) {
            width: 90%;
        }
        .book_logo {

        }
        .text-image {
            img {
                width: 240px;;
            }
        }
    }
`;