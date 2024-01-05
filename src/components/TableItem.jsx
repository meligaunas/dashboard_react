import PropTypes from 'prop-types';
export const TableItem = ({title, length, rating, genre, awards}) => {
  return (
    <tr>
        <td>{title}</td>
        <td>{length}</td>
        <td>{rating}</td>
        <td>{genre?.name}</td>
        <td>{awards}</td>
        <td>
          <div className='d-flex'>
            <button className='btn btn-sm btn-outline-success mr-3'>
             <i className="fas fa-pencil-alt" aria-hidden="true"></i> 
            </button>
            <button className='btn btn-sm btn-outline-danger'>
             <i className="fas fa-trash-alt" aria-hidden="true"></i> 
            </button>
            </div>
        </td>
    </tr>
  );
};

TableItem.propTypes =  {
    title : PropTypes.string,
    length : PropTypes.number,
    rating : PropTypes.string,
    genre : PropTypes.object,
    awards : PropTypes.number,
}
TableItem.defaultProps = {
    genre : 'Sin género asignado'
}

