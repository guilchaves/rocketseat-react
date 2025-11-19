import { useCallback, useState } from "react";
import { api, fetcher } from "../helpers/api";
import type { User } from "../models/user";

export default function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const [requestStatus, setRequestStatus] = useState<
    "idle" | "loading" | "saving"
  >("idle");

  const getUser = useCallback(async (username: string) => {
    try {
      setRequestStatus("loading");
      const data = await fetcher(`users/${username}`);
      setUser(data);
    } catch (error) {
      console.error("Failed to fetch user:", error);
    } finally {
      setRequestStatus("idle");
    }
  }, []);

  async function createUser(payload: User) {
    try {
      setRequestStatus("saving");

      await api("users", { method: "POST", body: JSON.stringify(payload) });

      alert("User created successfully");
    } catch (e) {
      console.error("Failed to create user:", e);

      alert("Failed to create user");
    } finally {
      setRequestStatus("idle");
    }
  }

  return {
    user,
    userRequestStatus: requestStatus,
    getUser,
    createUser,
  };
}
