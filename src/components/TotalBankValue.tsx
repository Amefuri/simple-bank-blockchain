import { Flex, Text, Button } from "@chakra-ui/react";
import { useCheckBankBalance } from "../hooks";

export default function TotalBankValue() {
    const bankBalance = useCheckBankBalance();
  return (
    <Flex direction="column" align="center" mt="4">
      <Text color="white" fontSize="2xl">
        Bank Balance: {bankBalance ? bankBalance.toNumber() : 0} wei
      </Text>
    </Flex>
  );
}