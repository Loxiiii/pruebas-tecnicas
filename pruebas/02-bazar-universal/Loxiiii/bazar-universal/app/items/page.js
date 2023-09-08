import ItemCard from '../../components/ItemCard.js'

export default async function Items({ searchParams }) {
  let products = await fetch(`http://localhost:3000/api/items?q=${searchParams.search}`)
  let prods = await products.json();
  console.log('these are the products: ', prods)
  console.log('The type is: ', typeof(prods))
  return (
    <div>
      <div>This is the item page for {searchParams.search}</div>
      <ul>
        {
        prods.map((prod) => {
          return (
            <ItemCard product={prod}></ItemCard>
          )
        })
        }
      </ul>

    </div>
  );
}
