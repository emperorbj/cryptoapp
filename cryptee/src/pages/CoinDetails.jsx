
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import LineChart from "@/components/LineChart";
import "@lottiefiles/lottie-player";
import {Link2Icon} from "lucide-react"

const CoinDetails = () => {
    const { id } = useParams();
    const [coin, setCoin] = useState(null);
    useEffect(() => {
        const fetchCoinDetails = async () => {
            const response = await fetch(
                `https://api.coingecko.com/api/v3/coins/${id}`
            );
            const data = await response.json();
            setCoin(data);
            console.log(data);

        };

        fetchCoinDetails();
    }, [id]);


    const formatNumber = (num) => {
        return num.toLocaleString();
    };


    return (
        <div>
            {/* details container flex flex-col md:flex-row  gap-9  */}
            <div className="h-screen mt-20 flex justify-center">
                {coin ? (
                    <div className="w-full mx-5 h-[500px] md:h-[450px] md:mx-14 grid grid-cols-1 
                gap-4 md:grid-cols-2">
                    {/* Coin details */}
                        <div className=" shadow-md rounded-md">
                            <div className="flex items-center gap-2">
                                <img className="ml-5 w-32 h-32" src={coin.image.large} alt={coin.name} />
                                <h2 className="text-2xl dark:text-sky-500">{coin.symbol}</h2>
                            </div>
                            <div className="overflow-y-auto p-5 dark:text-sky-500">
                                <p>
                                    {coin.description.en ? (
                                        `${coin.description.en.slice(0, 500)}...`
                                    ) : (
                                        'No description available.'
                                    )}
                                </p>
                            </div>
                            <Link className="flex items-center gap-2" to={coin.links.homepage}>
                                    <p className="ml-5 ">Official link</p>
                                    <div className="w-10 flex items-center justify-center 
                                    rounded-full bg-purple-400 dark:bg-sky-500 h-10">
                                    <Link2Icon/>
                                    </div>
                            </Link>
                            <div className="p-5">
                                    <h3 className="text-lg font-semibold">Market Cap (USD):</h3>
                                    <p>${formatNumber(coin.market_data.market_cap.bmd)}</p>
                            </div>
                        </div>
                        {/* coin chart */}
                        <div className="">
                            <p className="mt-4 dark:text-sky-500">Current Price: ${coin.market_data.current_price.usd}</p>
                            <LineChart id={id} />
                        </div>
                    </div>
                ) :
                    (
                        <div className="flex items-center justify-center">
                            <lottie-player
                                class='mt-0 md:mt-12 w-64 h-64'
                                autoplay
                                loop
                                mode="normal"
                                src="https://assets7.lottiefiles.com/packages/lf20_ikaawl5v.json"
                            >
                            </lottie-player>
                        </div>
                    )}
            </div>
        </div>
    )
}

export default CoinDetails
