import { useUserContext } from "../context/useUserContext";

const ChildC : React.FC = () => {
    //4.used directly in component
    const { developer } = useUserContext();
    const { name, city } = developer;

  return (
    <div>
      <h1>My Name is {name} and stay in {city} ,Delhi.</h1>
    </div>
  )
}

export default ChildC
