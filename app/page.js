import Pagy from "./week-2/page";
import Link from "next/link";

export default function MainPage() {
  return (
    <>
      <main>
        <Link href="/week-2" className="m-10">
          Week 2
        </Link>
        <Link href="/week-3" className="m-10">
          Week 3
        </Link>
      </main>
    </>
  );
}
