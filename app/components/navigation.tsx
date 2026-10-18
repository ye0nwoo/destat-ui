import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "~/components/ui/navigation-menu";
import { Link } from "react-router";
import { Button } from "./ui/button";
import { rabbykit } from "~/root";

export default function Navigation() {
  return (
    <nav className="fixed top-0 right-0 left-0">
      <div className="flex w-screen items-center justify-between py-5 px-5">
        <Link to="/" className="text-lg font-bold">
          DESTAT{" "}
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink>Deshboard</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Survey</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-2">
                    <NavigationMenuLink
                      className="from-muted/50 to-muted flex h-full w-full flex-col justify-center rounded-md bg-gradient-to-b no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="text-lg font-medium">Survey</div>
                      <p className="text-muted-foreground text-sm leading-tight">
                        Easily collect reliable and trustworthy survey results
                        from your participants
                      </p>
                    </NavigationMenuLink>
                  </li>
                </ul>
                <li>
                  {/* @ts-ignore */}
                  <NavigationMenuLink asChild>
                    <Link to="/survey/all">
                      <div className="text-sm leading-none font-medium">
                        All surveys
                      </div>
                      <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        Explore all existing ones and join the survey to get the
                        reward.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  {/* @ts-ignore */}
                  <NavigationMenuLink asChild>
                    <Link to="/">
                      <div className="text-sm leading-none font-medium">
                        Create survey
                      </div>
                      <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        Create new survey.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Archive</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-2">
                    <NavigationMenuLink
                      className="from-muted/50 to-muted flex h-full w-full flex-col justify-center rounded-md bg-gradient-to-b no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="text-lg font-medium">Archive</div>
                      <p className="text-muted-foreground text-sm leading-tight">
                        Access finished or past surveys for reference.
                      </p>
                    </NavigationMenuLink>
                  </li>
                </ul>
                <li>
                  {/* @ts-ignore */}
                  <NavigationMenuLink asChild>
                    <Link to="/">
                      <div className="text-sm leading-none font-medium">
                        Finished surveys
                      </div>
                      <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        Browse the top trending surveys from previous periods.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Profile</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-2">
                    <NavigationMenuLink
                      className="from-muted/50 to-muted flex h-full w-full flex-col justify-center rounded-md bg-gradient-to-b no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="text-lg font-medium">Profile</div>
                      <p className="text-muted-foreground text-sm leading-tight">
                        Manage your surveys, track responses, and update your
                        information.
                      </p>
                    </NavigationMenuLink>
                  </li>
                </ul>
                <li>
                  {/* @ts-ignore */}
                  <NavigationMenuLink asChild>
                    <Link to="/">
                      <div className="text-sm leading-none font-medium">
                        My surveys
                      </div>
                      <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        Browse the surveys you have published.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  {/* @ts-ignore */}
                  <NavigationMenuLink asChild>
                    <Link to="/">
                      <div className="text-sm leading-none font-medium">
                        My responses
                      </div>
                      <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        Browse the responses you have published.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Button
          onClick={() => {
            rabbykit.open();
          }}
        >
          Connect
        </Button>
      </div>
    </nav>
  );
}
