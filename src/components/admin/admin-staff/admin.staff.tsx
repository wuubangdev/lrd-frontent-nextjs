import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Title from "@/components/admin/reuse-component/title";
import AdminStaffTable from "@/components/admin/admin-staff/admin.staff.table";

const AdminStaff = () => {
    return (
        <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <Title>Recent AdminStaff</Title>
                <AdminStaffTable />
            </Paper>
        </Grid>
    )
}

export default AdminStaff;