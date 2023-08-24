'use client';

import { useState } from 'react';
import { BalancesSummary } from '@/components/dashboard/balance/BalancesSummary';
import { TotalBalanceHeader } from '@/components/dashboard/balance/TotalBalanceHeader';
import { AddExpenseIncome } from '@/components/dashboard/newAmount/AddExpenseIncome';
import { ExpenseIncomeSwitchBtns } from '@/components/dashboard/newAmount/ExpenseIncomeSwitchBtns';
import { Finances } from '@/lib/types/Finances';

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
