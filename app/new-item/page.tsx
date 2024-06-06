import CreateOrEditItem from "@/components/item-form";

function AddNewItem() {
  const defaultItem = {
    id: 0,
    number: "",
    color: "",
    content: "",
    room: "",
    fragil: "",
    hand: "",
    creatAt: new Date(),
    updateAt: new Date(),
  };
  return (
    <div className="flex justify-center items-center">
      <CreateOrEditItem item={defaultItem} />
    </div>
  );
}

export default AddNewItem;
