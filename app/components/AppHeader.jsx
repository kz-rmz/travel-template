import HeaderLogo from "./HeaderLogo";
import HeaderNavMenu from "./HeaderNavMenu";

export default function AppHeader() {
  return (
    <header className='w-full bg-sky-500 text-white'>
      <div className='flex justify-between md:container mx-auto py-8 antialiased items-center'>
        <HeaderLogo />
        <HeaderNavMenu />
      </div>
    </header>
  );
}
