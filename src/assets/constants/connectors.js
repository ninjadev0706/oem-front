import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

const POLLING_INTERVAL = 12000;
const RPC_URL = "https://rpc-mainnet.maticvigil.com";

export const injected = new InjectedConnector({
    supportedChainIds: [137],
});

export const walletconnect = new WalletConnectConnector({
    rpc: { 137: RPC_URL },
    bridge: "https://bridge.walletconnect.org",
    qrcode: true,
    pollingInterval: POLLING_INTERVAL,
});
