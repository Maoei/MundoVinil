import data from './data';

function App() {
  return (
    <div className="App">
      <header>
        <a href="/">Mundo Vinil</a>
      </header>
      <main>
        <h1>Nossos Produtos</h1>
        <div className="products">
          {data.products.map((product) => (
            <div className="product" key={product.url}>
              <a href={`/product/${product.url}`}>
                <img src={product.image} alt={product.name} />
              </a>
              <div className="product-info">
                <a href={`/product/${product.url}`}>
                  <p>{product.name}</p>
                </a>
                <p>
                  <strong>R${product.price}</strong>
                </p>
                <button>Adicionar ao Carrinho</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
