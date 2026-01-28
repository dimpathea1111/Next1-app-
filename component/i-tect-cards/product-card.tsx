import { productResponse } from "@/app/components/lib/type/products"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function ProductCard({
    images=[ "https://i.imgur.com/KeqG6r4.jpeg"],
    title="Shoes", 
    description="Best shoes in town",
    price=45
}:productResponse) {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src={images[0]}
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">{price}</Badge>
        </CardAction>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {description}
        </CardDescription >
      </CardHeader>
      <CardFooter>
        <Button className="w-full">View</Button>
      </CardFooter>
    </Card>
  )
}
