import Navbar from "../Navbar";
import Breadboard from "../rps/Breadboard";
import Header from "../rps/Header";
import ScrollToTop from "../ScrollToTop";
import Footer from "../Footer";
import VHDL from "../rps/VHDL"

export default function Project2() {
  return (
    <>
        <Navbar />
        <Header />
        <ScrollToTop />
        <Breadboard />
        <VHDL />
        <Footer />
    </>
  )
}