

const url = 'https://test-api-fake-dummy.herokuapp.com/faq';

export const getTestData = async () => {
    const response = await fetch(url).then((response) => response.json());

    if (response.code) {
        return response.message;
    }
    return response;   
}