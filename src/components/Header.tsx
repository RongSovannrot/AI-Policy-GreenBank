import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-background py-4 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-xl font-semibold text-primary">Green Bank</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-foreground hover:text-primary transition-colors">
            Features
          </a>
          <div className="relative group">
            <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
              Compare
              <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-background shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <a href="#cards" className="block px-4 py-2 text-foreground hover:bg-muted">Credit Cards</a>
              <a href="#accounts" className="block px-4 py-2 text-foreground hover:bg-muted">Accounts</a>
              <a href="#loans" className="block px-4 py-2 text-foreground hover:bg-muted">Loans</a>
            </div>
          </div>
          <a href="#support" className="text-foreground hover:text-primary transition-colors">
            Support
          </a>
          <div className="relative group">
            <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
              Blog
              <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-background shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <a href="#news" className="block px-4 py-2 text-foreground hover:bg-muted">News</a>
              <a href="#tips" className="block px-4 py-2 text-foreground hover:bg-muted">Money Tips</a>
            </div>
          </div>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#login" className="text-primary hover:text-brand-dark transition-colors font-medium">
            Login
          </a>
          <Button className="bg-primary hover:bg-brand-dark text-primary-foreground rounded-lg px-5">
            Open Account
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background shadow-lg z-50 px-6 py-4">
          <nav className="flex flex-col gap-4">
            <a href="#features" className="text-foreground hover:text-primary transition-colors py-2">
              Features
            </a>
            <a href="#compare" className="text-foreground hover:text-primary transition-colors py-2">
              Compare
            </a>
            <a href="#support" className="text-foreground hover:text-primary transition-colors py-2">
              Support
            </a>
            <a href="#blog" className="text-foreground hover:text-primary transition-colors py-2">
              Blog
            </a>
            <div className="flex flex-col gap-3 pt-4 border-t border-border">
              <a href="#login" className="text-primary font-medium">
                Login
              </a>
              <Button className="bg-primary hover:bg-brand-dark text-primary-foreground rounded-lg w-full">
                Open Account
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
