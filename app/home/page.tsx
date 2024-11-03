import Header from "@/app/_components/Header";
import PopularSubjects from "@/app/_components/PopularSubjects";
import Portfolio from "@/app/_components/Portfolio";
import Projects from "@/app/_components/Projects";
import Services from "@/app/_components/Services";
import Feedback from "@/app/_components/Feedback";
import Reviews from "@/app/_components/Reviews";
import ContactUs from "@/app/_components/ContactUs";
import Footer from "@/app/_components/Footer";
export default function home() {
  return (
    <>
      <Header />
      <PopularSubjects />
      <Portfolio />
      <Projects />
      <Services />
      <Reviews />
      <ContactUs />
      <Feedback />
      <Footer />
    </>
  );
}
