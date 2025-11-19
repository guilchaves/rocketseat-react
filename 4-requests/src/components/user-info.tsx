import { useEffect } from "react";
import useUser from "../hooks/use-user";

export default function UserInfo() {
  const { user, userRequestStatus, getUser } = useUser();

  useEffect(() => {
    getUser("gui");
  }, [getUser]);

  if (userRequestStatus === "loading") {
    return <p>Carregando usuário...</p>;
  }

  return (
    <ul>
      <li>Nome: {user?.name}</li>
      <li>Username (id): {user?.id}</li>
    </ul>
  );
}
