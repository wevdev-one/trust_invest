import Header from '../components/GlobalComponents/Header/Header';
import Footer from '../components/GlobalComponents/Footer/Footer';
import HelmetLayout from '../components/GlobalComponents/HelmetLayout';
import Banner from '../components/MarketsPage/Banner/Banner';
import Conditions from '../components/MarketsPage/Conditions/Conditions';
import Tabs from '../components/MarketsPage/Tabs/Tabs';

function MarketsPage() {
  return (
    <HelmetLayout
      name="Markets"
      title="Trade Global Markets with Trust Invest – Stocks, Forex, Crypto & More"
      description="Explore a wide range of trading markets, including Forex, stocks, commodities, indices, and crypto. Stay ahead with Trust Invest’s powerful trading solutions."
    >
      <div className='ovf-hidden padd-page'>
        <Header />
        <Banner />
        <Conditions />
        <Tabs />
        <Footer />
      </div>
    </HelmetLayout>
  )
}

export default MarketsPage;
