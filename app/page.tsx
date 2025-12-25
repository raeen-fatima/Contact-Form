import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 font-sans dark:bg-black">
      <h1 className="text-4xl font-bold text-zinc-800 dark:text-zinc-200">Contact Form Page</h1>
      <Link href="/contact" className="ml-4 text-blue-600 hover:underline">Go to Contact</Link>
      
    </div>
  );
}
