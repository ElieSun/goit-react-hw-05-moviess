import { useState, useEffect  } from "react";
import { useSearchParams } from "react-router-dom";
import { getMovieByQuery } from "services/apiService";
import { MoviesList } from "components/MoviesList/MoviesList";
import { Loader } from "components/Loader/Loader";

const Movies = () => {
    const [query, setQuery] = useState(' ');
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const searchQuery = searchParams.get('query');
        if (!searchQuery){
            return; 
        } 

        const fetchMoviesByQuery = async () => {
            try {
              const moviesByQuery = await getMovieByQuery(
                searchQuery.trim().toLowerCase()
              );
              if (!moviesByQuery.length) {
                throw new Error('Bad Query');
              }
              setMovies(moviesByQuery);
            } catch (error) {
              console.error(error);
            } finally {
              setIsLoading(false);
              setQuery(searchQuery.trim().toLowerCase());
            }
          };

          fetchMoviesByQuery();
        }, [searchParams]);

        // getMovieByQuery(searchQuery)
        // .then(setMovies)
        // .finally(() => {
        //     setIsLoading(false);
        //     setQuery(searchQuery);
        // });
    // },[searchParams ])

    const  handleSubmit = evt => {
        evt.preventDefault();  
        setIsLoading(true);
        setSearchParams({ query });
    };

    const handleChange = evt => {
        setQuery(evt.target.value);
    };

    return (
      <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" value={query} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      {isLoading && <Loader />}
      <MoviesList movies={movies} />
    </div>
    )
};

export default Movies;
