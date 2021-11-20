import XF from "@xend-finance/web-sdk";
import protocols from "./addresses.json";
require("dotenv").config();

const setupSdk = async () => {
  const chainID = 56; // ganache
  const pk = process.env.REACT_APP_PRIVATE_KEY;
  return await XF(chainID, pk, { env: "mainnet" });
};

export const flexibleInfo = async () => {
  try {
    const { Personal } = await setupSdk();
    const info = await Personal.flexibleInfo();
    return info;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const getWalletBalance = async () => {
  try {
    const xf = await setupSdk();
    const balance = await xf.walletBalance();
    return balance;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const makeDeposit = async (amount) => {
  try {
    const { Personal } = await setupSdk();
    const result = await Personal.flexibleDeposit(`${amount}`);
    return result;
  } catch (e) {
    return null;
  }
};

export const doWithdraw = async (amount) => {
  try {
    const { Personal } = await setupSdk();

    let amountToPass = Number(amount) * Math.pow(10, -8);
    const finalAmount = String(
      amountToPass.toString().match(/^-?\d+(?:\.\d{0,4})?/)[0]
    );

    const result = await Personal.withdrawFlexible(finalAmount); // we withdraw share balance, not the busd value
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const myAddress = async () => {
  try {
    const xf = await setupSdk();
    const result = await xf.retrieveWallet(); // we withdraw share balance, not the busd value

    return result.address;
  } catch (error) {
    return null;
  }
};
