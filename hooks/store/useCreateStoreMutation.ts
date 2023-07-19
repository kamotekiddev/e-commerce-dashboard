import axios, { AxiosError } from "axios";
import { useMutation } from "react-query";
import { Store } from "@prisma/client";

const useCreateStoreMutation = () =>
  useMutation<Store, AxiosError, { name: string }>((newStore) =>
    axios.post("/api/stores", newStore)
  );

export default useCreateStoreMutation;
