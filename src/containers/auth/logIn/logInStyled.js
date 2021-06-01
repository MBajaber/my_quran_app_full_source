import styled from 'styled-components';

export const LogInStyled = styled.div`
    padding: 20px 40px;
    background-color: ${props => props.themeStyle.all.whiteColor};
    border-radius: 6px;
    .title {
        color: ${props => props.themeStyle.all.blackColor};
    }
    .login_social {
        .social_btn {
            font-weight: bold;
            color: ${props => props.themeStyle.all.whiteColor};
            padding: .400rem .75rem;
            transition: all .3s ease-in-out;
            &:hover {
                filter: brightness(110%)
            }
            &.face {
                background-color: #3b5998;
            }
            &.google {
                background-color: #ea4335;
            }
        }
        .small_message {
            color: #AAA;
        }
    }
    .my_form form {
        input {
            text-align: ${props => props.lang === 'ar' ? 'right' : 'left'};
        }
        .submit {
            position: relative;
            height: 36px;
            color: ${props => props.themeStyle.all.whiteColor};
            background-color: ${props => props.themeStyle.all.mainColor};
            transition: all .3s ease-in-out;
            font-weight: bold;
            &:hover {
                filter: brightness(110%)
            }
            cursor: ${props => !props.disabled ? 'not-allowed' : 'pointer'};
        }
        .error_msg {
            color: ${props => props.themeStyle.all.redColor};
            font-weight: bold;
            font-size: 12px;
        }
    }
    .dont_have_account a {
        text-decoration: none;
    }
`;

export const EmailStyled = styled.div`
    margin-bottom: 16px;
    input {
        border: 0;
        ${props => !props.emailTouch ? 'border-bottom: 1px solid #ddd' : props.emailValid  ? 'border-bottom: 1px solid #ddd' : 'border: 1px solid ' + props.themeStyle.all.redColor};
    }
`;

export const PasswordStyled = styled.div`
    margin-bottom: 16px;
    input {
        border: 0;
        ${props => !props.passwordTouch ? 'border-bottom: 1px solid #ddd' : props.Validatepassword  ? 'border-bottom: 1px solid #ddd' : 'border: 1px solid ' + props.themeStyle.all.redColor};
    }
`;