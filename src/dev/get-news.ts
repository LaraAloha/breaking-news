export const getNews = (key: string, sid: string, searchRequest: string): any => {
    for (let request = 0; request < 1; request++) {
        return fetch(
            `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${sid}&q=${searchRequest}`)
            .then(
                response => response.json()
            )
            .then(result => Promise.resolve(result))
    }
}
