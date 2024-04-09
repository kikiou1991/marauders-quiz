"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex flex-row mt-5">
      <div className="ml-10">Logo</div>
      <div className="ml-auto mr-10 flex flex-row gap-5">
        <Link href="/play">Play</Link>
        {pathname !== "/auth/login" && <Link href="/auth/login">Login</Link>}
        {pathname !== "/auth/register" && (
          <Link href="/auth/register">Register</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
