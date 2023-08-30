import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  useTheme,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { ErrorInfo } from "@/components/common/ErrorInfo";
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

  const { allExpenses, isLoading, isError } = useGetExpenses();

  const theme = useTheme();

  return (
    <Card
      sx={{
        mt: 5,
        width: { xs: "90vw", md: "75%" },
        mx: { xs: 0, md: "auto" },
      }}
    >
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress
            sx={{
              color: theme.palette.primary.dark,
            }}
          />
        </Box>
      ) : isError ? (
        <ErrorInfo error="Oops. Something went wrong." />
      ) : (
        <>
          <CardHeader title="Total expenses from x to y" />
          {allExpenses && (
            <CardContent>
              <DataGrid
                rows={allExpenses}
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
        </>
      )}
    </Card>
  );
};
