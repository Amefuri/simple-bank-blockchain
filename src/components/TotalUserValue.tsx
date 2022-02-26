import { Flex, Text, Button } from "@chakra-ui/react";
import { useCheckUserBalance } from "../hooks";
import { useEthers } from "@usedapp/core";

export default function TotalUserValue() {
    const { activateBrowserWallet, account } = useEthers();
    const userBalance = useCheckUserBalance(account ?? "");

  return (
    <Flex direction="column" align="center" mt="4">
      <Text color="white" fontSize="2xl">
        User Balance: {userBalance ? userBalance.toNumber() : 0} wei
      </Text>
    </Flex>
  );
}