
import OpenAI from 'openai';
import { fromDomainResponse } from './from-domain.ts'

const successHandler = (response) => fromDomainResponse(response);
const errorHandler = (error) => {
    console.log('error:', JSON.parse(JSON.stringify(error)));
    return Promise.reject(error);
};

const messagesApiClient = () => {
    const openai = new OpenAI({
        apiKey: 'your-key-here',
        dangerouslyAllowBrowser: true
    });

    return {
        sendMessage: async (message) => {
            try {
                const completion = await openai.chat.completions.create({
                    messages: [{ role: 'user', content: message }],
                    model: 'gpt-3.5-turbo',
                });
                return successHandler(completion);
            } catch (error) {
                return errorHandler(error);
            }
        },
    };
};

export { messagesApiClient };
