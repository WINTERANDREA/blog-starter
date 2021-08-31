import Image from 'next/image'
import { useState, useRef, useEffect } from 'react';
import ethLogo from '../public/assets/svg/ethereum-eth-logo.svg'
import ethaddress from '../public/assets/qr/eth-address2.png'

export default function Popup({toggleModal}) {
  const [isOpen, setIsOpen] = useState(true);
  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);

   function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    setCopySuccess('Copiato!');
    setTimeout(() => {  closeModal()}, 2000);
  };

  function closeModal(){
    setIsOpen(!isOpen);
    toggleModal();
  }

  

  return (
    
<div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    {/* <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    --> */}
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

    {/* <!-- This element is to trick the browser into centering the modal contents. --> */}
    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

    {/* <!--
      Modal panel, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    --> */}
    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div className="flex justify-start gap-3">
            <Image width={20} height={30} src={ethLogo}></Image> 
            <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
              Ethereum
            </h3>
        </div>
      </div>
      <div className="mx-auto flex-shrink-0 flex flex-col items-center justify-center mb-5">
            <Image  src={ethaddress}></Image> 
            <button  className="mt-6 mb-4 text-center flex items-center justify-center gap-1">
              <input className="text-sm text-gray-500"  ref={textAreaRef} value="0xEC5F81a5477147B606C68E8C2366E7846a0E71dA" readOnly style={{overflow:'hidden', textOverflow:'ellipsis', width:260}}/>
              <svg onClick={copyToClipboard} width="20" height="20" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0 0H1H9V1H1V9H0V0ZM2 2H11V11H2V2ZM3 3H10V10H3V3Z" fill="#989a9b"></path></svg>
            </button>
            {copySuccess}
          </div>
      <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button onClick={closeModal} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-800 hover:bg-gray-100 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm">
          Non voglio donare
        </button>
      </div>
    </div>
  </div>
</div>
  )
}
