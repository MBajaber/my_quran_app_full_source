import React, { useEffect, useState } from 'react';
import User from '../../user/user';
import { AiFillHome, AiFillHeart } from 'react-icons/ai';
import { FiSun } from 'react-icons/fi';
import { NavLink, Link } from 'react-router-dom';
import { FaBroadcastTower } from 'react-icons/fa';
import { BsMoon } from 'react-icons/bs';
import Form from 'react-bootstrap/Form';
import { IoLogOutOutline } from 'react-icons/io5';
import { IoMdCloseCircle } from 'react-icons/io';
import { connect } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import { SidebarStyled, CloseBtn } from './sidebarStyled';
import { auth } from '../../../firebase';
import * as authActions from '../../../store/action/authActions';

import * as langaueActions from '../../../store/action/langaueActions';
import * as settingActions from '../../../store/action/settingActions';
import * as themeActions from '../../../store/action/themeActions';

const Sidebar = props => {

    const [chooseThemeValue, setChooseThemeValue] = useState(false);
    const [chooseLanguage, setchooseLanguage] = useState(props.language.lang);

    useEffect(() => {
        setChooseThemeValue(props.isThemeDark);
    }, [props.isThemeDark]);

    useEffect(() => {
        setchooseLanguage(props.language.lang);
        document.title = props.site_language && props.site_language.my_quran;
    }, [props.language, props.site_language]);

    const chooseTheme = event => {
        setChooseThemeValue(event);
        props.toggleTheme(event);
        localStorage.setItem('isThemeIsDark', JSON.stringify(event));
    };

    const chooseLanguageFunc = (event) => {
        setchooseLanguage(event);
        props.changeLanguage(event);
        localStorage.setItem('language', JSON.stringify(event));
        document.getElementsByTagName('html')[0].setAttribute('lang', event);
        if(['ar', 'ur', 'ug', 'fa'].includes(event)) {
            document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
        } else {
            document.getElementsByTagName('html')[0].setAttribute('dir', 'ltr');
        }
    }

    const classes = props.isAsideShow ? ['sidebar_menu', 'show'] : ['sidebar_menu'];
    const classesBtn = props.isAsideShow ? ['closeBtn', 'btn', 'show'] : ['closeBtn', 'btn'];

    const closeAsideByClass = (e) => {
        if(typeof(e.target.className) === 'string') {
            let classArr = e.target.className.split(' ');
            if(classArr.some(cl => cl === 'main_saidbar')) {
                props.closeAside();
            }
        }
    };

    const logout = () => {
        auth.signOut()
        .then(res => res)
        .catch(error => alert(error.message));
        props.signOut();
    }

    const data = props.site_language ? (
        <div>
            <Modal show={props.isAsideShow} animation={false} onClick={(e) => closeAsideByClass(e)}>
                <SidebarStyled theme={props.theme} themeStyle={props.themeStyle} site_lang={props.language.lang} className='main_saidbar'>
                    <div>
                        <CloseBtn className={classesBtn.join(' ')} onClick={props.closeAside} site_lang={props.language.lang}>
                            <IoMdCloseCircle size={35} color='#fff' />
                        </CloseBtn>
                        <div className={classes.join(' ')}>
                            {
                                props.user !== null 
                                ? (
                                    <div className='user_name_logo'>
                                        <User imgSize={16} userName={props.user && props.user.name} photoUrl={props.user && props.user.photo} /> 
                                    </div>
                                ) : null

                            }
                            <ul className='nav_side list-unstyled mb-0'>
                                <li className='list' onClick={props.closeAside}>
                                    <NavLink to='/' className='d-flex align-items-center' exact>
                                        <span className='nav_side_icon'>
                                            <AiFillHome size={20} />
                                        </span>
                                        <span className='nav_side_text text-capitalize'>{props.language && props.language.lang === 'ar' ? 'الرئيسية' : 'Home'}</span>
                                    </NavLink>
                                </li>
                                <li className='list' onClick={props.closeAside}>
                                    <NavLink to='/favorite' className='d-flex align-items-center'>
                                        <span className='nav_side_icon'>
                                            <AiFillHeart size={20} />
                                        </span>
                                        <span className='nav_side_text text-capitalize'>{props.site_language.favorite}</span>
                                    </NavLink>
                                </li>
                                <li className='list' onClick={props.closeAside}>
                                    <NavLink to='/radios' className='d-flex align-items-center'>
                                        <span className='nav_side_icon'>
                                            <FaBroadcastTower size={20} />
                                        </span>
                                        <span className='nav_side_text text-capitalize'>{props.site_language.radio}</span>
                                    </NavLink>
                                </li>
                            </ul>
                            <div className='text-section choose_mode m-0'>
                                <h6 className='title-section text-capitalize mb-3'>{props.language && props.language.lang === 'ar' ? 'اختر الثيمات:' : 'Choose Theme:'}</h6>
                                <Form className='d-flex align-items-center myForm'>
                                    <Form.Label><FiSun size={22} className='sun_icon' /></Form.Label>
                                    <Form.Check 
                                        type="switch"
                                        id="custom-switch"
                                        label={<BsMoon size={22} />}
                                        defaultChecked={chooseThemeValue}
                                        onChange={(e) => chooseTheme(e.target.checked)}
                                    />
                                </Form>
                            </div>
                            <div className='text-section choose_language'>
                                <h6 className='mb-3'>{props.site_language && `${props.site_language.change_language}:`}</h6>
                                <Form>
                                    <Form.Group controlId="exampleForm.SelectCustom">
                                        <Form.Control as="select" custom onChange={(e) => chooseLanguageFunc(e.target.value)} value={chooseLanguage}>
                                            <option className='text-capitalize' value='en'>English</option>
                                            <option className='text-capitalize' value='ar'>العربية</option>
                                            <option className='text-capitalize' value='fr'>Français</option>
                                            <option className='text-capitalize' value='ru'>Русский</option>
                                            <option className='text-capitalize' value='de'>Deutsch</option>
                                            <option className='text-capitalize' value='es'>Español</option>
                                            <option className='text-capitalize' value='tr'>Türkçe</option>
                                            <option className='text-capitalize' value='cn'>中文</option>
                                            <option className='text-capitalize' value='th'>ไทย</option>
                                            <option className='text-capitalize' value='ur'>اردو</option>
                                            <option className='text-capitalize' value='bn'>বাংলা</option>
                                            <option className='text-capitalize' value='bs'>Bosanski</option>
                                            <option className='text-capitalize' value='ug'>ئۇيغۇرچە</option>
                                            <option className='text-capitalize' value='fa'>فارسى</option>
                                            <option className='text-capitalize' value='tg'>Тоҷикӣ</option>
                                            <option className='text-capitalize' value='ml'>മലയാളം</option>
                                            <option className='text-capitalize' value='tl'>Tagalog</option>
                                            <option className='text-capitalize' value='id'>Indonesia</option>
                                            <option className='text-capitalize' value='pt'>Português</option>
                                            <option className='text-capitalize' value='ha'>Hausa</option>
                                            <option className='text-capitalize' value='sw'>Kiswahili</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Form>
                            </div>
                            {props.user === null && (
                                <div className='signIn_signUp d-flex justify-content-between flex-wrap'>
                                    <Link to='/login' className='text-capitalize' onClick={props.closeAside}>{props.language && props.language.lang === 'ar' ? 'تسجيل الدخول' : 'Login'}</Link>
                                    <Link to='/signup' className='text-capitalize' onClick={props.closeAside}>{props.language && props.language.lang === 'ar' ? 'اشتراك' : 'Sign up'}</Link>
                                </div>
                            )}
                            {props.user !== null && (
                                <div className='logout'>
                                    <button className='btn p-0' onClick={logout}>
                                        <IoLogOutOutline size={26} />
                                        <span className='logout_text text-capitalize'>{props.language && props.language.lang === 'ar' ? 'تسجيل خروج' : 'Logout'}</span>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </SidebarStyled>
            </Modal>
        </div>
    ) : null;
    return data;
}

const mapStateToProps = state => ({
    isAsideShow: state.setting.isAsideShow,
    theme: state.theme.theme,
    themeStyle: state.theme.themeStyle,
    isThemeDark: state.theme.isThemeDark,
    language: state.lang.language,
    site_language: state.lang.site_language,
    user: state.auth.user
});

const mapDispatchToProps = dispatch => ({
    closeAside: () => dispatch(settingActions.closeAside()),
    openAside: () => dispatch(settingActions.openAside()),
    toggleTheme: (value) => dispatch(themeActions.toggleTheme(value)),
    changeLanguage: (lang) => dispatch(langaueActions.changeLanguage(lang)),
    signOut: () => dispatch(authActions.signOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
