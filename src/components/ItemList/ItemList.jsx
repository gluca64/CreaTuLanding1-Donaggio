import Item from '../Item/Item';

export default function ItemList({ products = [] }) {
  return (
    <div className="flex flex-wrap -m-3">
      {products.map(product => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
}