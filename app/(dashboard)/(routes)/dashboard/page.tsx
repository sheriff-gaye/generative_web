import { UserButton } from "@clerk/nextjs"


const DashboardPage=()=>{

    return(
        <div>
        <p>Dashbaord Page Protected</p>
        <UserButton afterSignOutUrl="/" />
        </div>
    )



}

export default DashboardPage