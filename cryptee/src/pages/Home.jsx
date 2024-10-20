import CoinCard from "@/components/CoinCard"
// import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react"
import "@lottiefiles/lottie-player";
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

const Home = () => {
    const [searchCoin, setSearchCoin] = useState("")
    const [coins, setCoins] = useState([])

    useEffect(() => {
        const fetchAllCoins = async () => {
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1`)
            const data = await response.json()
            setCoins(data)
            console.log(data);

        }

        fetchAllCoins()

    }, [])

    // Filter coins based on name
    const filteredCoins = coins.filter((coin) =>
        coin.name.toLowerCase().includes(searchCoin.toLowerCase())
    );

    // Handle search input changes
    const handleSearchChange = (event) => {
        setSearchCoin(event.target.value);
    };


    return (
        <div className="">
            {/* <Navbar /> */}
            <div className="hidden">
                <Sidebar />
            </div>
            {/* Welcome page */}
            <div className="">
                <div className="mt-32 flex items-center justify-center">
                    <h2 className="text-2xl font-semibold">Welcome to the{" "}<span className="text-purple-400 font-bold">Crypto app</span></h2>
                </div>

                {/* search bar */}
                <form className="flex gap-4 my-5 items-center justify-center">
                    <Input value={searchCoin} // Bind input value to search term
                        onChange={handleSearchChange} className='w-fit py-3 px-10 shadow-md' placeholder='search your best coin' />
                    <Button className="bg-purple-400 flex items-center justify-center shadow-sm p-2 rounded-full h-[36px] w-[36px]">
                        <SearchIcon className="h-4 w-4" />
                    </Button>
                </form>

                {/* coin card display */}
                <div className="mx-8 gap-3 md:gap-5 md:mx-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {filteredCoins.length > 0 ? (
                        filteredCoins.map((coin) => (
                            <Link key={coin.id} to={`/coin-details/${coin.id}`}>
                                <CoinCard coin={coin} />
                            </Link>
                        ))
                    ) : (
                        <p className="col-span-full text-center text-lg">No coins found</p>
                    )}
                </div>

                {/* lower section */}
                <section className="flex items-center justify-center">
                    <div className="mx-2 mt-14 md:mt-8 md:mx-14 flex flex-col 
                    md:flex-row gap-5 md:gap-20 items-center">
                        <div className="flex items-center justify-center">
                            <h2 className="text-2xl md:text-3xl font-semibold">The Best{" "}<span className="text-purple-400 font-bold">Decentralized</span> platform</h2>
                        </div>
                        <div>
                            <lottie-player
                                class='mt-0 md:mt-12 w-72 h-72'
                                autoplay
                                loop
                                mode="normal"
                                src="https://assets7.lottiefiles.com/packages/lf20_ikaawl5v.json"
                            >
                            </lottie-player>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Home

