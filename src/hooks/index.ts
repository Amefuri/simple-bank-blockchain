import { ethers, Contract, utils } from "ethers";
import { useContractCall, useContractFunction } from "@usedapp/core";
import { useCall } from "@usedapp/core";
import bankContractAbi from "../abi/BankContract.json";
import { bankContractAddress } from "../contracts"

const bankContractInterface = new ethers.utils.Interface(bankContractAbi);

export function useCheckBankBalance() {
    const { value, error } = useCall(bankContractAddress && {
        contract: new Contract(bankContractAddress, bankContractInterface),
        method: 'checkBankBalance',
        args: []
      }) ?? {}
      if(error) {
        console.error(error.message)
        return undefined
      }
      console.log(value)
      return value?.[0]
  }

  export function useCheckUserBalance(userAddress: string) {
    const { value, error } = useCall(bankContractAddress && {
        contract: new Contract(bankContractAddress, bankContractInterface),
        method: 'checkUserBalanceParam',
        args: [userAddress]
      }) ?? {}
      if(error) {
        console.error(error.message)
        return undefined
      }
      console.log("UserBalance = ", value)
      return value?.[0]
  }

  const contract = new Contract(bankContractAddress, bankContractInterface);

  export function useDeposit() {
    const { state, send } = useContractFunction(contract, "deposit", {});
    return { state, send };
  }

  export function useWithdraw() {
    const { state, send } = useContractFunction(contract, "withdraw", {});
    return { state, send };
  }

  export function useTransfer() {
    const { state, send } = useContractFunction(contract, "transfer", {});
    return { state, send };
  }