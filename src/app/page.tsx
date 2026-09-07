import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Consultations from "@/components/Consultations";
import Doctor from "@/components/Doctor";
import Steps from "@/components/Steps";
import Gallery from "@/components/Gallery";
import Booking from "@/components/Booking";
import Access from "@/components/Access";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Consultations />
        <Doctor />
        <Steps />
        <Gallery />
        <Booking />
        <Access />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
