pragma solidity=0.8.7;

contract Bank {

    struct User {
        uint balance;
    }

    mapping(address => User) public users;
    
    function deposit() external payable {
        users[msg.sender].balance += msg.value;
    }

    function withdraw(uint withdrawAmount) external {
        require(users[msg.sender].balance >= withdrawAmount, "no balance to withdraw");
        (bool success, ) = payable(msg.sender).call{value: withdrawAmount}("");
        require(success, "Failed to withdraw Ether");
        users[msg.sender].balance -= withdrawAmount;
    }

    function transfer(address toUser, uint transferingAmount) external {
        require(msg.sender != toUser, "cannot transfer to yourself");
        require(users[msg.sender].balance >= transferingAmount, "not enough balance");
        users[msg.sender].balance -= transferingAmount;
        users[toUser].balance += transferingAmount;
    }

    function checkUserBalance() view external returns (uint)  {
        return users[msg.sender].balance;
    }

    function checkUserBalanceParam(address userAddress) view external returns (uint)  {
        return users[userAddress].balance;
    }

    function checkBankBalance() view external returns (uint) {
        return address(this).balance;
    }
}