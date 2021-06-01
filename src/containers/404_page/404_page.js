import React from 'react';
import Container from 'react-bootstrap/Container';
import { PageNotFound } from './404_styled';
import { connect } from 'react-redux';
import PageImage from './404_page.png';

const page_404 = props => {
    return (
        <PageNotFound themeStyle={props.themeStyle} theme={props.theme} site_lang={props.language}>
            <Container>
                <div className='img_not_found'>
                    <img className='img-responsive' src={PageImage} alt='page not found'/>
                </div>
                <div className='text_not_found text-capitalize'>
                    {props.site_language && props.site_language.server_connection_error}
                </div>
            </Container>
        </PageNotFound>
    )
}

const mapStateToProps = state => ({
    themeStyle: state.theme.themeStyle,
    theme: state.theme.theme,
    language: state.lang.language.lang,
    site_language: state.lang.site_language
});

export default connect(mapStateToProps)(page_404);