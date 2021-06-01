import styled from 'styled-components';

export const RadioStyled = styled.div`
    .title_name {
        font-size: 28px;
        color: ${props => props.themeStyle.all.mainColor};
        border-${props => ['ar', 'ug', 'ur', 'fa'].includes(props.language) ? 'right' : 'left'}: 5px solid rgb(57 194 201 / 50%);
        padding-${props => ['ar', 'ug', 'ur', 'fa'].includes(props.language) ? 'right' : 'left'}: 6px;
    }
    .form-search {
        input {
            text-align: ${props => ['ar', 'ug', 'ur', 'fa'].includes(props.language) ? 'right' : 'left'};
        }
    }
    .radios_list {
        padding: 10px 15px;
        border-radius: 6px;
        background-color: ${props => props.themeStyle[props.theme].secondaryColor};
        box-shadow: ${props => props.themeStyle[props.theme].boxShadow};
        transition: all .3s ease-in-out;
        margin-bottom: 10px;
        .name_radio {
            margin: 0 5px;
            color: ${props => props.theme === 'light' ? '#6d6d6d' : props.themeStyle.light.secondaryColor};
        }
        &.same_link {
            background-color: ${props => props.themeStyle.all.mainColor};
            .name_radio {
                color: ${props => props.themeStyle.all.whiteColor};
            }
        }
    }
`; 