import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '../ui/navigation-menu';

function Navbar() {
  return (
    <div className="w-full">
      <NavigationMenu className="w-full bg-gradient-to-r from-black to-gray-600 text-white p-4 shadow-md">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-4">
          <Link to="/" className="text-2xl font-bold mb-2 md:mb-0">
            Personal Blog
          </Link>
          <NavigationMenuList className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full md:w-auto">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/" className="text-center px-2">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/blog" className="text-center px-2">Blog</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/about" className="text-center px-2">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/contact" className="text-center px-2">Contact</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </div>
      </NavigationMenu>
    </div>
  );
}

export default Navbar;