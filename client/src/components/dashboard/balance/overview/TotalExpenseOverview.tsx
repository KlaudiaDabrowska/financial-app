import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGetExpenses } from "@/lib/hooks/useGetExpenses";

export const TotalExpenseOverview = () => {
  const columns: GridColDef[] = [
    { field: "expenseCategory", headerName: "Category", width: 150 },
    {
      field: "totalAmount",
      headerName: "Amount",
      width: 150,
      editable: true,
    },
    {
      field: "currency",
      headerName: "Currency",
      width: 150,
      editable: true,
    },
  ];

  const { groupByCategories } = useGetExpenses();

  return (
    <Box sx={{ width: "50%", mt: 2, mx: "auto" }}>
      <DataGrid
        getRowId={(row) => row.totalAmount + row.currency}
        rows={groupByCategories || []}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};
