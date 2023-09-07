export default async function Items({ searchParams }) {
    let products = await fetch('/api/items')
  return (
    <div>This is the item page for {searchParams.search}</div>
  );
}
