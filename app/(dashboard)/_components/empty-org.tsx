"use client";

// import { CreateOrganization } from "@clerk/nextjs";
import { Loader2Icon } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { addUserToOrg } from "@/actions/org";
import { useOrganizationList } from "@clerk/nextjs";
// import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export const EmptyOrg = () => {
  const { isLoaded, setActive } = useOrganizationList();
  const [isPending, startTransition] = useTransition();

  const handleCreateOrganization = () => {
    startTransition(async () => {
      const { data, error } = await addUserToOrg();

      if (!data || error) {
        toast.error(error || "Unable to add user to organization!");
        return;
      }

      setActive?.({ organization: data.id });
      window.location.reload();
    });
  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/elements.svg" alt="Empty" height={200} width={200} />

      <h2 className="text-2xl font-semibold mt-6">Welcome to Miro</h2>
      <p className="text-sm text-muted-foreground mt-2">
        Create an organization to get started.
      </p>

      <div className="mt-6">
        {/* For production instance, don't use in development due to clerk's 50 organization limit. */}
        {/* <Dialog>
          <DialogTrigger asChild>
            <Button size="lg">Create organization</Button>
          </DialogTrigger>

          <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
            <CreateOrganization />
          </DialogContent>
        </Dialog> */}

        <Button
          size="lg"
          onClick={handleCreateOrganization}
          disabled={isPending || !isLoaded}
        >
          {isPending && (
            <Loader2Icon
              className="size-4 animate-spin mr-2"
              strokeWidth={2.5}
            />
          )}
          Create organization
        </Button>
      </div>
    </div>
  );
};
