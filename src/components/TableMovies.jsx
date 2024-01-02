import { Card, Table } from "react-bootstrap"
import { TableItem } from "./TableItem"

export const TableMovies = () => {

    const movies = [
        {
            id: crypto.randomUUID(),
            title : "Rambo",
            length : 120,
            rating : 9,
            genres : [
                'acción',
                'bélico'
            ],
            awards : 12
        },
        {
            id: crypto.randomUUID(),
            title : "Mi pobre angelito",
            length : 110,
            rating : 8,
            genres : [
                'comedia',
                'drama'
            ],
            awards : 2
        },
        {
            id: crypto.randomUUID(),
            title : "Batman",
            length : 130,
            rating : 15,
            genres : [
                'acción',
                'aventura'
            ],
            awards : 20
        },
        {
            id: crypto.randomUUID(),
            title : "Desgenerada",
            length : 80,
            rating : 5,
            awards : 0,
            genres : []
        }
    ]

  return (
    <Card className="shadow mb-5">
    <Card.Body>
       <Table striped borderless>
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
            movies.map(({id, title, length, awards, rating, genres}) => <TableItem key={id} title={title} length={length} awards={awards} rating={rating} genres={genres} />)
           }
        </tbody>
        </Table>
   </Card.Body>
   </Card>
  )
}
