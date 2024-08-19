import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Title from "@/components/admin/reuse-component/title";
import Box from "@mui/material/Box";
import Breadcrumb from "@/components/breadcrumbs/breadcrumbs";
import Modal from "@/components/modal/modal";
import CreateStaff from "../admin-staff/create.staff";
import AddIcon from '@mui/icons-material/Add';


// interface IProps {
//     listLab: IStaff[] | undefined;
// }

const AdminLab = (
    // props: IProps
) => {
    return (
        <Grid item xs={12}>
            <Paper sx={{ px: 4, py: 2, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ mb: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Box>
                        <Title>Staff Manager</Title>
                        <Breadcrumb />
                    </Box>
                    <Modal
                        buttonTitle="Add new lab"
                        modalTitle="Add new lab"
                        buttonIcon={<AddIcon sx={{ fontSize: "16px" }} />}
                        color={"info"}
                        variant={"contained"}
                    >
                        <CreateStaff />
                    </Modal>
                </Box>
                {/* <AdminLabTable
                    listStaff={listStaff}
                /> */}
            </Paper>
        </Grid>
    )
}

export default AdminLab;