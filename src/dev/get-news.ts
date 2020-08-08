

export const getNews = (key: string, sid: string, searchRequest: string): void => {
    fetch(
        `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${sid}&q=${searchRequest}`)
        .then(
            response => response.json()

        )

        .then(result => console.log(result))

}
