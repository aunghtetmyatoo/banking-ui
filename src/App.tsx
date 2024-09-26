import Header from "./components/Header";
import "./App.css";
import State from "./components/State";

export default function App() {
  return (
    <>
      <Header />
      <div className="mt-10 px-40">
        <State />
      </div>
    </>
  );
}
