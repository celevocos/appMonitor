import { NavLink } from "react-router-dom"

// TODO
//* Make Styles

interface Props {
  to: string;
  icon: string;
  title: string;
  description?: string;
}

export const SidebarMenuItem = ({ to, icon, title }: Props) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? 'flex justify-center items-center bg-zinc-400 shadow-sm shadow-red-200 rounded-md p-2 transition-colors'
          : 'flex justify-center items-center bg-zinc-300 shadow-sm shadow-zinc-400 hover:bg-red-300 rounded-md p-2 transition-colors'
      }
    >
      <i className={`${icon} text-sm p-1 pr-2 text-white`} ></i>
      <div className="flex flex-col flex-grow">
        <span className="text-white text-sm font-semibold">
          {title}
        </span>
      </div>
    </NavLink>
  )
}