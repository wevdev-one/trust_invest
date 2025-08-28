import Header from '../components/GlobalComponents/Header/Header';
import Footer from '../components/GlobalComponents/Footer/Footer';
import HelmetLayout from '../components/GlobalComponents/HelmetLayout';

function BeginnersPage() {
  return (
    <HelmetLayout
      name="For Beginners"
      title="Learn Trading with Trust Invest – Beginner-Friendly Guides & Tools"
      description="New to trading? Trust Invest offers easy-to-follow guides, educational resources, and demo accounts to help you start your investment journey with confidence."
    >
      <div className='padd-page padd-acc ovf-hidden'>
        <Header />
        <Footer />
      </div>
    </HelmetLayout>
  )
  
}

export default BeginnersPage;
