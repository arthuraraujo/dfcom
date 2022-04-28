export default function Home({ products }) {
  return (
    <div className="container">
      <div>
        {products.data.map((product, index) => {
          return (
            <div className="card" key={index}>
              <p>{product.thumbnail}</p>
              <p>
                <img src={product.thumbnail} />
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  let res = await fetch(`${process.env.API_URL}/products`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let products = await res.json();

  return {
    props: { products },
  };
}
