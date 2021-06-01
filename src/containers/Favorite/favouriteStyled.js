import styled from 'styled-components';

export const FavouriteStyled = styled.div`
    transition: all 0.3s ease-in-out;
    .title {
        font-size: 30px;
        color: ${props => props.themeStyle.all.mainColor};
        border-${props => ['ar', 'ug', 'ur', 'fa'].includes(props.language) ? 'right' : 'left'}: 5px solid rgb(57 194 201 / 50%);
        padding-${props => ['ar', 'ug', 'ur', 'fa'].includes(props.language) ? 'right' : 'left'}: 6px;
    }
    .form form input {
        text-align: ${props => ['ar', 'ug', 'ur', 'fa'].includes(props.language) ? 'right' : 'false'};
    }
    .playlist-content {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-gap: 10px;
        flex-wrap: wrap;
        @media (max-width: 350px) {
            grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
        }
        .no-list {
            color: ${props => props.theme === 'light' ? props.themeStyle.all.mutedColor : props.themeStyle.dark.textNormal};
            padding-top: 40px;
            font-size: 20px;
        }
    }
`;


