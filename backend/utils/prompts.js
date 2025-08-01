const questionAnswerPromt = (role, experience, topicsToFocus, numberOfQuestion) => (
    `You are an AI trained to generate technical interview questions and answers.
    
    Task:
    - Role: ${role}
    - Candidate Experience: ${experience}
    - Focus Topic: ${topicsToFocus}
    - Write ${numberOfQuestion} interview question.
    - For each question, generate a detailed but beginner—friendly answer.
    - If the answer needs a code example, add a small code block inside.
    - Keep the formatting very clean.
    - Return a pure JSON array like:

    [
        {
            "question": "Question here?" ,
            "answer": "Answer here. "
        },
        ...
    ]  

    Important : Do NOT add any extra text. Only return valid JSON.
    `
);

const conceptExplainPrompt = (question) => (
    `You are an AI trained to generate explanations for a given interview question.

    Task:
    - Explain the following interview question and its concept in depth as if you're teaching a beginner developer.
    - Quesion: "${question}"
    - After the explanation, provide a short and clear title that summarizes the concept for the article or page header.
    - If the explanation includes a code example, provide a small code block.
    - Keep the formatting very clean and clear.
    - Returen the result as a valid JSON object in the following formate:

    {
        "title": "Short title here?",
        "explanation": "Explanation here"
    }

    Important: Do NOT add extra text outside the JSON formate. Only return valid JSON.
    `
);

module.exports = { questionAnswerPromt, conceptExplainPrompt };