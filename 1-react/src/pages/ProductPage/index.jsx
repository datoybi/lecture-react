import React from "react";
import Page from "../../components/Page";
import Title from "../../components/Title";
import ProductItem from "../../components/ProductItem";
import Navbar from "../../components/Navbar";
import ProductApi from "shared/api/ProductApi";
import OrderableProductItem from "./OrderableProductItem";
class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
    };
  }

  async fetch() {
    try {
      const productList = await ProductApi.fetchProductList();
      console.log(productList);
      this.setState({ productList });
    } catch (e) {
      console.error(e);
    }
  }

  componentDidMount() {
    this.fetch();
  }

  render() {
    return (
      <div className="ProductPage">
        <Page header={<Title>메뉴 목록</Title>} footer={<Navbar />}>
          <ul>
            {this.state.productList.map((product) => (
              <li key={product.id}>
                <OrderableProductItem product={product} />
              </li>
            ))}
          </ul>
        </Page>
      </div>
    );
  }
}
export default ProductPage;
