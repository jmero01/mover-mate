import { removeItem } from "@/actions/items-actions";
import { Button } from "./ui/button";

function DeleteItemButton({ itemId }: { itemId: number }) {
  return (
    <form action={removeItem}>
      <input type="hidden" name="itemId" value={itemId} />
      <Button variant="destructive">Delete</Button>
    </form>
  );
}

export default DeleteItemButton;
