import axios from "axios"
import { useEffect } from "react";

export default function App() {
  async function fetchApi() {
    const res = await axios.get("http://localhost:8080/api/users")
    console.log(res.data.users);
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return
}