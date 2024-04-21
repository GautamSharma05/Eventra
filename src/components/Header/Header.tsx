import Link from "next/link";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="bg-white">
      <div className="flex justify-center gap-3 md:justify-end mr-3 py-3">
        <Button className="w-[180px]" variant="outline">
          <Link href="/login">Login</Link>
        </Button>
      </div>
      <nav className="flex flex-col md:flex-row items-center justify-around pb-4">
        <h1 className="font-semibold text-xl">
          <Link href="/">Eventra</Link>
        </h1>
        <ul className="flex flex-row gap-2 md:flex-row  md:gap-12 mx-6 text-sm ">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/venue">Venue</Link>
          </li>
          <li>
            <Link href="/suppliers">Suppliers</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/media">Media</Link>
          </li>
          <li>
            <Link href="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
