import Header from "./components/Header";
import "./App.css";
import State from "./components/State";

export default function App() {
  return (
    <>
      <Header />
      <div className="mt-4 lg:mt-10 px-6 lg:px-40">
        <State />
      </div>
    </>
  );
}
