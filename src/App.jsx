import { useEffect } from 'react';
import {
  asyncAIC,
  asyncCat,
  asyncPonball,
  asyncResp,
  fetchResp,
  thenAIC,
  thenCat,
  thenPonball,
} from './services/promise-me';

export default function App() {
  useEffect(() => {
    fetchResp();
    asyncResp();
    thenPonball();
    asyncPonball();
    thenAIC();
    asyncAIC();
    thenCat();
    asyncCat();
  });

  return <h1>Hello World</h1>;
}
