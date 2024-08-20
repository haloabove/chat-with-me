export const fromDomainResponse = (response) => {
    return response.choices[0].message.content;
} 
