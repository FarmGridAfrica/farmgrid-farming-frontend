import XF from "@xend-finance/web-sdk";
import protocols from "./addresses.json";
require("dotenv").config();

const setupSdk = async () => {
  const chainID = 0; // ganache
  const pk = process.env.REACT_APP_PRIVATE_KEY;
  return await XF(chainID, pk, { env: "local", protocols });
};

const flexibleInfo = async () => {
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

const makeDeposit = async () => {
  try {
    const { Personal } = await setupSdk();
    const result = await Personal.flexibleDeposit("200");
    return result;
  } catch (e) {
    return null;
  }
};

const doWithdraw = async (amount) => {
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

async function actions() {
  const address = await myAddress();
  console.log("actions with ", address, "\n");

  console.log("balance: ", await getWalletBalance(), "busd\n");
  console.log("deposit");
  console.log("\tstart=");
  await makeDeposit();
  console.log("\tfinish=\n");

  console.log("balance: ", await getWalletBalance(), "busd\n");

  console.log("wait\n");
  await waitTime(0.2);

  console.log("* info after deposit *");
  const info = await flexibleInfo();
  console.table(info);
  console.log("\n");

  console.log("wait\n");
  await waitTime(0.2);

  console.log("withdraw");
  console.log("\tstart=");
  await doWithdraw(info.shareBalance);
  console.log("\tfinish=\n");

  let infoA = await flexibleInfo();
  console.log("* info after withdrawal *\n");
  console.table(infoA);

  console.log("balance:", await getWalletBalance(), "busd\n");
}

async function waitTime(minutes) {
  return new Promise((resolve) => setTimeout(resolve, minutes * 60 * 1000));
}
