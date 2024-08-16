import AdminStaff from "@/components/admin/admin-staff/admin.staff";
import { sendRequest } from "@/utils/api";


const StaffPage = async () => {
    const res = await sendRequest<IModelPaginate<IStaff>>({
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/staffs`,
        method: "GET",
        queryParams: {
            page: 1,
            size: 100,
        },
        nextOption: { cache: "no-store" }

    })
    return (
        <AdminStaff
            listStaff={res.data?.result}
        />
    )
}

export default StaffPage;