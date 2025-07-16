import ClickHandler from "./components/ClickHandler";
import FormHandler from "./components/FormHandler";
import Greetings from "./components/Greetings"
import Todolist from "./components/Todolist";
import UserProfile from "./components/UserProfile"
import Counter from "./components/counter";
import InputHandler from "./components/InputHandler";
import Greeting from "./components/Greeting";
import UserRole from "./components/UserRole";
import Namelist from "./components/Namelist";
import Image from "./components/Image";
import ControlledInput from "./components/ControlledInput";
import MultiInputForm from "./components/MultiInputForm";

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
      {/* conditional rendering */}
      <Greeting isLoggedIn={true} />
      <UserRole role={'editor'}/>
      <UserRole role={'admin'}/>
      <UserRole role={'Viewer'}/>
      <Namelist/>
      <Image/>
      <ControlledInput/>
      <MultiInputForm/>
    </>
  )

}

export default App
