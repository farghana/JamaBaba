import React from 'react'

const MobileMenu = () => {
  return (
    <div
					className='hidden'
					id='mobile-menu'
				>
					<div className='space-y-1 px-2 pb-3 pt-2'>
						<a
							href='/index.html'
							className='bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium'
						>
							Home
						</a>
						<a
							href='/properties.html'
							className='text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
						>
							View Deals
						</a>
						<a
							href='/add-property.html'
							className='text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
						>
							Add Deal
						</a>
						<button className='flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 my-4'>
							<i className='fa-brands fa-google mr-2'></i>
							<span>Login or Register</span>
						</button>
					</div>
				</div>
  )
}

export default MobileMenu
