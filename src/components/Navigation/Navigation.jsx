import NavItem from "./Nav-Item";
import NavigationBg from "./NavigationBg";
import NavigationIcon from "./NavigationIcon";

export default function Navigation() {
  return (
    <nav className="w-screen h-[95px] flex items-center justify-center relative z-10">
      <NavigationIcon />
      <div className="h-[53px] relative w-[354px] max-sm:w-[100vw] mt-2">
        <NavigationBg />
        <div className="absolute w-full flex items-center justify-between h-[47px] top-[8px] text-[14px] px-[55px]">
          <NavItem to="invest">Invest</NavItem>
          <NavItem to="partners">Partners</NavItem>
          <NavItem to="stats">Stats</NavItem>
        </div>
      </div>
    </nav>
  );
}
