import Link from "next/link";

export default function EditBlock() {
  return (
    <div>
      <Link href="/blocks/view">Go back to View</Link>
      <form>
        <div>
          <input type="text" placeholder="Block Title" />
        </div>
        <textarea placeholder="your code goes here..."></textarea>
        <button>Create</button>
      </form>
    </div>
  );
}
