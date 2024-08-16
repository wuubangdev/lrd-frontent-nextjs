import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Title from "@/components/admin/reuse-component/title";
import AdminStaffTable from "@/components/admin/admin-staff/admin.staff.table";
import AddIcon from '@mui/icons-material/Add';
import Box from "@mui/material/Box";
import Breadcrumb from "@/components/breadcrumbs/breadcrumbs";
import CreateStaff from "./create.staff";
import Modal from "@/components/modal/modal";

interface IProps {
    listStaff: IStaff[] | undefined;
}

const AdminStaff = (props: IProps) => {
    const { listStaff } = props;
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
                        modalTitle="Add new staff"
                        buttonIcon={<AddIcon sx={{ fontSize: "16px" }} />}
                        color={"info"}
                        variant={"contained"}
                    >
                        <CreateStaff />
                    </Modal>
                </Box>
                <AdminStaffTable
                    listStaff={listStaff}
                />
            </Paper>
        </Grid>
    )
}

export default AdminStaff;