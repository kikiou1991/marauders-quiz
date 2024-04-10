"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex flex-row mt-0 pt-5 ">
      <div cy-data="siteLogo" className="ml-10">
        Logo
      </div>
      <div className="ml-auto mr-10 flex flex-row gap-5">
        <Link cy-data="play-btn" href="/home/play">
          Play
        </Link>
        {pathname !== "/auth/login" && (
          <Link cy-data="login-btn" href="/auth/login">
            Login
          </Link>
        )}
        {pathname !== "/auth/register" && (
          <Link cy-data="register-btn" href="/auth/register">
            Register
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
