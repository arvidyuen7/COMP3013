import Link from "next/link";

export default function ViewBlock() {
  return (
    <div>
      <Link href="/">Go back Home</Link>
      <Link href="/blocks/edit">Edit the code block</Link>
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
