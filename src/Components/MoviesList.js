
import MovieCard from "./MovieCard"

const MoviesList=({movies,inpF,rateF})=>{
   const x =  movies.filter(movie => movie.title.toUpperCase().includes(inpF.toUpperCase()) && movie.rating >= rateF).map(movie => <MovieCard movie={movie}/>)
    return(
        
        <div className="MoviesList">
            
            {
               x.length ?   x : <h1>Not Found</h1>
            }
            
        </div>
     
    )
}

export default MoviesList