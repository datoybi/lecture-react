import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";

const App = () => (
  <>
    {/* <ProductPage /> */}
    <CartPage />
  </>
);

export default App;

// import React from "react";

// class Foo extends React.Component {
//   render() {
//     return <>Foo</>;
//   }
// }

// class MyComponent extends React.Component {
//   // 컴포넌트를 ref로 넣으면 컴포넌트의 인스턴스를 가리킨다.
//   divRef = React.createRef();
//   fooRef = React.createRef();

//   constructor(props) {
//     super(props);
//     console.log("constructor", this.divRef);
//   }

//   render() {
//     console.log("render", this.divRef);
//     return (
//       <>
//         <div ref={this.divRef}>div</div>
//         <Foo ref={this.fooRef} />
//       </>
//     );
//   }

//   componentDidMount() {
//     console.log("componentDidMount", this.divRef);
//     console.log("componentDidMount", this.fooRef);
//     this.divElement = this.divRef.current;
//     this.divElement.style.backgroundColor = "red";
//     this.divElement.style.height = "100px";
//     this.divElement.style.width = "100px";
//   }
// }

// export default MyComponent;
