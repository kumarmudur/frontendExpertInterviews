import React from 'react';

const Question = ({question, submissionsByQuestion}) => {
    const submissionStatus = submissionsByQuestion[question.id];
    const statusClass = submissionStatus == null ? 'unattempted' : submissionStatus.toLowerCase().replace('-', '-');

    return (
        <div className="question">
            <div className={`status ${statusClass}`}></div>
            <h3>{question.name}</h3>
        </div>
    );
};

export default Question;