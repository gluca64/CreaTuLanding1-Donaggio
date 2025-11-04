import PropTypes from 'prop-types';
import Item from '../Item/Item';

ItemList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      stock: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      description: PropTypes.string
    })
  )
};

export default function ItemList({ products = [] }) {
  return (
    <div className="flex flex-wrap -m-3">
      {products.map(product => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
}