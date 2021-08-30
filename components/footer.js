import Container from './container'
import Image from 'next/image'
import ethWallet from '../public/assets/svg/eth-wallet.svg'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <Image src={ethWallet} alt="Ethereum Wallet" />
        </div>
      </Container>
    </footer>
  )
}
