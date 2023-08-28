import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Authenticator
        socialProviders={["amazon", "apple", "facebook", "google"]}
      >
        <Link href={"/auth/login"}>LINK</Link>
      </Authenticator>
    </div>
  );
}
