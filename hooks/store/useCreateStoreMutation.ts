import axios, { AxiosError } from "axios";
import { useMutation } from "react-query";
import { Store } from "@prisma/client";

type SuccessHanlder = (store: Store) => void;

const useCreateStoreMutation = (onSuccess?: SuccessHanlder) =>
  useMutation<Store, AxiosError, { name: string }>(
    (newStore) => axios.post("/api/stores", newStore),
    { onSuccess }
  );

export default useCreateStoreMutation;
