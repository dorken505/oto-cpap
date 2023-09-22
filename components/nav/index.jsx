import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
      <Link href="/">Ana Sayfa</Link>
      <Link href="/urunler">Ürünler</Link>      
    </nav>
  );
}