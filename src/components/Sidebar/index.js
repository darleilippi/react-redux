import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as CourseActions from '../../store/actions/course';

function Sidebar( { modules, activeLesson, toggleLesson } ) {
    return (
        <aside>
            { modules.map(module => (
                <div className='module-item' key={module.id}>
                    <strong>{ module.title }</strong>
                    <ul className='module-lessons'>
                        {module.lessons.map(lesson => (
                            <li key={lesson.id} className={( activeLesson && activeLesson.id === lesson.id ) ? 'active' : ''} onClick={() => toggleLesson(module, lesson)}>
                                {lesson.title}
                            </li>
                        ))}
                    </ul>
                </div>
            )) }
        </aside>
    );
}

const mapStateToProps = state => ({
    modules: state.course.modules,
    activeLesson: state.course.activeLesson
});

/*
const mapDispatchToProps = dispatch => ({
    toggleLesson: (module, lesson) => dispatch(CourseActions.toggleLesson(module, lesson))
});
é o mesmo que utilizar o bindActionCreators, pois tanto a assinatura do método, quanto os parametros são iguais
*/
const mapDispatchToProps = dispatch =>
    bindActionCreators(CourseActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);