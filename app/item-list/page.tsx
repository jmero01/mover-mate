import prisma from "@/lib/prisma";
import { ShowItem } from "@/components/item-card";

async function ListItem() {
  const items = await prisma.item.findMany();
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {items.map((item) => (
        <ShowItem item={item} key={item.id} />
      ))}
    </div>
  );
}

export default ListItem;
