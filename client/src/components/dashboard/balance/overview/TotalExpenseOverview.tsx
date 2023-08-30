import { Card, CardContent, CardHeader } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGetExpenses } from "@/lib/hooks/useGetExpenses";

export const TotalExpenseOverview = () => {
  const columns: GridColDef[] = [
    {
      field: "expenseCategory",
      headerName: "Category",
      width: 150,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "amount",
      headerName: "Amount",
      width: 170,
      editable: true,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "currency",
      headerName: "Currency",
      width: 150,
      editable: true,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "date",
      headerName: "Date",
      width: 200,
      editable: true,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "paymentType",
      headerName: "Payment Type",
      width: 200,
      editable: true,
      align: "center",
      headerAlign: "center",
    },
  ];

  const { groupByGivenTimeRange } = useGetExpenses();

  return (
    <Card
      sx={{
        mt: 5,
        width: { xs: "90vw", md: "75%" },
        mx: { xs: 0, md: "auto" },
      }}
    >
      <CardHeader title="Total expenses from x to y" />
      {groupByGivenTimeRange && (
        <CardContent>
          <DataGrid
            getRowId={(row) =>
              row.totalAmount + row.currency + Math.floor(Math.random() * 1000)
            }
            rows={groupByGivenTimeRange}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
            sx={{
              "& .MuiDataGrid-columnHeaderTitle": { fontWeight: 800 },
            }}
          />
        </CardContent>
      )}
    </Card>
  );
};
