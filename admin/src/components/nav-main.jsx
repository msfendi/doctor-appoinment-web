import {NavLink} from 'react-router-dom'

export function NavMain({ items, onClick }) {
  return (
    <div className="px-3 py-2 md:px-9 md:min-w-60">
      <div className="mb-2">
        <nav className="grid gap-1">
          {items.map((item, index) => (
            <NavLink
              key={index}
              to={item.url}
              className={`group flex items-center gap-3 rounded-md px-1 py-3 text-sm font-medium ${
                item.isActive
                  ? "bg-[#f2f3ff] text-[#577cff] border-r-4 border-[#577cff]"
                  : "text-[#696b80] hover:bg-[#f8f9fd]"
              }`}
              onClick={() => onClick && onClick(item)}
            >
              {item.icon}
              <span>{item.title}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  )
}

