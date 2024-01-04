import { LastMovieInDb } from '../components/LastMovieInDb';
import { GenresInDb } from '../components/GenresInDb';
import { ContentRowMovies } from '../components/ContentRowMovies';

export const Home = () => {
  return (
    <>
    <ContentRowMovies />
    <div className="row">
        
         <LastMovieInDb/>

         <GenresInDb/>
    </div>
    </>
  );
};
