import React from 'react';
import Header from '../components/GlobalComponents/Header/Header';
import Footer from '../components/GlobalComponents/Footer/Footer';
import HelmetLayout from '../components/GlobalComponents/HelmetLayout';
import Banner from '../components/HomePage/Banner/Banner';
import Mission from '../components/HomePage/Mission/Mission';
import Assets from '../components/HomePage/Assets/Assets';
import Broker from '../components/HomePage/Broker/Broker';
import Verify from '../components/HomePage/Verify/Verify';
import Profit from '../components/HomePage/Profit/Profit';

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
        <Mission />
        <Assets />
        <Broker />
        <Verify />
        <Profit />
        <Footer />
      </div>
    </HelmetLayout>
  )
}

export default HomePage;
