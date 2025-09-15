import React from 'react';
import Header from '../components/GlobalComponents/Header/Header';
import Footer from '../components/GlobalComponents/Footer/Footer';
import HelmetLayout from '../components/GlobalComponents/HelmetLayout';
import FAQs from '../components/FAQsPage/Tabs/Tabs';

function FAQsPage() {
  return (
    <HelmetLayout 
      name="FAQs"
      title="Trust Invest FAQs – Get Answers to Your Trading Questions" 
      description="Have questions? Find answers to common inquiries about Trust Invest’s trading platform, account types, security, and more in our comprehensive FAQ section."
    >
      <div className='padd-page ovf-hidden'>
        <Header />
        <FAQs />
        <Footer />
      </div>
    </HelmetLayout>
  )
}

export default FAQsPage;
