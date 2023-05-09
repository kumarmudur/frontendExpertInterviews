import React, { useEffect, useState } from "react";

const QUESTIONS_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/questions';
const SUBMISSIONS_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/submissions';

const useQuestionsAndSubmissions = () => {
    const [questions, setQuestions] = useState([]);
    const [submissions, setSubmissions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const [questionResponse, submissionResponse] = await Promise.all([
                fetch(QUESTIONS_API_BASE_URL),
                fetch(SUBMISSIONS_API_BASE_URL),
            ]);
            const [questions, submissions] = await Promise.all([
                questionResponse.json(),
                submissionResponse.json(),
            ]);

            setQuestions(questions);
            setSubmissions(submissions);
        };

        fetchData();
    }, []);
    return [questions, submissions];
};

