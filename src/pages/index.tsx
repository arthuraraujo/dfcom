type Product = {
    _id: string;
    asin: string;
    price: {
        discounted: boolean;
        current_price: number;
        currency: string;
        before_price: number;
        savings_amount: number;
        savings_percent: number;
    };
    reviews: {
        total_reviews: number;
        rating: number;
    };
    url: string;
    score: number;
    title: string;
    thumbnail: string;
};
type ApiResponse = {
    status: number;
    data: Product[];
};

export default function Home({ products }: { products: Product[] }) {
    return (
        <div className="container">
            <div>
                {products.map((product) => {
                    return (
                        <div className="card" key={product.asin}>
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

export async function getServerSideProps() {
    let res = await fetch(`${process.env.API_URL}/products`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    let response: ApiResponse = await res.json();

    return {
        props: { products: response.data },
    };
}
