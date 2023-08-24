import DirectionsBusFilledOutlinedIcon from '@mui/icons-material/DirectionsBusFilledOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import TheatersOutlinedIcon from '@mui/icons-material/TheatersOutlined';
import { Button, Grid } from '@mui/material';

export const ExpenseCategories = () => {
	return (
		<>
			<Grid item>
				<Button
					variant="outlined"
					startIcon={<ShoppingBasketOutlinedIcon />}
					sx={{ color: 'black' }}
				>
          Groceries
				</Button>
			</Grid>
			<Grid item>
				<Button
					variant="outlined"
					startIcon={<RestaurantOutlinedIcon />}
					sx={{ color: 'black' }}
				>
          Restaurant
				</Button>
			</Grid>
			<Grid item>
				<Button
					variant="outlined"
					startIcon={<TheatersOutlinedIcon />}
					sx={{ color: 'black' }}
				>
          Entertainment
				</Button>
			</Grid>
			<Grid item>
				<Button
					variant="outlined"
					startIcon={<DirectionsBusFilledOutlinedIcon />}
					sx={{ color: 'black' }}
				>
          Transport
				</Button>
			</Grid>
			<Grid item>
				<Button
					variant="outlined"
					startIcon={<LocalHospitalOutlinedIcon />}
					sx={{ color: 'black' }}
				>
          Health
				</Button>
			</Grid>
		</>
	);
};
