import { Appbar, Features, ProductCarousel, RowInfo } from './components';
import { FAQ } from './components/faq';
import { PriceChart } from './components/price-chart/price-chart';
import { ProductInfo } from './components/product-info/product-info';
import { SimilarProduct } from './components/similar-product/similar';
import { StoreInfo } from './components/store-info/store-info';

export function ProductDomain() {
  return (
    <section
      id="product-details-page"
      data-testid="product-details-page"
      className="relative"
    >
      <Appbar />
      <ProductCarousel />
      <RowInfo />
      <Features />
      <ProductInfo />
      <StoreInfo />
      <FAQ />
      <div className="space-y-2">
        <SimilarProduct title="محصولات مشابه" />
        <PriceChart />
        <SimilarProduct title="اپل" />
      </div>
    </section>
  );
}
