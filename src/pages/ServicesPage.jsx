import Header from '../components/GlobalComponents/Header/Header';
import Footer from '../components/GlobalComponents/Footer/Footer';
import HelmetLayout from '../components/GlobalComponents/HelmetLayout';

function ServicesPage() {
  return (
    <HelmetLayout
      name="Services"
      title="Premium Trading Services & Tools | Trust Invest"
      description="Discover Trust Invest’s cutting-edge trading services, from advanced analytics to secure transactions. Elevate your trading experience with our expert solutions."
    >
      <div className='ovf-hidden padd-page'>
        <Header />
        <Footer />
      </div>
    </HelmetLayout>
  )
}

export default ServicesPage;
