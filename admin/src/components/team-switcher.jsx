"use client"

import { useState } from "react"

export function TeamSwitcher({ teams }) {
  const [open, setOpen] = useState(false)
  const [selectedTeam, setSelectedTeam] = useState(teams[0])

  return (
    <div className="flex w-full items-center gap-2">
      {selectedTeam.logo}
      <span className="text-sm font-medium">{selectedTeam.name}</span>
      <svg
        className="ml-auto h-4 w-4 text-[#8893b0]"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

