import './ProductGrid.css';

// 상품 카테고리(9)
const products = [
  { id: 1, name: '텀블러', image: 'img_url'},
  { id: 2, name: '카페', image: 'img_url' },
  { id: 3, name: '편의점', image: 'img_url' },
  { id: 4, name: '치킨/피자', image: 'img_url' },
  { id: 5, name: '아이스크림/빙수', image: 'img_url' },
  { id: 6, name: '베이커리/도넛', image: 'img_urle' },
  { id: 7, name: '상품권/마트', image: 'img_url' },
  { id: 8, name: '뷰티/패션.건강', image: 'img_url' },
  { id: 9, name: '영화/OTT/체험', image: 'img_url' },

];

//상품 카테고리 누르면 상세 페이지로 이동
const handleProductClick=()=>{
  window.location.href='url';
}

function Product({ product }) {
  
  return (
    <div className="product" onClick={handleProductClick}>
      <img src={product.image} alt={product.name} />
      <p>{product.name}</p>
    </div>
  );
}

function ProductGrid() {
  return (
    <div className="product-grid">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;
