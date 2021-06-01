import React, { useState, useEffect, useMemo } from 'react'
import { LogInStyled, EmailStyled, PasswordStyled, RepeatPasswordStyled } from './signupStyled';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import FormText from 'react-bootstrap/FormText';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import { googleProvider, facebookProvider, auth } from '../../../firebase';
import Loading from '../../../components/Loader/loader';
import * as authActions from '../../../store/action/authActions';

const SignIn = props => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [successForm, setSuccessForm] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [emailTouch, setEmailTouch] = useState(false);
    const [passwordTouch, setPasswordlTouch] = useState(false);
    const [repeatPasswordTouch, setRepeatPasswordTouch] = useState(false);
    const [loading, setLoading] = useState(false);


    const ValidateEmail = useMemo(() => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }, [email]);

    const Validatepassword = useMemo(() => password.length >= 6, [password]);

    const ValidateRepeatPassword = useMemo(() => password.length > 0 && repeatPassword.length > 0 && password === repeatPassword, [password, repeatPassword]);

    useEffect(() => {
        if(email.length === '' && password.length === '' && repeatPassword.length === '') {
            setSuccessForm(false);
        } else if(email.length > 0 && password.length > 0 && repeatPassword.length > 0) {
            if(ValidateEmail && Validatepassword && ValidateRepeatPassword) {
                setSuccessForm(true);
            } else {
                setSuccessForm(false);
            }
        }
    }, [ValidateEmail, Validatepassword, ValidateRepeatPassword]);
    
    const changeEmailHandler = (e) => {
        setEmailTouch(true);
        setEmail(e.target.value);
    };
    
    const changePasswordHandler = (e) => {
        setPasswordlTouch(true);
        setPassword(e.target.value);
    }
    
    const changeRepeatPasswordHandler = (e) => {
        setRepeatPasswordTouch(true);
        setRepeatPassword(e.target.value);
    }
    
    const submitHandler = (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMsg('');
        auth.createUserWithEmailAndPassword(email, password)
        .then(userAuth => {
            props.login({
                name: userAuth.user.displayName,
                photo: userAuth.user.photoURL
            });
            setEmail('');
            setPassword('');
            setRepeatPassword('');
            setEmailTouch(false);
            setPasswordlTouch(false);
            setRepeatPasswordTouch(false);
            setLoading(false);
            props.history.push('/');
        }).catch(error => {
            setPassword('');
            setRepeatPassword('');
            setErrorMsg(error.message);
            setLoading(false);
        });
    }

    const facebookHandler = () => {
        setLoading(true);
        setErrorMsg('');
        auth.signInWithPopup(facebookProvider)
        .then(user => {
            props.login({
                name: user.user.displayName,
                photo: user.user.photoURL
            });
            setPassword('');
            setRepeatPassword('');
            setEmail('');
            setEmailTouch(false);
            setPasswordlTouch(false);
            setRepeatPasswordTouch(false);
            setLoading(false);
            props.history.push('/');
        }).catch(error => {
            setPassword('');
            setRepeatPassword('');
            setErrorMsg(error.message);
            setLoading(false);
        });
    }
    
    const googleHandler = () => {
        setLoading(true);
        setErrorMsg('');
        auth.signInWithPopup(googleProvider)
        .then(user => {
            props.login({
                name: user.user.displayName,
                photo: user.user.photoURL
            });
            setEmail('');
            setPassword('');
            setRepeatPassword('');
            setEmailTouch(false);
            setPasswordlTouch(false);
            setRepeatPasswordTouch(false);
            setLoading(false);
            props.history.push('/');
        }).catch(error => {
            setPassword('');
            setRepeatPassword('');
            setErrorMsg(error.message);
            setLoading(false);
        });
    }

    return (
        <LogInStyled themeStyle={props.themeStyle} disabled={successForm} lang={props.lang}>
            <h4 className='title text-capitalize mb-3'>{props.lang === 'ar' ? 'اشتراك' : 'Sign up'}</h4>
            {errorMsg && <Alert variant='danger'>{errorMsg}</Alert>}
            <div className='login_social text-center mb-4'>
                <Button onClick={facebookHandler} className='social_btn face text-capitalize d-block mb-2 w-100 border-0'>Facebook</Button>
                <Button onClick={googleHandler} className='social_btn google text-capitalize d-block mb-3 w-100 border-0'>Google</Button>
                <span className='small_message'>{props.lang === 'ar' ? 'او اشتراك البريد الإلكتروني' : 'or sign up with Email'}</span>
            </div>
            <div className='my_form'>
                <Form onSubmit={submitHandler}>
                    <EmailStyled emailValid={ValidateEmail} emailTouch={emailTouch} themeStyle={props.themeStyle}>
                        <FormControl type='email' placeholder={props.lang === 'ar' ? 'البريد الإلكتروني' : 'Email'} value={email} onChange={e => changeEmailHandler(e)} dir='auto' />
                    </EmailStyled>
                    <PasswordStyled Validatepassword={Validatepassword} passwordTouch={passwordTouch} themeStyle={props.themeStyle}>
                        {!Validatepassword && passwordTouch && <FormText className='error_msg pass text-capitalize mb-1'>{props.lang === 'ar' ? 'على الأقل 6 خانات' : 'at leats 6 Characeters'}</FormText>}
                        <FormControl type='password' placeholder={props.lang === 'ar' ? 'الرقم السري' : 'Password'} value={password} onChange={e => changePasswordHandler(e)}  dir='auto' />
                    </PasswordStyled>
                    <RepeatPasswordStyled ValidateRepeatPassword={ValidateRepeatPassword} repeatPasswordTouch={repeatPasswordTouch} themeStyle={props.themeStyle}>
                        {!ValidateRepeatPassword && repeatPasswordTouch && <FormText className='error_msg pass text-capitalize mb-1'>{props.lang === 'ar' ? 'اعد كلمة السر' : 'Repeat Password'}</FormText>}
                        <FormControl type='password' placeholder={props.lang === 'ar' ? 'اعد كلمة السر' : 'Repeat Password'}  value={repeatPassword} onChange={e => changeRepeatPasswordHandler(e)}  dir='auto' />
                    </RepeatPasswordStyled>
                    <Button type='submit' disabled={!successForm} className='submit text-capitalize border-0 mt-4 w-100'>
                        {loading ? <Loading height={30} width={25} size={15} /> : 'login'}
                    </Button>
                </Form>
            </div>
            <div className='have_account mt-5 text-center'>
                {
                    props.lang === 'ar' 
                    ? <p>إذا كان لديك حساب <Link to='/login'>تسجيل الدخول</Link></p>
                    : <p>if you have account <Link to='/login'>Log in</Link></p>
                }
            </div>
        </LogInStyled>
    )
}

const mapStateToProps = state => ({
    themeStyle: state.theme.themeStyle,
    lang: state.lang.language.lang
});

const mapDispatchToProps = dispatch => ({
    login: () => dispatch(authActions.login())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);