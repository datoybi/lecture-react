import React from "react";

import Page from "../../components/Page";
import Button from "../../components/Button";
import Title from "../../components/Title";
import ProductItem from "../../components/ProductItem";
import FormControl from "../../components/FormControl";
import OrderForm from "./OrderForm";
import PaymentButton from "./PaymentButton";
import ProductApi from "shared/api/ProductApi";

class CartPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async fetch() {
    try {
      const product = await ProductApi.fetchProduct("CACDA421");
      console.log(product);
      this.setState({ product });
    } catch (e) {
      console.error(e);
    }
  }

  componentDidMount() {
    this.fetch();
  }

  handleSubmit(values) {
    console.log(values);
  }

  render() {
    const { product } = this.state;
    return (
      <div className="CartPage">
        <Page
          header={
            <>
              <Title backUrl={"/"}>장바구니</Title>
            </>
          }
          footer={<PaymentButton />}
        >
          {product && <ProductItem product={product} />}
          <OrderForm onSubmit={this.handleSubmit} />
        </Page>
      </div>
    );
  }
}

export default CartPage;
