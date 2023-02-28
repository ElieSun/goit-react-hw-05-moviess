import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "services/apiService";
import { BASE_IMG_URL } from "services/constants";
import { Loader } from 'components/Loader/Loader';
import placeholder from '../../Img/placeholder.webp';
import { IMG, List, ListItem, TextWrapper } from './Cast.styled';

const Cast = ( ) => {
    const [cast, setCast] = useState([]);
    const { id } = useParams();
    const [isloading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        const fetchCast = async () => {
          try {
            const moviesCast = await getMovieCast(id);
            setCast(moviesCast);
          } catch (error) {
            console.error(error)
          } finally {
            setIsLoading(false)
          }
        }
        
        fetchCast()
      }, [id]);

    // // useEffect(() => {getMovieCast(id).then(setCast);}, [id]); 
    // useEffect(() => {
    //     getMovieCast(id).then(setCast); 
    //     // console.log(cast);
    //     // const result = getMovieCast(id)
    //     // setCast(result);
    //     // console.log(cast, 'person') 
    //     // cast.map(person => {
    //     //     console.log(person, 'person') 
    //     // })
    // }, [id]); 
    return (
        <div>
      {isloading ? (
        <Loader/>
      ):(<List>
        {cast.map(({ order, profile_path, name, character }) => (
          <ListItem key={order}>
            <IMG
              src={profile_path ? BASE_IMG_URL + profile_path : placeholder}
              alt={name}
            />
            <TextWrapper>
              <p>{name}</p>
              <p>Character: {character}</p>
            </TextWrapper>
          </ListItem>
        ))}
      </List>)}
      
    </div>
        )
}; 

export default Cast;