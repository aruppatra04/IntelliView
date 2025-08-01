const { GoogleGenAI } = require('@google/genai');
const { questionAnswerPromt, conceptExplainPrompt } = require('../utils/prompts');
const Question = require('../models/Question');

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// @desc    Generate interview question and answer using Gemini
// @route   POST /api/ai/generate-questions
// @access  Private
const generateInterviewQuestions = async (req, res) => {
    try {
        const { role, experience, topicToFocus, numberOfQuestions } = req.body;
        if(!role || !experience || !topicToFocus || !numberOfQuestions) {
            return res.status(400).json({ message: "Missing required fields." });
        }

        const promt = questionAnswerPromt(role, experience, topicToFocus, numberOfQuestions);
        
        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash-lite",
            contents: promt
        });

        let rawText = response.text;

        // clean it: remove ```json and ``` from beginning and end
        const cleanedText = rawText
            .replace(/^```json\s*/, "") // remove starting ```json
            .replace(/```$/, "") // remove ending ```
            .trim();
        
        // save to parse
        const data = JSON.parse(cleanedText);

        res.status(200).json(data);        
    } catch (error) {
        res.status(500).json({ 
            message: "Failed to generate questions.",
            error: error.message,
        });
    }
}

// @desc    Generate explains a interview question
// @route   POST /api/ai/generate-explanation
// @access  Private
const generateConceptExplanation = async (req, res) => {
    try {
        const { question } = req.body;

        if(!question) {
            return res.status(404).json({ message: "Missing required feilds." });
        }

        const promt = conceptExplainPrompt(question);

        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash-lite",
            contents: promt
        });

        let rawText = response.text;

        // clean it: Remove ```JSON and ``` from beginning and end
        const cleanedText = rawText
            .replace(/^```json\s*/, "")
            .replace(/```$/, "")
            .trim();

        // save to parse
        const data = JSON.parse(cleanedText);

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ 
            message: "Failed to generate questions.",
            error: error.message,
        });
    }
}

module.exports = { generateInterviewQuestions, generateConceptExplanation };