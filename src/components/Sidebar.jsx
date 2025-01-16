import React, { useState } from 'react'
import { navLinks } from '../constants/index'
import { sun } from '../assets'
import { useNavigate, Link } from 'react-router-dom'
import { IconHeartHandshake } from '@tabler/icons-react'

const Icon = ({ style, name, imageUrl, isActive, disabled, handleClick }) => {
  return (
    <div
      className={`h-[48px] w-[48px] rounded-[10px] ${
        isActive && isActive === name && 'bg-gray-700'
      } flex items-center justify-center ${style}`}
      onClick={handleClick}
    >
      {isActive ? (
        <img src={imageUrl || "/placeholder.svg"} alt="CancerCube" className="h-6 w-6" />
      ) : (
        <img
          src={imageUrl || "/placeholder.svg"}
          alt="CancerCube"
          className={`h-6 w-6 ${isActive && 'grayscale'}`}
        />
      )}
    </div>
  )
}

const Sidebar = () => {
  const navigate = useNavigate()
  const [isActive, setIsActive] = useState("dashboard")

  return (
    <div className="sticky top-5 h-[93vh] flex flex-col items-center justify-between">
      <Link to="/">
        <div className="rounded-[10px] bg-gray-800 p-3 hover:bg-gray-700 transition-colors">
          <IconHeartHandshake size={50} color="#4ade80" />
        </div>
      </Link>
      <div className="mt-12 flex w-[76px] flex-1 flex-col items-center justify-between rounded-[20px] bg-gray-900 py-4">
        <div className="flex flex-col items-center justify-center gap-3">
          {navLinks.map((link) => (
            <Icon
              key={link.name}
              {...link}
              isActive={isActive}
              handleClick={() => {
                setIsActive(link.name)
                navigate(link.path)
              }}
            />
          ))}
        </div>
        <Icon style="bg-gray-800 shadow-lg hover:bg-gray-700 transition-colors mt-10" imageUrl={sun || "/placeholder.svg"} />
      </div>
    </div>
  )
}

export default Sidebar

