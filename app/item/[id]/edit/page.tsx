import CreateOrEditItem from "@/components/item-form";
import db from "@/lib/db";
import { redirect } from "next/navigation";


export async function generateStaticParams() {
  const items = await db.item.findMany({
    select: {
      id: true,
    },
  });
  return items.map((item) => ({ id: item.id.toString() }));
}

export default async function EditPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const item = await db.item.findFirst({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!item) {
    redirect("/");
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <CreateOrEditItem item={item} />
    </div>
  );
}
