import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="grid grid-cols-2 items-center justify-center">
      <Link
        href="/"
        className="grid grid-cols-2 items-center justify-center cursor-pointer"
      >
        <div>
          <Image
            src="mover-mate-logo.svg"
            height={50}
            width={50}
            alt="logo Mover Mate"
            priority
            className="dark:invert"
          />
        </div>
        <div>
          <h1 className="font-heavy text-start ">
            <span className="text-3xl">M</span>over
          </h1>
          <h1 className="font-heavy text-start">
            <span className="text-3xl">M</span>ate
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
