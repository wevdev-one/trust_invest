import Header from '../components/GlobalComponents/Header/Header';
import Footer from '../components/GlobalComponents/Footer/Footer';
import HelmetLayout from '../components/GlobalComponents/HelmetLayout';
import Banner from '../components/BeginnersPage/Banner/Banner';
import HowWork from '../components/BeginnersPage/HowWork/HowWork';
import Instruments from '../components/BeginnersPage/Instruments/Instruments';
import Assets from '../components/BeginnersPage/Assets/Assets';
import PlusMinus from '../components/BeginnersPage/PlusMinus/PlusMinus';
import KeyConcepts from '../components/BeginnersPage/KeyConcepts/KeyConcepts';
import StopLoss from '../components/BeginnersPage/StopLoss/StopLoss';
import MustDo from '../components/BeginnersPage/MustDo/MustDo';
import Conclusion from '../components/BeginnersPage/Conclusion/Conclusion';
import GetStarted from '../components/BeginnersPage/GetStarted/GetStarted';

function BeginnersPage() {
  return (
    <HelmetLayout
      name="For Beginners"
      title="Learn Trading with Trust Invest – Beginner-Friendly Guides & Tools"
      description="New to trading? Trust Invest offers easy-to-follow guides, educational resources, and demo accounts to help you start your investment journey with confidence."
    >
      <div className='padd-page padd-acc ovf-hidden'>
        <Header />
        <Banner />
        <HowWork />
        <Instruments />
        <Assets />
        <PlusMinus />
        <KeyConcepts />
        <StopLoss />
        <MustDo />
        <Conclusion />
        <GetStarted />
        <Footer />
      </div>
    </HelmetLayout>
  )
  
}

export default BeginnersPage;
