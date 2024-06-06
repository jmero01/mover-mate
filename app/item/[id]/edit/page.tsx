import CreateOrEditItem from "@/components/item-form";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function generateStaticParams() {
  const items = await prisma.item.findMany({
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
  const item = await prisma.item.findFirst({
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
