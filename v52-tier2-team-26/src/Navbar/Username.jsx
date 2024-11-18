import { useUser } from "../contexts/UserContext";

const Username = () => {
  const { user } = useUser();

  return <h1></h1>;
};

export default Username;
