import Navbar from "../Navbar";
import Processor from "../cpu/Processor";
import Header from "../cpu/Header";
import ScrollToTop from "../ScrollToTop";
import Footer from "../Footer";
import Memory from "../cpu/Mem+Count"
import Final from "../cpu/Final"

export default function Project3() {
  return (
    <>
        <Navbar />
        <ScrollToTop />
        <Header />
        <Processor />
        <Memory />
        <Final />
        <Footer />
    </>
  )
}