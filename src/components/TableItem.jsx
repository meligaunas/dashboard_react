import PropTypes from 'prop-types';
export const TableItem = ({ movie: {id, length, title, awards, rating, genre}, handleEditMovie }) => {
  return (
    <tr>
        <td>{title}</td>
        <td>{length}</td>
        <td>{rating}</td>
        <td>{genre?.name}</td>
        <td>{awards}</td>
        <td>
          <div className='d-flex'>
            <button className='btn btn-sm btn-outline-success mr-3' onClick={() => handleEditMovie(id) }>
             <i className="fas fa-pencil-alt"></i> 
            </button>
            <button className='btn btn-sm btn-outline-danger'>
             <i className="fas fa-trash-alt"></i> 
            </button>
            </div>
        </td>
    </tr>
  );
};

TableItem.propTypes =  {
    movie : PropTypes.object,
    handleEditMovie : PropTypes.func
};

TableItem.defaultProps = {
    genre : 'Sin género asignado',
};

