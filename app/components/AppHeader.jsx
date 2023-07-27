import HeaderLogo from "./HeaderLogo";
import HeaderNavMenu from "./HeaderNavMenu";

export default function AppHeader() {
  return (
    <div className='flex w-full justify-between md:container mx-auto py-8 antialiased'>
      <HeaderLogo />
      <HeaderNavMenu />
    </div>
  );
}
