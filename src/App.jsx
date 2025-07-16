import ClickHandler from "./components/ClickHandler";
import FormHandler from "./components/FormHandler";
import Greetings from "./components/Greetings"
import Todolist from "./components/Todolist";
import UserProfile from "./components/UserProfile"
import Counter from "./components/counter";
import InputHandler from "./components/InputHandler";

function App() {

  // const name = "Bob";
  // const element = <h2>Hello, {name}! </h2>

  //  const [state, setState] = useState(initialValue);
  //  const items = ['Apple', 'Orange', 'Grape'];

  return (
    <>
       {/* {items.map((item, index) => (
          <div key={index}>
          <h3>{item}</h3>
          <p>Some Fruit</p>
         </div>
       ) )}
      <p>Dumbo Dunzo</p>
      <Greetings name="John" />
      <Greetings name="alma" />
      <h1>User Info</h1> */}

      <UserProfile/>
      <Counter/>
      <Todolist/>
      <ClickHandler/>
      <InputHandler/>
      <FormHandler/>
    </>
  )
}

export default App
