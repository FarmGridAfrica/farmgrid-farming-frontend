import { getWalletBalance, myAddress } from ".";

export const getAccountBalance = async (
  setAccountBalance,
  setAccountBalanceLoading
) => {
  try {
    setAccountBalanceLoading(true);

    const response = await getWalletBalance();

    setAccountBalance(response);

    setAccountBalanceLoading(false);
  } catch (error) {
    setAccountBalanceLoading(false);

    setAccountBalance(0);
  }
};

export const getMyAddress = async (
  setActiveAddress,
  setActiveAddressLoading
) => {
  try {
    const response = await myAddress();
    setActiveAddress(response);
  } catch (error) {}
};
