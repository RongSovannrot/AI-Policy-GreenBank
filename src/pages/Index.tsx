import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ChatWidget from "@/components/ChatWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
      </main>
      <ChatWidget />
    </div>
  );
};

export default Index;
