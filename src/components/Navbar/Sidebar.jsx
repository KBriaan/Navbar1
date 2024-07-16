import {FaCog, FaEnvelope, FaHome, FaPoll, FaRegFileAlt} from 'react-icons/fa'

const Sidebar = ({sidebarToggle}) => {
  return (
    <div className={`${sidebarToggle? 'hidden':'block'}w-60 bg-red-500 fixed h-full`}>
      <div>
        <h1 className="text-2xl text-white font-bold py-10 px-3 cursor-pointer"> Admin Dashboard</h1>
      </div>
      <hr/>
      <ul >
        <li className='text-white text-3xl rounded hover:shadow hover:bg-green-500 py-2'>
            <a className='flex items-center gap-5 px-3' href="/"> <FaHome/>  Home</a>
        </li>
        <li className='text-white text-3xl rounded hover:shadow hover:bg-green-500 py-2'>
            <a className='flex items-center gap-5 px-3' href="/"> <FaRegFileAlt/>  Blogs</a>
        </li>
        <li className='text-white text-3xl rounded hover:shadow hover:bg-green-500 py-2'>
            <a className='flex items-center gap-5 px-3' href="/"> <FaPoll/>  Reports</a>
        </li>
        <li className='text-white text-3xl rounded hover:shadow hover:bg-green-500 py-2'>
            <a className='flex items-center gap-5 px-3' href="/"> <FaEnvelope/>  Inbox</a>
        </li>
        <li className='text-white text-3xl rounded hover:shadow hover:bg-green-500 py-2'>
            <a className='flex items-center gap-5 px-3' href="/"> <FaCog/>  Settings</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
