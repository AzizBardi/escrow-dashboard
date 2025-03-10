interface INetworkMap {
  [key: string]: {
    title: string;
    key: string;
    scanner: string;
    rpcUrl: string;
    defaultFactoryAddr: string;
    hmtAddr: string;
    graphqlClientUrl: string;
    showTokenStats: boolean;
  };
}

export const networkMap: INetworkMap = {
  skale: {
    title: 'Skale Testnet',
    key: 'skale',
    scanner: 'https://stocky-pleione.explorer.staging-v2.skalenodes.com/',
    rpcUrl: 'https://staging-v2.skalenodes.com/v1/stocky-pleione',
    defaultFactoryAddr: '0xE7C0336B542d68599eb0e8B16d32b18a643Cdb4C',
    hmtAddr: '0x86481C518509DF2eD9510273417c4f7e2842E4eE',
    graphqlClientUrl:
      'https://skale-humanprocol-graph.skale.network/',
    showTokenStats: true,
  },
  polygon: {
    title: 'Polygon Mainnet',
    key: 'polygon',
    scanner: 'https://polygonscan.com',
    rpcUrl: 'https://polygon-rpc.com/',
    defaultFactoryAddr: '0x45eBc3eAE6DA485097054ae10BA1A0f8e8c7f794',
    hmtAddr: '0xc748B2A084F8eFc47E086ccdDD9b7e67aEb571BF',
    graphqlClientUrl:
      'https://api.thegraph.com/subgraphs/name/humanprotocol/polygon',
    showTokenStats: true,
  },
  mumbai: {
    title: 'Polygon Mumbai Testnet',
    key: 'mumbai',
    scanner: 'https://mumbai.polygonscan.com',
    rpcUrl: 'https://rpc-mumbai.maticvigil.com',
    defaultFactoryAddr: '0x558cd800f9F0B02f3B149667bDe003284c867E94',
    hmtAddr: '0x0376D26246Eb35FF4F9924cF13E6C05fd0bD7Fb4',
    graphqlClientUrl: 'https://api.thegraph.com',
    // the graph is not implemented yet
    showTokenStats: false,
  },
  rinkeby: {
    title: 'Ethereum Rinkeby',
    key: 'rinkeby',
    scanner: 'https://rinkeby.etherscan.io',
    rpcUrl: 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
    defaultFactoryAddr: '0x925B24444511c86F4d4E63141D8Be0A025E2dca4',
    hmtAddr: '0x4dCf5ac4509888714dd43A5cCc46d7ab389D9c23',
    graphqlClientUrl:
      'https://api.thegraph.com/subgraphs/name/humanprotocol/rinkeby',
    // the graph is implemented, but doesn't contain fresh deployments
    showTokenStats: false,
  },
  neonslabdev: {
    title: 'NeonsLab Devtestnet',
    key: 'neonslabdev',
    scanner: 'https://neonscan.org',
    rpcUrl: 'https://proxy.devnet.neonlabs.org/solana',
    defaultFactoryAddr: '0x75D377773aCf9eB1076B01c1698415Bfe2db6D9d',
    hmtAddr: '',
    graphqlClientUrl: 'https://api.thegraph.com',
    // the graph is not implemented yet
    showTokenStats: false,
  },
  moonbeam: {
    title: 'Moonbeam Mainnet',
    key: 'moonbeam',
    scanner: 'https://moonbeam.moonscan.io',
    rpcUrl: 'https://rpc.api.moonbeam.network',
    defaultFactoryAddr: '0x98108c28B7767a52BE38B4860832dd4e11A7ecad',
    hmtAddr: '0x3b25BC1dC591D24d60560d0135D6750A561D4764',
    graphqlClientUrl:
      'https://api.thegraph.com/subgraphs/name/humanprotocol/moonbeam',
    showTokenStats: true,
  },
};
export const networks = Object.values(networkMap).map((network) => network);
