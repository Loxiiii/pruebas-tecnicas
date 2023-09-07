import { NextResponse } from 'next/server';
import products from '../../../products.json';

export async function GET(request, context) {
//  const test = 'iphone';
//  const { q } = request.query;
  //  const prods = products.products.filter((prod) => prod.title.toLowerCase().includes(request.params.q.toLowerCase()));
  //    typeof (prod.title) === 'string');

  //  const filteredProducts = products.products.filter((prod) => prod.title.toLowerCase().includes(q.toLowerCase()));
  console.log('These are the params: ', context);
  return NextResponse.json(context);
}
