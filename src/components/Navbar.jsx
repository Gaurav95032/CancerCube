import React, { useCallback } from 'react'
import { search } from '../assets'
import CustomButton from './CustomButton'
import { usePrivy } from '@privy-io/react-auth'

const Navbar = () => {
    const {ready, authenticated, login, user, logout} = usePrivy()
    const handleLoginLogout = useCallback(() => {
        if(authenticated){
            logout()
        } else {
            login().then((user) => {
                if (user) {
                    console.log(user)
                    //fetch user data
                }
            })
        }
    }, [authenticated, login, logout, user])

    return (
        <div className='mb-[35px] flex flex-col-reverse justify-between gap-6 md:flex-row bg-gray-900 p-4 rounded-lg'>
            {/* searchBar */}
            <div className='flex h-[52px] max-w-[458px] flex-row rounded-[100px] bg-gray-800 py-2 pl-2 pr-2 lg:flex-1'>
                <input
                    type='text'
                    placeholder='search for records'
                    className='flex w-full bg-transparent font-epilogue text-[14px] font-normal text-gray-200 outline-none placeholder:text-gray-500'
                />
                <div className='flex h-full w-[72px] cursor-pointer items-center justify-center rounded-[20px] bg-blue-600 hover:bg-blue-700 transition-colors'>
                    <img src={search || "/placeholder.svg"} alt="search" className='h-[15px] w-[15px] object-contain' />
                </div>
            </div>
            <div className='hidden flex-row justify-end gap-2 sm:flex'>
                <CustomButton 
                    btnType={'button'}
                    title={authenticated ? 'Logout' : 'Login'}
                    style={authenticated ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-blue-600 text-white hover:bg-blue-700'}
                    handleClick={handleLoginLogout}
                />
            </div>
        </div>
    )
}

export default Navbar

