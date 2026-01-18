import Link from "next/link";

const AdminHome = () => {

    return (
        <div>
            <h1>Admin Home Page</h1>
            <p>Welcome to the admin dashboard.</p>

            <Link href="/admin/about" className="text-red-400">Go to Admin about page</Link>
        </div>
    );
}   
export default AdminHome;