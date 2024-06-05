import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HeaderNavbar } from '../components/HeaderNavbar/HeaderNavbar';
import CartPage from './../pages/CartPage/CartPage';
import HomePage from './../pages/HomePage/HomePage';
export default function Router() {
  return (
    <BrowserRouter>
      <div class="container">
        <header>
          <h1>BACON LOVERS</h1>
        </header>

        <HeaderNavbar as="nav" />
        <aside></aside>
        <main>
          <section id="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </section>
        </main>
        <aside>Related links</aside>
        <footer>Footer</footer>
      </div>
    </BrowserRouter>
  );
}
