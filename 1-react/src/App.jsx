import React from "react";
import createEventEmitter from "shared/lib/EventEmitter";
import * as MyRouter from "./lib/MyRouter";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
import ProductPage from "./pages/ProductPage";

const App = () => (
  <MyRouter.Router>
    <MyRouter.Routes>
      <MyRouter.Route path="/cart" element={<CartPage />} />
      <MyRouter.Route path="/order" element={<OrderPage />} />
      <MyRouter.Route path="/" element={<ProductPage />} />
    </MyRouter.Routes>
  </MyRouter.Router>
);

export default App;

/* MyReact 예시 */
// import MyReact from "./lib/MyReact";

// const countContext = MyReact.createContext({ count: 0, setCount: () => {} });

// class CountProvider extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }

//   render() {
//     const value = {
//       count: this.state.count,
//       setCount: (nextValue) => this.setState({ count: nextValue }),
//     };

//     return <countContext.Provider value={value}>{this.props.children}</countContext.Provider>;
//   }
// }

// const Count = () => {
//   return <countContext.Consumer>{(value) => <div>{value.count}</div>}</countContext.Consumer>;
// };

// const PlusButton = () => {
//   return (
//     <countContext.Consumer>
//       {(value) => <button onClick={() => value.setCount(value.count + 1)}>+ 카운트 올리기</button>}
//     </countContext.Consumer>
//   );
// };

// export default () => (
//   <CountProvider>
//     <Count />
//     <PlusButton />
//   </CountProvider>
// );

/* context api의 근본인 eventEmitter 실행 샘플 코드 */
// const eventEmitter = createEventEmitter(0);
// const logger = (value) => console.log(value);

// eventEmitter.on(logger);
// console.log(eventEmitter.get()); // 0
// eventEmitter.set(1); // 1
// eventEmitter.set(2); // 2

// setTimeout(() => eventEmitter.set(10), 3000);

/* useRef 샘플 코드 */
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
