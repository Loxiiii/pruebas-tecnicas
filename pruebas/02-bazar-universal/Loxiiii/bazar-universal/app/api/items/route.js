import { NextResponse } from 'next/server';
import products from '../../../products.json';

export async function GET(request, context) {
  let searched = request.nextUrl.searchParams.get('q')
//  const test = 'iphone'
  //  const prods = products.products.filter((prod) => prod.title.toLowerCase().includes(request.params.q.toLowerCase()));
  //    typeof (prod.title) === 'string');

    const filteredProducts = products.products.filter((prod) => prod.title.toLowerCase().includes(searched.toLowerCase()));
//  console.log('This is the request search params: ', request.nextUrl.searchParams.get('search'));
  return NextResponse.json(filteredProducts);
}
