import React from 'react';

import { connect } from 'react-redux';

function Video({ activeModule, activeLesson }) {
    return (
        <div className='video-container'>
            <header>
                <strong> Modulo { activeModule.title } </strong>
                <span> Aula { activeLesson.title } </span>
            </header>

            <div className='video-content'>

            </div>
        </div>
    );
}

export default connect(state => ({
    activeModule: state.course.activeModule,
    activeLesson: state.course.activeLesson
}))(Video);