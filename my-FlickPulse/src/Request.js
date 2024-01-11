const key = 'd65744db07feec2c54ca3886ab371a08'

const Requests = {
    nowPlaying: `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=${key}`,
    popular: `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${key}`,
    topRated: `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${key}`,
    upcoming: `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=${key}`
}


export default Requests;