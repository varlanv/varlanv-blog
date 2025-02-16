import Link from "next/link";

export const NavigationLinks = () => {
  return (
    <nav className={"mt-3"}>
      <ul className={"flex items-center justify-center gap-8"}>
        <li>
          <Link href="/public">Home</Link>
        </li>
        <li>
          <Link href="/gradle">Gradle</Link>
        </li>
      </ul>
    </nav>
  );
};
