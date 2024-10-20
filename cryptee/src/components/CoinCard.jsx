import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"


const CoinCard = ({ coin }) => {

  const formatNumber = (num) => {
    return num.toLocaleString();
};
  return (
    <div>
      
      <div>
      
      <Card className="w-[200px] flex flex-col justify-center items-center md:w-[330px]">
        <CardHeader>
          <CardTitle className="dark:text-blue-500">{coin?.name}</CardTitle>
          <CardDescription>
            <Avatar>
              <AvatarImage src={coin?.image} alt="@shadcn" />
              <AvatarFallback>
                <div className="bg-slate-400"></div>
              </AvatarFallback>
            </Avatar>
          </CardDescription>
        </CardHeader>
        <CardContent>
        </CardContent>
        <CardFooter className="flex gap-4 justify-between">
          <h2>Price</h2>
          <Button className="dark:bg-blue-500">${formatNumber(coin?.current_price)}</Button>
        </CardFooter>
      </Card>
      </div>
      
    </div>
  )
}

export default CoinCard
