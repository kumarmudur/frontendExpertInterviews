import React from 'react';

import Category from './Category';

const QUESTIONS_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/questions';
const SUBMISSIONS_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/submissions';

export default function QuestionList() {
  const [questions, submissions] = useQuestionsAndSubmissions();
  const questionsByCategory = getQuestionsByCategory(questions);
  const submissionsByQuestion = getSubmissionsByQuestion(submissions);
  const categories = Object.keys(questionsByCategory;)

  return (
    <>
      {
        categories.map(category => (
            <Category 
                key={category}
                category={category}
                questions={questionsByCategory[category]}
                submissionsByQuestion={submissionsByQuestion}
            />
        )
        )
      }
    </>
  );
}