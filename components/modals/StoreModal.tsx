import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import useStoreModal from "@/hooks/store/useStoreModal";
import useCreateStoreMutation from "@/hooks/store/useCreateStoreMutation";
import Modal from ".";

const formSchema = z.object({ name: z.string().nonempty() });

const defaultValues: z.infer<typeof formSchema> = {
  name: "",
};

const StoreModal = () => {
  const { isOpen, onClose } = useStoreModal();
  const { mutate, isLoading, isError, error } = useCreateStoreMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues,
    resolver: zodResolver(formSchema),
  });

  const handleClose = () => onClose();
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    mutate(values);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Create Store"
      description="Add a new store to manage products and categories"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Store Name</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={isLoading} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {isError && (
              <div className="text-sm p-4 rounded-lg bg-rose-50 text-rose-500">
                {error.response?.data as string}
              </div>
            )}
            <div className="flex gap-4 justify-end">
              <Button
                type="button"
                variant="outline"
                disabled={isLoading}
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isLoading}>
                Create
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </Modal>
  );
};

export default StoreModal;
