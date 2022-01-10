import { Group, Inventory2, Masks, Science } from "@mui/icons-material";


const DashboardCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-4">
            {/* Users */}
            <div className="col-span-1 h-auto pb-2 bg-white shadow rounded-xl">
                <div className="w-14 h-14 ml-4 -mt-4 bg-gray-900 rounded-xl flex justify-center items-center">
                    <Group className="text-white"></Group>
                </div>
                <div className="-mt-7 flex flex-col items-end pr-3">
                    <h1>Users</h1>
                    <h1 className="font-semibold text-3xl"> 100 </h1>
                </div>

                <div className="w-2/6 h-0.5 bg-gray-100 mx-auto mt-0.5"></div>
                <p className="pl-5 mt-2 text-sm"><b className="text-green-500">+55%</b> than last week</p>
            </div>

            {/* Doctors */}
            <div className="col-span-1 h-auto pb-2 bg-white shadow rounded-xl">
                <div className="w-14 h-14 ml-4 -mt-4 bg-blue-400 rounded-xl flex justify-center items-center">
                    <Masks className="text-white"></Masks>
                </div>
                <div className="-mt-7 flex flex-col items-end pr-3">
                    <h1>Doctors</h1>
                    <h1 className="font-semibold text-3xl"> 35 </h1>
                </div>

                <div className="w-2/6 h-0.5 bg-gray-100 mx-auto mt-0.5"></div>
                <p className="pl-5 mt-2 text-sm"><b className="text-green-500">+55%</b> than last week</p>
            </div>

            {/* Chemist */}
            <div className="col-span-1 h-auto pb-2 bg-white shadow rounded-xl">
                <div className="w-14 h-14 ml-4 -mt-4 bg-green-500 rounded-xl flex justify-center items-center">
                    <Science className="text-white"></Science>
                </div>
                <div className="-mt-7 flex flex-col items-end pr-3">
                    <h1>Chemists</h1>
                    <h1 className="font-semibold text-3xl"> 24 </h1>
                </div>

                <div className="w-2/6 h-0.5 bg-gray-100 mx-auto mt-0.5"></div>
                <p className="pl-5 mt-2 text-sm"><b className="text-green-500">+55%</b> than last week</p>
            </div>

            {/* Stokiests */}
            <div className="col-span-1 h-auto pb-2 bg-white shadow rounded-xl">
                <div className="w-14 h-14 ml-4 -mt-4 bg-gray-500 rounded-xl flex justify-center items-center">
                    <Inventory2 className="text-white"></Inventory2>
                </div>
                <div className="-mt-7 flex flex-col items-end pr-3">
                    <h1>Stokiests</h1>
                    <h1 className="font-semibold text-3xl"> 13 </h1>
                </div>

                <div className="w-2/6 h-0.5 bg-gray-100 mx-auto mt-0.5"></div>
                <p className="pl-5 mt-2 text-sm"><b className="text-green-500">+55%</b> than last week</p>
            </div>
        </div >
    );
}

export default DashboardCard;