import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "./ui/card";
import { Item } from "@prisma/client";
import { buttonVariants } from "./ui/button";
import { Badge } from "./ui/badge";
import DeleteItemButton from "./delete-item-button";

export function ShowItem({ item }: { item: Item }) {
  return (
    <Card
      className={`border-2 ${
        item.fragil === "no fragil" ? "" : "border-red-400"
      }`}
    >
      <CardHeader>
        <CardTitle className="flex flex-row justify-center">
          {item.room.toUpperCase()}
        </CardTitle>
        <CardContent className="flex flex-row justify-between">
          <span>Num. {item.number}</span>
          <p>{item.color}</p>
        </CardContent>
      </CardHeader>
      <CardContent className="border-white/50 border-2">
        <h3 className="text-xl">Content:</h3>
        <p>{item.content}</p>
      </CardContent>
      {item.fragil !== "no fragil" || item.hand !== "no hand on" ? (
        <CardContent className="flex flex-row justify-start gap-4 mt-2">
          {item.fragil !== "no fragil" && item.fragil ? (
            <Badge className="bg-red-500">
              <span>
                <p>{item.fragil?.toUpperCase()}</p>
              </span>
            </Badge>
          ) : null}
          {item.hand !== "no hand on" && item.hand ? (
            <Badge className="bg-orange-500">
              <span>
                <p>{item.hand}</p>
              </span>
            </Badge>
          ) : null}
        </CardContent>
      ) : null}

      <CardDescription>
        <span className="text-slate-500 p-4">
          {new Date(item.creatAt).toLocaleDateString()}
        </span>
      </CardDescription>
      <CardFooter className="flex justify-between mt-2">
        <DeleteItemButton itemId={item.id} />
        <Link
          href={`/item/${item.id}/edit`}
          className={buttonVariants({ variant: "secondary" })}
        >
          Edit
        </Link>
      </CardFooter>
    </Card>
  );
}
