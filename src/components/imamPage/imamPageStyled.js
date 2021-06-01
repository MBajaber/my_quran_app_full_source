import styled from 'styled-components';

export const ImamPageStyled = styled.div`
    text-align: start;
    transition: all .3s ease-in-out;
    .top-search-rewaya {
        form {
            width: 100%;
            .search-filed {
                font-size: 14px;
                padding: 10px 18px;
                height: 38px;
                color: ${props => props.themeStyle.all.blackColor};
                text-align: ${props => ['ar', 'ug', 'ur', 'fa'].includes(props.site_lang) ? 'right' : 'left'};
            }
        }  
    }
    .all-surah-name {
        margin: 30px 0;
        display: grid;
        grid-gap: 12px;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        @media (max-width: 350px) {
            grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));  
        }
    }
`;