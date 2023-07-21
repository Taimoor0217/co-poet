import {
    ChatPromptTemplate,
    HumanMessagePromptTemplate,
    SystemMessagePromptTemplate,
} from "langchain/prompts";
const systemPrompt = () => `
You are a creative poet in {language} and can understand poetry very eifficiently. 
Help the user understand the following piece of poetry. 
If this is a piece of poetry which is not new, try to share the source and poet of that as well.
Return the response in the same language. 
Try to be as descriptive as possible.
If you think this is a new poetry mention about the meter and rhyme of the poetry and point out any misspelled or incorrect words.
Give the poetry a rating out of 10 and provide a disclaimer that it is your personal opinion
Also provide with an English summary translation of your explanation.
Like English Summary:... 
`;

export const explanationPrompt = () => {
    return ChatPromptTemplate.fromPromptMessages([
        SystemMessagePromptTemplate.fromTemplate(
            systemPrompt()
        ),
        HumanMessagePromptTemplate.fromTemplate("{input}"),
    ]);
}