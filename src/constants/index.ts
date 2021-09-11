import { SolanaConfig } from '../types';

export const SOLANA_CONFIG: SolanaConfig = {
  jsonRpcUrl: 'https://api.devnet.solana.com',
  websocketUrl: '',
  addressLabels: {
    '11111111111111111111111111111111': 'System Program',
  },
  commitment: 'confirmed',
};
