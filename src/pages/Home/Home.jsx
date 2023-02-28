import { getTrendingMovies } from "services/apiService";
import { useEffect, useState } from "react";
import { MoviesList } from "components/MoviesList/MoviesList";

const Home = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const fetchTrending = async () => {
          try {
            const trendngMovies = await getTrendingMovies();
            setMovies(trendngMovies);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchTrending();
      }, []);
    
      return (
        <div>
          <h1>Trening today</h1>
          <MoviesList movies={movies} />
        </div>
      );
    };
    
    export default Home;