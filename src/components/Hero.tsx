import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import cardDark from "@/assets/card-dark.png";
import cardMint from "@/assets/card-mint.png";

const features = [
  "Instant Transfer",
  "Payments worldwide",
  "Saving accounts",
  "100% mobile banking",
];

const Hero = () => {
  return (
    <section className="w-full bg-background px-6 lg:px-12 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Banking
            <br />
            starts here.
          </h1>

          <p className="text-lg text-muted-foreground max-w-md">
            Enjoy rewards, cashback, and smart spending tools with our credit cards.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-foreground text-sm">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Button className="bg-primary hover:bg-brand-dark text-primary-foreground px-6 py-3 rounded-lg font-medium">
              Open Account
            </Button>
            <a
              href="#compare"
              className="flex items-center gap-2 text-primary hover:text-brand-dark font-medium transition-colors group"
            >
              Compare Cards
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Right Content - Cards */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            {/* Mint Card (Background) */}
            <div className="absolute top-0 right-0 w-64 md:w-72 transform rotate-6 translate-x-4 translate-y-8">
              <img
                src={cardMint}
                alt="Green Bank Mint Card"
                className="w-full h-auto drop-shadow-xl"
              />
            </div>
            {/* Dark Card (Foreground) */}
            <div className="relative w-64 md:w-72 transform -rotate-3 z-10">
              <img
                src={cardDark}
                alt="Green Bank Visa Card"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
