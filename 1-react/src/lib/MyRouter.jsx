import React from "react";
import createEventEmitter from "shared/lib/EventEmitter";
import CartPage from "../pages/CartPage";
import ProductPage from "../pages/ProductPage";
import OrderPage from "../pages/OrderPage";

export const routerContext = React.createContext({});
routerContext.displayName = "RouterContext";

export const Link = ({ to, ...rest }) => (
  <routerContext.Consumer>
    {({ path, changePath }) => {
      const handleClick = (e) => {
        e.preventDefault();
        if (to !== path) changePath(to);
      };
      return <a {...rest} href={to} onClick={handleClick} />;
    }}
  </routerContext.Consumer>
);
export class Router extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      path: window.location.pathname,
    };
    this.handleChangePath = this.handleChangePath.bind(this);
  }

  handleChangePath(path) {
    this.setState({ path });
  }

  render() {
    const contextValue = {
      path: this.state.path,
      changePath: this.handleChangePath,
    };

    return <routerContext.Provider value={contextValue}>{this.props.children}</routerContext.Provider>;
  }
}

// export const Route = ({ path, element }) => {
//   return (<routerContext.Consumer{
//     ({ path }) => (
//       <>
//         {path === "/order" && <OrderPage />}
//         {path === "/cart" && <CartPage />}
//         {!["/order", "/cart"].includes(path) && <ProductPage />}
//       </>
//     );
//   }
// };

export const Routes = ({ children }) => {
  // console.log(<Route path="/cart" element={<CartPage />} />);

  return (
    <routerContext.Consumer>
      {({ path }) => {
        let selectedRoute = null;

        React.Children.forEach(children, (child) => {
          // 리엑트 엘리먼트인지 검사
          if (!React.isValidElement(child)) return;

          // 프레그먼트 검사
          if (child.type === React.Fragment) return;

          // Route 컴포넌트인지 검사
          if (!child.props.path || !child.props.element) return;

          console.log(child);
          // 요청 경로를 검사한다.
          if (child.props.path !== path.replace(/\?.*$/, "")) return;

          selectedRoute = child.props.element;
        });

        return selectedRoute;
      }}
    </routerContext.Consumer>
  );
};

export const Route = () => null;
