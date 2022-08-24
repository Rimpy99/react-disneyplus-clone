const API_KEY = "aa8889577dd7419aa22ab3a9e5409a60";

const requests = {
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    findMovie: `?api_key=${API_KEY}&language=en-US`
}

export default requests;