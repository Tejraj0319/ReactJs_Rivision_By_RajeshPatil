import { useNavigate } from "react-router-dom";

const SibCompOne = () => {
  const navigate = useNavigate();

  const user = {
    name: "RAJESH",
    age: 25,
  };

  const goToSibCompTwo = () => {
    navigate("/sibcomptwo", { state: user });
  };

  return (
    <div>
      <h1>SibCompOne</h1>
      <button onClick={goToSibCompTwo}>Go To SibCompTwo</button>
    </div>
  );
};

export default SibCompOne;
