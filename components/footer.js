import Image from 'next/image'
import { useState } from 'react';
import ethLogo from '../public/assets/svg/ethereum-eth-logo.svg'
import MailchimpNewsletter from '../components/mailChimpNewsletter'
import Popup from '../components/popup'

export default function Footer() {
   const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(!openModal);
    }
  return (
    <footer className="footer-2 bg-black pt-6 md:pt-12">
      <div className="container px-4 mx-auto">

        <div className="md:flex md:flex-wrap md:-mx-4 py-6 md:pb-12">

          <div className="footer-info lg:w-1/3 md:px-4">
            <h4 className="text-white text-2xl mb-4">Blockchain.</h4>
            <p className="text-gray-400">Il Blog per sviluppatori blockchain</p>
            <div className="mt-4">
              {/* <button className="bg-facebook py-2 px-4 text-white rounded mt-2 transition-colors duration-300">
                <span className="fab fa-facebook-f mr-2"></span> Follow
              </button>
              <button className="bg-twitter py-2 px-4 text-white rounded ml-2 mt-2 transition-colors duration-300">
                <span className="fab fa-twitter mr-2"></span> Follow @freeweb19
              </button> */}
            </div>
          </div>

          <div className="md:w-2/3 lg:w-1/3 md:px-4 xl:pl-16 mt-12 lg:mt-0">
            <div className="sm:flex">
              {/* <div className="sm:flex-1">
                <h6 className="text-base font-medium text-white uppercase mb-2">About</h6>
                <div>
                  <a href="#" className="text-gray-400 py-1 block hover:underline">Company</a>
                  <a href="#" className="text-gray-400 py-1 block hover:underline">Culture</a>
                  <a href="#" className="text-gray-400 py-1 block hover:underline">Team</a>
                  <a href="#" className="text-gray-400 py-1 block hover:underline">Careers</a>
                </div>
              </div> */}
              <div className="sm:flex-1 items-center mt-4 sm:mt-0">
                <h6 className="text-base font-medium text-white uppercase mb-5">DONAZIONI</h6>
                <div>
                  {/* <button className="inline-flex items-center px-3 py-2 font-medium rounded px-4 py-2 leading-5 bg-green-500 text-primary-100 text-white hover:text-white hover:bg-green-700">
                    <svg className="inline-block w-5 h-5 mr-1" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg> Woohoo!
                  </button> */}
                   <button onClick={ handleOpenModal }  className="inline-flex items-center gap-1 px-3 py-1 font-medium rounded px-4 leading-5 bg-ethereumLightGray text-primary-100 text-ethereumGrey hover:text-white hover:bg-ethereumGold">
                    <Image width={20} height={30} src={ethLogo}></Image> Ethereum
                  </button>
                  {/* <a href="#" className="text-gray-400 py-1 block hover:underline">Blocks</a>
                  <a href="#" className="text-gray-400 py-1 block hover:underline">Resources</a>
                  <a href="#" className="text-gray-400 py-1 block hover:underline">Tools</a>
                  <a href="#" className="text-gray-400 py-1 block hover:underline">Tutorials</a>
                  <a href="#" className="text-gray-400 py-1 block hover:underline">Freebies</a> */}
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/3 md:px-4 md:text-left mt-12 lg:mt-0">
            {/* <h6 className="text-base font-medium text-white uppercase mb-5">DONATE</h6> */}
            <h5 className="text-lg text-white font-medium mb-5">Vuoi ricevere contenuti speciali ?</h5>
            <MailchimpNewsletter></MailchimpNewsletter>
            {/* <button className="bg-indigo-600 text-white hover:bg-indigo-700 rounded py-2 px-6 md:px-12 transition-colors duration-300">Explore</button> */}
          </div>

        </div>

      </div>

      <div className="border-t border-solid border-gray-900 mt-4 py-4">
        <div className="container px-4 mx-auto">

          <div className="md:flex md:-mx-4 md:items-center">
            <div className="md:flex-1 md:px-4 text-center md:text-left">
              <p className="text-white">&copy; <strong>Blockchain-Blog</strong></p>
            </div>
            {/* <div className="md:flex-1 md:px-4 text-center md:text-right">
              <a href="#" className="py-2 px-4 text-white inline-block hover:underline">Terms of Service</a>
              <a href="#" className="py-2 px-4 text-white inline-block hover:underline">Privacy Policy</a>
            </div> */}
          </div>

        </div>
      </div>
      {openModal && <Popup toggleModal={handleOpenModal}/>}
    </footer>
    // <footer className="bg-accent-1 border-t border-accent-2">
    //   <Container>
    //     <div className="py-10 flex flex-col lg:flex-row items-center">
    //       <Image width={100} height={100} src={ethWallet} alt="Ethereum Wallet" />
    //       <h1>0xEC5F81a5477147B606C68E8C2366E7846a0E71dA</h1>
    //     </div>
    //     <MailchimpNewsletter></MailchimpNewsletter>
    //   </Container>
    // </footer>
  )
}
