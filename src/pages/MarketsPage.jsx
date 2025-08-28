import Header from '../components/GlobalComponents/Header/Header';
import Footer from '../components/GlobalComponents/Footer/Footer';
import HelmetLayout from '../components/GlobalComponents/HelmetLayout';

function MarketsPage() {
  return (
    <HelmetLayout
      name="Markets"
      title="Trade Global Markets with Trust Invest – Stocks, Forex, Crypto & More"
      description="Explore a wide range of trading markets, including Forex, stocks, commodities, indices, and crypto. Stay ahead with Trust Invest’s powerful trading solutions."
    >
      <div className='ovf-hidden padd-page'>
        <Header />
        <Footer />
      </div>
    </HelmetLayout>
  )
}

export default MarketsPage;
