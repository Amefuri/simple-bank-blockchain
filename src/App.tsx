// App.tsx
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./components/Layout";
import ConnectButton from "./components/ConnectButton";
import TotalBankValue from "./components/TotalBankValue";
import TotalUserValue from "./components/TotalUserValue";
import DepositButton from "./components/DepositButton";
import WithdrawButton from "./components/WithdrawButton";
import TransferButton from "./components/TransferButton";

export default function App() {
  return (
    <ChakraProvider>
      <Layout>
        <ConnectButton />
        <TotalBankValue />
        <TotalUserValue />
        <DepositButton />
        <WithdrawButton />
        <TransferButton />
      </Layout>
    </ChakraProvider>
  )
}