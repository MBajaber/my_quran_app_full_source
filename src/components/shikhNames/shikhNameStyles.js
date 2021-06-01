import styled from 'styled-components';
export const ShikhNames = styled.div`
    background-color: ${props => props.themeStyle[props.theme].secondaryColor};
    padding: 15px;
    border-radius: 7px;
    text-align: start;
    font-size: 15px;
    box-shadow: ${props => props.themeStyle[props.theme].boxShadow};
    display: flex;
    flex-direction: column;
    
    .text_name a {
        text-transform: capitalize;
        text-decoration: none;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        color: ${props => props.themeStyle.all.mainColor};
        font-weight: normal;
        &:hover {
            color: ${props => props.themeStyle.all.secondaryColor};
        }
    }
    .info {
        text-align: start;
        .suras_count {
            color: ${props => props.themeStyle.all.yellowColor};
            font-size: 18px;
            font-weight: bold;
            border-${props => ['ar', 'ur', 'ug', 'fa'].includes(props.language) ? 'right' : 'left' }: 4px solid rgb(245 180 75 / 60%);
            padding-${props => ['ar', 'ur', 'ug', 'fa'].includes(props.language) ? 'right' : 'left' }: 5px;
        }
        .count {
            padding: 4px;
            margin: 0 5px;
            font-weight: bold;
            color: #FC8472;
            font-size: 14px;
        }
    }
    .rewaya_name {
        font-size: 12px;
        color: ${props => props.theme === 'light' ? '#6d6d6d' : props.themeStyle.all.whiteColor};
        font-weight: ${props => props.theme === 'light' ? 'bold' : 'normal'};
    }
`;