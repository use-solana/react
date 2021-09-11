export interface SolanaConfig {
  jsonRpcUrl: string;
  websocketUrl: string;
  addressLabels: {
    [address: string]: string;
  };
  commitment: string;
}
