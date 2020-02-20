import React from 'react';

import './styles.scss';

const LESSON = {
    PRIORITY: 'priority',
    NAME: 'name'
}

class LessonPriorityRanking extends React.PureComponent {

    defaultProps = {
        lessons: [],
        goToLesson: () => {}
    }

    renderGoToLessonBtn = (guid) => {
        return <button className="lesson-priority__go-button" onClick={() => this.goToLesson(guid)}>
            {'Go to lesson'}
        </button>
    }

    goToLesson = (guid) => {
        this.props.goToLesson(goToLesson)
    }

    renderLesson = (lesson = {}) => {
        const {
            [LESSON.PRIORITY]: priority,
            [LESSON.NAME]: name,
            [LESSON.GUID]: guid,
        } = lesson;
        return <div className="lesson-priority__lesson">
            <span
                className="lesson-priority__arrow"
                priority={priority}
                title={priority} />
            <span className="lesson-priority__name">{name}</span>
            {this.renderGoToLessonBtn(guid)}
        </div>
    }

    render() {
        const { lessons } = this.props;
        return <div className="lesson-priority">
            {lessons.map(this.renderLesson)}
        </div>
    }
}

export default LessonPriorityRanking;