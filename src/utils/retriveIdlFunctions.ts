import {
  IdlAccountItem,
  isIdlAccounts,
} from "@project-serum/anchor/dist/cjs/idl";

export const retriveIdlReadFunctions = (account: any): boolean => {
  if (isIdlAccounts(account)) {
    return account.accounts.some((nestedAccount: IdlAccountItem) =>
      retriveIdlReadFunctions(nestedAccount)
    );
  } else {
    return !account.isMut;
  }
};
