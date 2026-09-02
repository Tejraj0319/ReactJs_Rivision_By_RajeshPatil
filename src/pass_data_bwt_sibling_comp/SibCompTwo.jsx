import { useLocation } from "react-router";

const SibCompTwo = () => {
  const location = useLocation();

  const user = location.state;

  return (
    <div>
      <h1>Sibling Component Two</h1>
      <h2>Name: {user.name}</h2>
      <h2>Age: {user.age}</h2>
    </div>
  );
};

export default SibCompTwo;
