'use client'

import Image from 'next/image'
import Link from 'next/navigation'


export default async function ItemCard ({ product })  {
    return (
        <div href={`/items/${product.id}`} className='flex flex-row w-5/6 max-h-24 items-center border border-white
        rounded-md p-2 mb-3 '>
            <Image src={product.thumbnail} width={50} height={50}/>
            <div className='w-3/4 ml-6 flex flex-col'>
                <div>{product.title}</div>
                <div className='truncate max-w-xs'>{product.description}</div>
                <div className='flex place-content-between'>
                    <div>{product.price}$</div>
                    <div>{product.rating}</div>
                </div>
            </div>
            
        </div>
    )
}