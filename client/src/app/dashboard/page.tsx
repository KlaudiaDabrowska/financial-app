"use client";

import { useContext, useState } from "react";
import { BalancesSummary } from "@/components/dashboard/balance/BalancesSummary";
import { TotalExpenseOverview } from "@/components/dashboard/balance/overview/TotalExpenseOverview";
import { TotalIncomeOverview } from "@/components/dashboard/balance/overview/TotalIncomeOverview";
import { TotalSavingOverview } from "@/components/dashboard/balance/overview/TotalSavingOverview";
import { TotalBalanceHeader } from "@/components/dashboard/balance/TotalBalanceHeader";
import { AddExpenseIncome } from "@/components/dashboard/newAmount/AddExpenseIncome";
import { ExpenseIncomeSwitchBtns } from "@/components/dashboard/newAmount/ExpenseIncomeSwitchBtns";
import { DashboardFinancialView, Finances } from "@/lib/types/Finances";
import { DashboardFinancialViewContext } from "@/utils/Providers";

export default function Dashboard() {
  const [newAmount, setNewAmount] = useState<Finances>(Finances.expense);

  const financialContext = useContext(DashboardFinancialViewContext);

  const currentView = financialContext.view;

  const dashboardViews = [
    {
      view: DashboardFinancialView.add,
      component: (
        <>
          <ExpenseIncomeSwitchBtns
            newAmount={newAmount}
            setNewAmount={setNewAmount}
          />
          <AddExpenseIncome newAmount={newAmount} />
        </>
      ),
    },
    {
      view: DashboardFinancialView.totalIncome,
      component: <TotalIncomeOverview />,
    },
    {
      view: DashboardFinancialView.totalExpense,
      component: <TotalExpenseOverview />,
    },
    {
      view: DashboardFinancialView.totalSaving,
      component: <TotalSavingOverview />,
    },
  ];

  return (
    <>
      <TotalBalanceHeader />
      <BalancesSummary />
      {dashboardViews.map(
        (dashboard) => dashboard.view === currentView && dashboard.component
      )}
    </>
  );
}
