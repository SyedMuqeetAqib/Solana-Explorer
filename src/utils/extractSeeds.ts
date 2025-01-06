import { Idl } from "@project-serum/anchor";
import {
  IdlAccountItem,
  isIdlAccounts,
} from "@project-serum/anchor/dist/cjs/idl";

export function extractSeedsFromIdl(
  idl: Idl
): { name: string; seeds: number[] }[] {
  const result: { name: string; seeds: number[] }[] = [];
  idl.instructions.forEach((functionAccounts) => {
    functionAccounts.accounts.forEach((account: IdlAccountItem) => {
      if (!isIdlAccounts(account) && account.pda && account.pda.seeds) {
        account.pda.seeds.forEach((seed) => {
          result.push({
            name: account.name,
            seeds: seed.value,
          });
        });
      }
    });
  });
  return result.filter((item) => item.name && item.seeds);
}
