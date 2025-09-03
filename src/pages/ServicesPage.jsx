import Header from '../components/GlobalComponents/Header/Header';
import Footer from '../components/GlobalComponents/Footer/Footer';
import HelmetLayout from '../components/GlobalComponents/HelmetLayout';
import Banner from '../components/ServicesPage/Banner/Banner';
import Guide from '../components/ServicesPage/Guide/Guide';
import Free from '../components/ServicesPage/Free/Free';
import Cash from '../components/ServicesPage/Cash/Cash';
import Program from '../components/ServicesPage/Program/Program';
import Securities from '../components/ServicesPage/Securities/Securities';
import Reach from '../components/ServicesPage/Reach/Reach';

function ServicesPage() {
  return (
    <HelmetLayout
      name="Services"
      title="Premium Trading Services & Tools | Trust Invest"
      description="Discover Trust Invest’s cutting-edge trading services, from advanced analytics to secure transactions. Elevate your trading experience with our expert solutions."
    >
      <div className='ovf-hidden padd-page'>
        <Header />
        <Banner />
        <Guide />
        <Free />
        <Cash />
        <Program />
        <Securities />
        <Reach />
        <Footer />
      </div>
    </HelmetLayout>
  )
}

export default ServicesPage;
