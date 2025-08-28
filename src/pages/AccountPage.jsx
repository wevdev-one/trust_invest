import Header from '../components/GlobalComponents/Header/Header';
import Footer from '../components/GlobalComponents/Footer/Footer';
import HelmetLayout from '../components/GlobalComponents/HelmetLayout';

function AccountPage() {
  return (
    <HelmetLayout
      name="Account Types"
      title="Choose the Best Trading Account for You | Trust Invest"
      description="Explore Trust Invest’s flexible account types, designed for beginners and experienced traders alike. Compare features and find your ideal trading solution."
    >
      <div className='padd-page padd-acc ovf-hidden'>
        <Header />
        <Footer />
      </div>
    </HelmetLayout>
  )
  
}

export default AccountPage;
