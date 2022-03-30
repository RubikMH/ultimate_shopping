import * as SDK from 'contentful'

const contentful = SDK.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: 'eyf7toz25uus',
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: '948xTeSPafmcxRtAntvMZQvbjlZWFHr4GvGfoVRjDEU',
})

export default contentful