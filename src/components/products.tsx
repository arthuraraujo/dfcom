import Image from "next/image";
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

const convertedPrice = (price: number) => {
    if (!price) return null;
    const priceWithTwoDecimals = price.toFixed(2);
    const convertedPrice = `${priceWithTwoDecimals}`.replace(/\./g, ",");
    return `R$ ${convertedPrice}`;
};

const addFavorite = (id: string) => {};
export default function Products({ data }: { data: Product[] }) {
    return (
        <>
            <section className="py-12 sm:py-16 bg-white">
                <div className="max-w-7xl px-10 mx-auto sm:text-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 my-12 sm:my-16">
                        {data &&
                            data.length > 0 &&
                            data.map((dt) => {
                                return (
                                    <>
                                        <div
                                            className="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100 p-5"
                                            key={dt.asin}
                                        >
                                            <Image
                                                src={dt.thumbnail}
                                                alt={dt.title}
                                                width={220}
                                                height={250}
                                            />
                                            <p className="mt-4">{dt.title}</p>
                                            <div className="flex items-center justify-stretch m-0 pt-0	w-full mt-4">
                                                <p className=" text-sm text-gray-500 flex-1	">
                                                    {convertedPrice(
                                                        dt.price.current_price
                                                    )}
                                                </p>
                                                <div className="flex flex-1 "></div>
                                                <button
                                                    className=" border border-gray-400 text-gray-600 font-bold py-2 px-4 rounded inline-flex items-center"
                                                    onClick={() =>
                                                        addFavorite(dt.asin)
                                                    }
                                                >
                                                    <span className="text-2xl">
                                                        &#9825; &nbsp;&nbsp;
                                                    </span>
                                                    <span>Favoritar</span>
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                );
                            })}
                    </div>
                </div>
            </section>
        </>
    );
}
