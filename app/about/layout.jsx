import Link from "next/link";

export default function AboutLayout({ children }) {
  return (
    <div>
      <Link href="/" className="border-2 border-red-500 rounded-xl">
        Go to home
      </Link>
      {children}
    </div>
  );
}
