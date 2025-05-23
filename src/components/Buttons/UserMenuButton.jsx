import React from 'react'

const UserMenuButton = ({ icon: Icon, name, onClick }) => {
  return (
    <>
    <button onClick={onClick ? onClick : undefined} className="flex items-center gap-4 text-md p-2 hover:bg-blue-200/50 w-full"><Icon className="text-2xl" />{name}</button>
    </>
  )
}

export default UserMenuButton