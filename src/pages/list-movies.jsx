import { Card, Table } from "react-bootstrap";
import { TableItem } from "../components/TableItem";
import { useEffect, useState } from "react";
import { Loading } from "../components/Loading";

export const ListMovies = () => {
    const [movies, setMovies] = useState([]);
     const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getMovies = async() => {
          try {
            const response = await fetch('http://localhost:3001/api/v1/movies')
            const result = await response.json()

            setLoading(false);
            setMovies(result.data);

          } catch (error) {
            console.log(error);
          }  
        };
        
    getMovies();
        

    
    }, []);
   
  return (    
    <Card className="shadow mb-5" >
     <Card.Body>
     {loading ? (
                <Loading/> 
            ) : (
       <Table striped borderless >
         <thead>
            <tr>
                <th>Titulo</th>
                <th>Duración</th>
                <th>Rating</th>
                <th>Géneros</th>
                <th>Premios</th>
            </tr>
        </thead>
        <tbody>
             {
                movies.map(({id, title, length, awards, rating, genre}) => (
                    <TableItem 
                     key={id}
                     title={title}
                     length={length}
                     awards={awards}
                     rating={rating}
                     genre={genre}
                    />
                  ))    
            }
           
        </tbody>
      </Table>
        )}
   </Card.Body>
   </Card>
   
  );
};

