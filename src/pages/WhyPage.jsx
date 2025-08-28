import Header from '../components/GlobalComponents/Header/Header';
import Footer from '../components/GlobalComponents/Footer/Footer';
import HelmetLayout from '../components/GlobalComponents/HelmetLayout';

function WhyPage() {
  return (
    <HelmetLayout
      name="Why Trust Invest"
      title="Why Choose Trust Invest? Secure, Reliable & Innovative Trading"
      description="Discover why traders trust Trust Invest. Enjoy top-tier security, expert support, and cutting-edge technology for a seamless trading experience."
    >
      <div className='padd-page ovf-hidden'>
        <Header />
        <Footer />
      </div>
    </HelmetLayout>
  )
  
}

export default WhyPage;
