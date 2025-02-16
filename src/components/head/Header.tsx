import { SocialLinks } from "@/components/head/SocialLinks";
import { NavigationLinks } from "@/components/head/NavigationLinks";

export const Header = () => {
  return (
    <header className={"flex items-center justify-center"}>
      <div className={"flex flex-col items-center"}>
        {/*<Image*/}
        {/*  src={avatar}*/}
        {/*  width={100}*/}
        {/*  height={100}*/}
        {/*  alt={"Avatar"}*/}
        {/*  className={"rounded-4xl"}*/}
        {/*/>*/}
        <SocialLinks />
        <NavigationLinks />
      </div>
    </header>
  );
};
