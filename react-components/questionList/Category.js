import React from "react";

const Category = ({ category, questions, submissionsByQuestion}) => {
    const totalQuestions = questions.length;
    const numOfQuestionsCorrect = questions.reduce((sum, question) => {
        return submissionsByQuestion[question.id] === 'CORRECT' ? sum + 1 : sum;
    }, 0);

    return (
        <div className="category">
            <h2>
                { category } - { numOfQuestionsCorrect } / { totalQuestions }
            </h2>
            {
                questions.map(question => (
                    <Question 
                        key={question.id}
                        question={question}
                        submissionsByQuestion={submissionsByQuestion}
                    />
                ))
            }
        </div>
    )
};

export default Category;