import React from 'react';
import './imamBoxs.css';
import LetterSection from '../letters/letterSection';
import ShikhNames from '../shikhNames/shikhNames';
import { connect } from 'react-redux';

const ImamBoxs = props => {
    let allElementsInSection = [];
    props.site_language && props.site_language.complete_quran !== null && props.site_language.suras !== null && props.boxes.map(box => {
        if(props.search === '') {
            if(['select rewaya', 'all'].includes(props.chooseSelect)) {
                return allElementsInSection.push (
                    <ShikhNames
                        clicked={() => props.clickedImamm(box)}
                        key={box.id}
                        link={box.Server}
                        text={box.name}
                        title={+box.count === 114 && props.site_language && props.site_language.complete_quran !== null && props.site_language.suras !== null ? props.site_language.complete_quran : `${+box.count} ${props.site_language.suras}`}
                        count={+box.count}
                        suras={box.suras}
                        rewaya={box.rewaya}
                    />
                );    
            } else if(props.chooseSelect.toLocaleLowerCase() === box.rewaya.toLocaleLowerCase()) {
                return allElementsInSection.push (
                    <ShikhNames 
                        clicked={() => props.clickedImamm(box)}
                        key={box.id}
                        link={box.Server}
                        text={box.name}
                        title={+box.count === 114 && props.site_language && props.site_language.complete_quran !== null && props.site_language.suras !== null ? props.site_language.complete_quran : `${+box.count} ${props.site_language.suras}`}
                        count={+box.count}
                        suras={box.suras}
                        rewaya={box.rewaya}
                    />
                );
            }
        } else if(box.name.toLocaleLowerCase().includes(props.search.toLocaleLowerCase())) {
            if(props.chooseSelect === 'select rewaya' || props.chooseSelect === 'all') {
                return allElementsInSection.push (
                    <ShikhNames 
                        clicked={() => props.clickedImamm(box)}
                        key={box.id}
                        link={box.Server}
                        text={box.name}
                        title={+box.count === 114 && props.site_language && props.site_language.complete_quran !== null && props.site_language.suras !== null ? props.site_language.complete_quran : `${+box.count} ${props.site_language.suras}`}
                        count={+box.count}
                        suras={box.suras}
                        rewaya={box.rewaya}
                    />
                );    
            } else if(props.chooseSelect.toLocaleLowerCase() === box.rewaya.toLocaleLowerCase()) {
                return allElementsInSection.push (
                    <ShikhNames 
                        clicked={() => props.clickedImamm(box)}
                        key={box.id}
                        link={box.Server}
                        text={box.name}
                        title={+box.count === 114 && props.site_language && props.site_language.complete_quran !== null && props.site_language.suras !== null ? props.site_language.complete_quran : `${+box.count} ${props.site_language.suras}`}
                        count={+box.count}
                        suras={box.suras}
                        rewaya={box.rewaya}
                    />
                );
            }
        }
        return null;
    });

    return props.site_language && allElementsInSection.length > 0 ? (
        <div className='emam-section' id={`letter_${props.letter}`}>
            <LetterSection letter={props.letter} />
            <div className='emams-boxes'>
                {allElementsInSection}
            </div>
        </div>
    ) : null;
};

const mapStateToprops = state => ({
    site_language: state.lang.site_language,
    language: state.lang.language
});

export default connect(mapStateToprops)(ImamBoxs);