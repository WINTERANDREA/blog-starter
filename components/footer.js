import Container from './container'
import Image from 'next/image'
import ethWallet from '../public/assets/svg/eth-wallet.svg'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-10 flex flex-col lg:flex-row items-center">
          <Image width={100} height={100} src={ethWallet} alt="Ethereum Wallet" />
          <h1>0xEC5F81a5477147B606C68E8C2366E7846a0E71dA</h1>
        </div>
      </Container>
    </footer>
  )
}
