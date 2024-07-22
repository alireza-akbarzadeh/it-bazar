import { Appbar, Features, ProductCarousel, RowInfo } from './components';
import { FAQ } from './components/faq';
import { PriceChanges } from './components/price-changes/price-changes';
import { ProductInfo } from './components/product-info/product-info';
import { SimilarProduct } from './components/similar-product/similar';
import { StoreInfo } from './components/store-info/store-info';

export function ProductDomain() {
  return (
    <section id="product-details-page" data-testid="product-details-page">
      <div className="bg-content-inverse px-4">
        <Appbar />
        <ProductCarousel />
        <RowInfo />
        <Features />
        <ProductInfo />
      </div>
      <StoreInfo />
      {/* <StoresMap /> */}
      <FAQ />
      <div className="space-y-2">
        <SimilarProduct title="محصولات مشابه" />
        <PriceChanges />
        <SimilarProduct title="اپل" />
      </div>
    </section>
  );
}
