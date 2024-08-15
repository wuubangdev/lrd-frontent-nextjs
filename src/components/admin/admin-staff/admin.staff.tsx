import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Title from "@/components/admin/reuse-component/title";
import AdminStaffTable from "@/components/admin/admin-staff/admin.staff.table";
import Modal from "@/components/modal/modal";
import AddIcon from '@mui/icons-material/Add';
import Box from "@mui/material/Box";
import Breadcrumb from "@/components/breadcrumbs/breadcrumbs";

const AdminStaff = () => {
    return (
        <Grid item xs={12}>
            <Paper sx={{ px: 4, py: 2, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ mb: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Box>
                        <Title>Staff Manager</Title>
                        <Breadcrumb />
                    </Box>
                    <Modal
                        buttonTitle="Add new staff"
                        buttonIcon={<AddIcon sx={{ fontSize: "16px" }} />}
                        color={"info"}
                        variant={"contained"}
                    />
                </Box>
                <AdminStaffTable />
            </Paper>
        </Grid>
    )
}

export default AdminStaff;