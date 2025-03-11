export function NavUser({ user }) {
  return (
    <div className="flex w-full items-center gap-2">
      <img src={user.avatar || "/placeholder.svg"} alt={user.name} className="h-8 w-8 rounded-full object-cover" />
      <div className="flex flex-col">
        <span className="text-sm font-medium">{user.name}</span>
        <span className="text-xs text-[#8893b0]">{user.email}</span>
      </div>
    </div>
  )
}

