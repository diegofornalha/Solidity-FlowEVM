export const challengeInfo = {
  "simple-nft-example": {
    id: 0,
    branchName: "challenge-0-simple-nft",
    label: "🚩 Desafio 0: 🎟 Exemplo Simples de NFT",
    disabled: false,
    description:
      "🎫 Crie um NFT simples para aprender o básico do 🏗 scaffold-eth. Você usará o 👷‍♀️ HardHat para compilar e implantar contratos inteligentes. Depois, usará um modelo de aplicativo React cheio de componentes e hooks importantes do Ethereum. Por fim, você implantará um NFT em uma rede pública para compartilhar com amigos! 🚀",
    previewImage: "/assets/challenges/simpleNFT.svg",
    dependencies: [],
  },
  "decentralized-staking": {
    id: 1,
    branchName: "challenge-1-decentralized-staking",
    label: "🚩 Desafio 1: 🔏 Aplicativo de Staking Descentralizado",
    disabled: false,
    description:
      "🦸 Um superpoder do Ethereum é permitir que você, o construtor, crie um conjunto simples de regras que um grupo adversário de jogadores pode usar para trabalhar juntos. Neste desafio, você cria uma aplicação descentralizada onde os usuários podem coordenar um esforço de financiamento em grupo. Os usuários só precisam confiar no código.",
    previewImage: "/assets/challenges/stakingToken.svg",
    dependencies: [],
  },
  "token-vendor": {
    id: 2,
    branchName: "challenge-2-token-vendor",
    label: "🚩 Desafio 2: 🏵 Máquina de Venda de Tokens",
    icon: "/assets/key_icon.svg",
    disabled: false,
    description:
      '🤖 Contratos inteligentes são como máquinas de venda automática "sempre ligadas" que qualquer pessoa pode acessar. Vamos criar uma moeda digital descentralizada (um token ERC20). Depois, vamos construir uma máquina de venda automática imparável que comprará e venderá a moeda. Aprenderemos sobre o padrão "approve" para ERC20s e como funcionam as interações entre contratos.',
    previewImage: "/assets/challenges/tokenVendor.svg",
    dependencies: [],
  },
  "dice-game": {
    id: 3,
    branchName: "challenge-3-dice-game",
    label: "🚩 Desafio 3: 🎲 Jogo de Dados",
    disabled: false,
    description:
      "🎰 Randomness is tricky on a public deterministic blockchain. The block hash is the result proof-of-work (for now) and some builders use this as a weak form of randomness.  In this challenge you will take advantage of a Dice Game contract by predicting the randomness in order to only roll winning dice!",
    previewImage: "/assets/challenges/diceGame.svg",
    dependencies: ["simple-nft-example", "decentralized-staking", "token-vendor"],
  },
  "minimum-viable-exchange": {
    id: 4,
    branchName: "challenge-4-dex",
    label: "🚩 Desafio 4: ⚖️ Build a DEX",
    disabled: false,
    description:
      "💵 Build an exchange that swaps ETH to tokens and tokens to ETH. 💰 This is possible because the smart contract holds reserves of both assets and has a price function based on the ratio of the reserves. Liquidity providers are issued a token that represents their share of the reserves and fees...",
    previewImage: "assets/challenges/dex.svg",
    dependencies: ["simple-nft-example", "decentralized-staking", "token-vendor", "dice-game"],
  },
  "buidl-guidl": {
    id: 9999,
    branchName: "",
    label: "Elegível para participar do 🏰️ BuidlGuidl",
    icon: "/assets/vault_icon.svg",
    checkpoint: true,
    disabled: false,
    description:
      "O BuidlGuidl é um grupo selecionado de construtores Ethereum criando produtos, protótipos e tutoriais para enriquecer o ecossistema web3. Um lugar para mostrar suas construções e conhecer outros construtores. Comece a criar seu portfólio Web3 enviando sua DEX, Multisig ou construção de NFT SVG.",
    previewImage: "assets/bg.png",
    dependencies: [
      "simple-nft-example",
      "decentralized-staking",
      "token-vendor",
      "dice-game",
      "minimum-viable-exchange",
    ],
    externalLink: {
      link: "https://buidlguidl.com/",
      claim: "Junte-se ao 🏰️ BuidlGuidl",
    },
  },
  "state-channels": {
    id: 5,
    branchName: "challenge-5-state-channels",
    label: "🚩 Desafio 5: 📺 Aplicativo de Canal de Estado",
    disabled: false,
    description:
      "🛣️ The Ethereum blockchain has great decentralization & security properties but these properties come at a price: transaction throughput is low, and transactions can be expensive. This makes many traditional web applications infeasible on a blockchain... or does it?  State channels look to solve these problems by allowing participants to securely transact off-chain while keeping interaction with Ethereum Mainnet at a minimum.",
    previewImage: "assets/challenges/state.svg",
    dependencies: ["simple-nft-example", "decentralized-staking", "token-vendor", "dice-game"],
  },
  "learn-multisig": {
    id: 6,
    branchName: "challenge-3-multi-sig",
    label: "👛 Multisig Wallet Challenge",
    disabled: false,
    description:
      '👩‍👩‍👧‍👧 Using a smart contract as a wallet we can secure assets by requiring multiple accounts to "vote" on transactions. The contract will keep track of transactions in an array of structs and owners will confirm or reject each one. Any transaction with enough confirmations can "execute".',
    previewImage: "assets/challenges/multiSig.svg",
    dependencies: ["simple-nft-example", "decentralized-staking", "token-vendor", "dice-game"],
    externalLink: {
      link: "https://t.me/+zKllN8OlGuxmYzFh",
      claim: "Join the 👛 Multisig Build cohort",
    },
  },
  "nft-cohort": {
    id: 7,
    branchName: "challenge-5-svg-nft-cohort",
    label: "🎁 SVG NFT 🎫 Challenge",
    disabled: false,
    description:
      "🎨 Create a dynamic SVG NFT using a smart contract. Your contract will generate on-chain SVG images and allow users to mint their unique NFTs. ✨ Customize your SVG graphics and metadata directly within the smart contract. 🚀 Share the minting URL once your project is live!",
    previewImage: "assets/challenges/dynamicSvgNFT.svg",
    dependencies: ["simple-nft-example", "decentralized-staking", "token-vendor", "dice-game"],
    externalLink: {
      link: "https://t.me/+mUeITJ5u7Ig0ZWJh",
      claim: "Join the 🎁 SVG NFT 🎫 Building Cohort",
    },
  },
};

const githubChallengesRepoBaseRawUrl = "https://raw.githubusercontent.com/scaffold-eth/se-2-challenges";

export const getGithubChallengeReadmeUrl = challengeId =>
  `${githubChallengesRepoBaseRawUrl}/${challengeInfo[challengeId].branchName}/README.md`;
