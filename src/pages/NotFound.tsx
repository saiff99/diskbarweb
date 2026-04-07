import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      {/* Glowing orb background effect */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6">
        <h1 className="text-[8rem] font-extrabold leading-none tracking-tighter text-primary/20 sm:text-[12rem]">
          404
        </h1>

        <div className="-mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
            Page not found
          </h2>
          <p className="max-w-md text-sm text-muted-foreground">
            The page <span className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground/70">{location.pathname}</span> doesn't exist or has been moved.
          </p>
        </div>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <Button asChild className="glow-button gap-2">
            <Link to="/">
              <Home className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline" className="gap-2" onClick={() => window.history.back()}>
            <button type="button" onClick={() => window.history.back()}>
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </button>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
