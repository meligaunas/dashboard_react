import { Card, CardBody, Col, FormControl, Row, Table } from "react-bootstrap";
import { TableItem } from "../components/TableItem";
import { useEffect, useState } from "react";
import { Loading } from "../components/Loading";
import { Paginator } from "../components/Paginator";
import { FormSearch } from "../components/FormSearch";
import { FormMovie } from "../components/FormMovie";

export const ListMovies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState();

    const getMovies = async(endpoint = "/api/v1/movies") => {
        try {
          setLoading(true);  

          const response = await fetch(`http://localhost:3001${endpoint}`);
          const result = await response.json();

          setLoading(false);
          setMovies(result.data);
          setPagination(result.meta)
        } catch (error) {
          console.log(error);
        }  
      };

    useEffect(() => {
         getMovies();
      
    }, []);

    const handlePagination = async(event,endpoint) => {
        event.preventDefault();
        getMovies(endpoint)
    }
   
  return loading ? (
        <Loading/> 
    ) : (
    <Row>
      <Col sm={12} lg={4}>
        <Card className="mb-3">
          <Card.Header>
            <Card.Title>Agregar Película</Card.Title>
          </Card.Header>
          <CardBody>
          <FormMovie/>
          </CardBody>
        </Card>
      
      </Col>
      <Col sm={12} lg={8}>
      <Card classNameName="shadow mb-5" >
     <Card.Body>
        <div className="d-flex flex-column flex-lg-row justify-content-between">
         <FormSearch
         getMovies={getMovies}
         />   
         <Paginator pagination={pagination} handlePagination={handlePagination}/>
        </div>
       <Table striped borderless responsive>
         <thead>
            <tr>
                <th>Titulo</th>
                <th>Duración</th>
                <th>Rating</th>
                <th>Géneros</th>
                <th>Premios</th>
                <th>Acciones</th>
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
                  ))}
           
        </tbody>
      </Table>
      
   </Card.Body>
   </Card>
      </Col>
    </Row>
    
 
  );
};

