import { Button, Frog } from 'frog'
import { handle } from 'frog/vercel'

// Uncomment to use Edge Runtime.
export const config = {
  runtime: 'edge',
}

export const app = new Frog({
  basePath: '/api',
  browserLocation: 'https://speedrunethereum.com/',
})

const SITE_URL = 'https://speedrun-eth-frame.vercel.app'

app.frame('/', (c) => {
  const { buttonValue } = c

  // if (buttonValue === 'challenge-7') {
  //   return c.res({
  //     image: `${SITE_URL}/img/challenge-7.png`,
  //     intents: [
  //       <Button.Link href="https://speedrunethereum.com/challenge/nft-cohort">
  //         View Challenge
  //       </Button.Link>,
  //       <Button value="challenge-6">← Back</Button>,
  //     ],
  //   })
  // }

  // if (buttonValue === 'challenge-6') {
  //   return c.res({
  //     image: `${SITE_URL}/img/challenge-6.png`,
  //     intents: [
  //       <Button.Link href="https://speedrunethereum.com/challenge/learn-multisig">
  //         View Challenge
  //       </Button.Link>,
  //       <Button value="challenge-5">← Back</Button>,
  //       <Button value="challenge-7">Next →</Button>,
  //     ],
  //   })
  // }

  if (buttonValue === 'challenge-6') {
    return c.res({
      image: `${SITE_URL}/img/buidlguidl.jpg`,
      intents: [
        <Button.Link href="https://speedrunethereum.com/">
          SpeedRun
        </Button.Link>,
        <Button.Link href="https://buidlguidl.com/">BuidlGuidl</Button.Link>,
        <Button.Link href="https://t.me/joinchat/KByvmRe5wkR-8F_zz6AjpA">
          Telegram
        </Button.Link>,
      ],
    })
  }

  if (buttonValue === 'challenge-5') {
    return c.res({
      image: `${SITE_URL}/img/challenge-5.png`,
      intents: [
        <Button.Link href="https://speedrunethereum.com/challenge/state-channels">
          📺 State Channel App
        </Button.Link>,
        <Button value="challenge-4">← Back</Button>,
        <Button value="challenge-6">Next →</Button>,
      ],
    })
  }

  if (buttonValue === 'challenge-4') {
    return c.res({
      image: `${SITE_URL}/img/challenge-4.png`,
      intents: [
        <Button.Link href="https://speedrunethereum.com/challenge/minimum-viable-exchange">
          ⚖️ Build a DEX
        </Button.Link>,
        <Button value="challenge-3">← Back</Button>,
        <Button value="challenge-5">Next →</Button>,
      ],
    })
  }

  if (buttonValue === 'challenge-3') {
    return c.res({
      image: `${SITE_URL}/img/challenge-3.png`,
      intents: [
        <Button.Link href="https://speedrunethereum.com/challenge/dice-game">
          🎲 Dice Game
        </Button.Link>,
        <Button value="challenge-2">← Back</Button>,
        <Button value="challenge-4">Next →</Button>,
      ],
    })
  }

  if (buttonValue === 'challenge-2') {
    return c.res({
      image: `${SITE_URL}/img/challenge-2.png`,
      intents: [
        <Button.Link href="https://speedrunethereum.com/challenge/token-vendor">
          🏵 Token Vendor
        </Button.Link>,
        <Button value="challenge-1">← Back</Button>,
        <Button value="challenge-3">Next →</Button>,
      ],
    })
  }

  if (buttonValue === 'challenge-1') {
    return c.res({
      image: `${SITE_URL}/img/challenge-1.png`,
      intents: [
        <Button.Link href="https://speedrunethereum.com/challenge/decentralized-staking">
          🥩 Staking App
        </Button.Link>,
        <Button value="challenge-0">← Back</Button>,
        <Button value="challenge-2">Next →</Button>,
      ],
    })
  }

  return c.res({
    image: `${SITE_URL}/img/challenge-0.png`,
    intents: [
      <Button.Link href="https://speedrunethereum.com/challenge/simple-nft-example">
        🎟 Simple NFT Example
      </Button.Link>,
      <Button value="challenge-1">Next →</Button>,
    ],
  })
})

export const GET = handle(app)
export const POST = handle(app)
