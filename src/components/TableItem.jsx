import PropTypes from 'prop-types';
export const TableItem = ({title, length, rating, genre, awards}) => {
  return (
    <tr>
        <td>{title}</td>
        <td>{length}</td>
        <td>{rating}</td>
        <td>{genre.name}</td>
        <td>{awards}</td>
    </tr>
  );
};

TableItem.propTypes =  {
    title : PropTypes.string,
    length : PropTypes.number,
    rating : PropTypes.string,
    genre : PropTypes.string,
    awards : PropTypes.number,
}
TableItem.defaultProps = {
    genre : 'Sin género asignado'
}

