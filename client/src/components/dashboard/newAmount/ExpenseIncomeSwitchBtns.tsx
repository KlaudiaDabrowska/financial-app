import { Box, Button } from '@mui/material';
import { Finances } from '@/lib/types/Finances';

interface ISwitchBtnsProps {
  newAmount: Finances;
  setNewAmount: (value: Finances) => void;
}

export const ExpenseIncomeSwitchBtns = ({
	newAmount,
	setNewAmount,
}: ISwitchBtnsProps) => {
	const handleToggleSwitch = (amount: Finances) => {
		setNewAmount(amount);
	};

	return (
		<Box justifyContent="center" display="flex" marginY={6}>
			<Button
				variant={`${newAmount === Finances.expense ? 'contained' : 'outlined'}`}
				sx={{
					color: '#000',
					mr: 2,
					border: 1,
					borderColor: 'primary.main',
					fontWeight: 'bold',
				}}
				onClick={() => handleToggleSwitch(Finances.expense)}
			>
        Add expense
			</Button>
			<Button
				variant={`${newAmount === Finances.income ? 'contained' : 'outlined'}`}
				sx={{
					color: '#000',
					border: 1,
					borderColor: 'primary.main',
					fontWeight: 'bold',
				}}
				onClick={() => handleToggleSwitch(Finances.income)}
			>
        Add income
			</Button>
		</Box>
	);
};
