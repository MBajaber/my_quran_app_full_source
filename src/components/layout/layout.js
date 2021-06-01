import React, { useEffect } from 'react';
import './layout.css';
import Navigation from '../Navagations/Navigation';
import Asdie from '../aside/aside';
import HeaderTitle from '../headerTitle/headerTitle';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AudioPlayer from '../audioPlayer/audioPlayer';
import { connect } from 'react-redux';
import Sidebar from '../Navagations/sidebar/sidebar';

const Layout = props => {

    useEffect(() => {
        document.body.style.backgroundColor = `${props.themeStyle[props.theme].bg}`
    }, [props.theme]);

    return (
        <>
            <Navigation />
            <HeaderTitle />
            <Sidebar />
            <main>
                <Container>
                    <Row>
                        <Col md={4} lg={3} className='d-none d-md-block'>
                            <Asdie />
                        </Col>
                        <Col md={8} lg={9}>
                            {props.children}
                        </Col>
                    </Row>
                </Container>
                { props.isShow && <AudioPlayer /> }
            </main>
        </>
    )
};

const mapStateToProps = state => ({
    isShow: state.setting.showPlayer,
    theme: state.theme.theme,
    themeStyle: state.theme.themeStyle
});

export default connect(mapStateToProps)(Layout);