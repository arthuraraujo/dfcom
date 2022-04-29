import { Header, Products, Footer } from "../components";

// const imageLoader = ({ src, width, quality }) => {
//   return `https://example.com/${src}?w=${width}&q=${quality || 75}`
// }

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
        <>
            <Header />
            <Products data={products} />
            {/* <Footer /> */}
        </>
    );
}

export async function getServerSideProps() {
    try {
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
    } catch (e: any) {
        console.log({ e, message: e.message });
        return [];
    }
}
