import Navbar from "@/components/layout/navbar";
import HighLights from "./_components/high-lights";
import Rank from "./_components/rank";
import FAQS from "./_components/faqs";
import Footer from "@/components/layout/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div
      >
        <Navbar/>
        {children}
        <HighLights/>
        <Rank/>
        <FAQS/>
        <Footer/>
        
      </div>
    </main>
  );
}
