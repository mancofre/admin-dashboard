import React from 'react'

const TopSellingItem = ({ item }) => {
  return (
    <tr>
        <th scope='row'>
            <a href='/'> 
                <img src={item.preview} alt=''/>
            </a>
        </th>
        <td>
            <a className='text-primary fw-bold' href='/'>
                {item.name}
            </a>
        </td>
        <td>${item.price.toFixed(2)}</td>
        <td className='fw-bold'>{item.sold}</td>
        <td>${item.price * item.sold}</td>
    </tr>
  )
}

export default TopSellingItem