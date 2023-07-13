"use client";

import { useState } from "react";
import { Finances } from "@/lib/types/Finances";
import { TotalBalanceHeader } from "@/components/dashboard/balance/TotalBalanceHeader";
import { BalancesSummary } from "@/components/dashboard/balance/BalancesSummary";
import { ExpenseIncomeSwitchBtns } from "@/components/dashboard/newAmount/ExpenseIncomeSwitchBtns";
import { AddExpenseIncome } from "@/components/dashboard/newAmount/AddExpenseIncome";

export default function Dashboard() {
  const [newAmount, setNewAmount] = useState<Finances>(Finances.expense);

  return (
    <>
      <TotalBalanceHeader />
      <BalancesSummary />
      <ExpenseIncomeSwitchBtns
        newAmount={newAmount}
        setNewAmount={setNewAmount}
      />
      <AddExpenseIncome newAmount={newAmount} />
    </>
  );
}
