import styled from 'styled-components';

export const HomeStyled = styled.div`
    & .search_select {
        input {
            text-align: ${props => ['ar', 'ur', 'ug', 'fa'].includes(props.site_lang) ? 'right' : 'left'};
        }
        .form-select form {
            text-align: ${props => ['ar', 'ur', 'ug', 'fa'].includes(props.site_lang) ? 'right' : 'left'};
            .form-group {
                .select {
                    text-align: ${props => ['ar', 'ur', 'ug', 'fa'].includes(props.site_lang) ? 'right' : 'left'};
                    border-radius: 800px;
                    background-color: ${props => props.themeStyle.all.yellowColor};
                    border: 1px solid ${props => props.themeStyle.all.yellowColor};
                    color: #fff;
                    box-shadow: 0 2px 8px 0 rgb(247 185 82 / 41%);
                    option {
                        background-color: ${props => props.themeStyle.all.whiteColor};
                        color: ${props => props.themeStyle.all.blackColor};
                        &:disabled {
                            color: ${props => props.themeStyle.all.grayColor};
                        }
                    }
                }
            }
        }
    }
    & .show-all-names {
        text-align: start;
    }
`;