/* eslint no-undef: "off"*/
import web3 from "web3";
import busdAbi from "./abi.json";
require("dotenv").config();

const w3 = new web3("http://localhost:8545");
const busdAddress = "0xe9e7cea3dedca5984780bafc599bd69add087d56";
const busd = new w3.eth.Contract(busdAbi, busdAddress);

// Values to Change
const receiver = pkToAddress(process.env.REACT_APP_PRIVATE_KEY); // create .env file and save the PRIVATE_KEY copy from ganache
const unlockedAddress = process.env.REACT_APP_UNLOCKED_ADDRESS;

export const sendFunds = async (fund, getBalance) => {
  Promise.all([
    busd.methods.balanceOf(unlockedAddress).call(),
    busd.methods.balanceOf(receiver).call(),
  ]).then(async ([unlockedBal, receiverBal]) => {
    const prev = { unlocked: unlockedBal, receiver: receiverBal };
    console.table(prev);

    const amount = BigInt(fund) * BigInt(Math.pow(10, 18));

    await busd.methods
      .transfer(receiver, amount.toString())
      .send({ from: unlockedAddress });
    console.log("* sent *\n");

    Promise.all([
      busd.methods.balanceOf(unlockedAddress).call(),
      busd.methods.balanceOf(receiver).call(),
    ]).then(([unlockedBal, receiverBal]) => {
      const after = { unlocked: unlockedBal, receiver: receiverBal };
      console.table(after);
      getBalance();
    });
  });
};

function pkToAddress(pk) {
  const account = w3.eth.accounts.privateKeyToAccount(pk);
  return account.address;
}
