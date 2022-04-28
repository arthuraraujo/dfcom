import { signIn, signOut, useSession } from "next-auth/react";

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
    const { data: session } = useSession();
    return (
        <div className="container">
            {session ? (
                <>
                    Signed in as {session.user && session.user.email} <br />
                    <button onClick={() => signOut()}>Sign out</button>
                </>
            ) : (
                <>
                    Not signed in <br />
                    <button onClick={() => signIn()}>Sign in</button>
                </>
            )}
            <div>
                {products.length > 0 &&
                    products.map((product) => {
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
