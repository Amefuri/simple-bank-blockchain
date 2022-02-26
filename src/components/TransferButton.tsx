import { useState } from "react";
import { Box,
    Flex,
    Text,
    Button,
    Input,
    NumberInput,
    NumberInputField,} from "@chakra-ui/react";
import { useTransfer } from "../hooks";
import { utils, BigNumber } from "ethers";

export default function DepositButton() {
    const [inputAddress, setInputAddress] = useState("");
    const [inputAmount, setInputAmount] = useState("");
    const { state, send: sendTransfer } = useTransfer();

    function handleTransfer() {
        sendTransfer(inputAddress, BigNumber.from(inputAmount));
    }

    function handleInputAddress(valueAsString: string) {
        setInputAddress(valueAsString);
    }

    function handleInputAmount(valueAsString: string, valueAsNumber: number) {
        setInputAmount(valueAsString);
    }

  return (
    <Flex direction="column" align="center" mt="4">
        <Flex direction="row" align="center" mt="4">
            <Flex direction="column" align="center" mt="4">
                <Input placeholder='receiver address' size='lg' width='auto' color="white" value={inputAddress} onChange={event => handleInputAddress(event.currentTarget.value)}/>

                <NumberInput
                defaultValue={1}
                mb={2}
                min={1}
                value={inputAmount}
                onChange={handleInputAmount}
                color="white"
                clampValueOnBlur={false}
                >
                <NumberInputField />
                </NumberInput>
            </Flex>

            <Button colorScheme="teal" size="lg" onClick={handleTransfer}>
                Transfer (address, amount)
            </Button>
        </Flex>
    </Flex>
  );
}