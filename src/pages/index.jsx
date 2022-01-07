import * as React from 'react';
import Footer from '../containers/Footer';
import MainSection from '../containers/MainPage';
import Navbar from '../containers/Navbar';

function IndexPage() {
  return (
    <main>
      <Navbar />
      <MainSection />
      <Footer />
    </main>
  );
}

export default IndexPage;
