const { OpenAI } = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const getSuggestionsFromAI = async (resumeText) => {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a resume reviewer. Analyze the resume content and provide helpful improvement suggestions.',
        },
        {
          role: 'user',
          content: resumeText,
        },
      ],
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error('AI suggestion error:', error);
    return 'AI feedback generation failed.';
  }
};

module.exports = { getSuggestionsFromAI };
