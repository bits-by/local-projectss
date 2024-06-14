import React from 'react'

export const RevenueCard = () => {
    const card = {
        title, orderCount, amount
    }
  return (
    <div className="bg-white rounded shadow-md pd-4 ">
        <div className="text-gray-700">
            {title}
            ?
        </div>
        
        <div className="flex justify-between">
            ${amount}
        </div>
    </div>
  )
}
