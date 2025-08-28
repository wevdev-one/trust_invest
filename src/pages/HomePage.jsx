import React from 'react';
import Header from '../components/GlobalComponents/Header/Header';
import Footer from '../components/GlobalComponents/Footer/Footer';
import HelmetLayout from '../components/GlobalComponents/HelmetLayout';
import Banner from '../components/HomePage/Banner/Banner';

function HomePage() {
  return (
    <HelmetLayout
      name="Main Page"
      title="Trust Invest – Secure & Smart Trading for Every Investor"
      description="Trade with confidence on Trust Invest! Access global markets, advanced tools, and expert support to enhance your trading experience. Start investing today!"
    >
      <div className='ovf-hidden padd-page'>
        <Header />
        <Banner />
        <Footer />
      </div>
    </HelmetLayout>
  )
}

export default HomePage;
