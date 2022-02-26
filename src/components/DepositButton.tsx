import { useState } from "react";
import { Box,
    Flex,
    Text,
    Button,
    NumberInput,
    NumberInputField,} from "@chakra-ui/react";
import { useDeposit } from "../hooks";
import { utils, BigNumber } from "ethers";

export default function DepositButton() {
    const [input, setInput] = useState("");
    const { state, send: sendDeposit } = useDeposit();

    function handleDeposit() {
        sendDeposit({ value: BigNumber.from(input) })
    }

    function handleInput(valueAsString: string, valueAsNumber: number) {
        setInput(valueAsString);
      }

  return (
    <Flex direction="column" align="center" mt="4">
        <Flex direction="row" align="center" mt="4">
            <NumberInput
            defaultValue={1}
            mb={2}
            min={1}
            value={input}
            onChange={handleInput}
            color="white"
            clampValueOnBlur={false}
            >
            <NumberInputField />
            </NumberInput>
            <Button colorScheme="teal" size="lg" onClick={handleDeposit}>
                Deposit (wei)
            </Button>
        </Flex>
    </Flex>
  );
}