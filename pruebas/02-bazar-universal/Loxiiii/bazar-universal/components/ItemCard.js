import Image from 'next/image'


export default async function ItemCard ({ product })  {
    return (
        <div className='flex flex-row'>
            <Image src='https://random.imagecdn.app/50/50' width={50} height={50}/>
            <div className='flex flex-col'>
                <div>{product.title}</div>
                <div>{product.description}</div>
                <div className='flex'>
                    <div>{product.price}</div>
                    <div>{product.rating}</div>
                </div>
            </div>
            
        </div>
    )
}