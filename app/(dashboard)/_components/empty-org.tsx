"use client";

import { useOrganizationList } from "@clerk/nextjs";
import { Loader2Icon, PlusIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { addUserToOrg } from "@/actions/org";

export const EmptyOrg = () => {
  const { isLoaded, setActive } = useOrganizationList();
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleCreateOrganization = () => {
    startTransition(async () => {
      const { data, error } = await addUserToOrg();

      if (!data || error) {
        toast.error(error || "Unable to add user to organization!");
        return;
      }

      setActive?.({ organization: data.id });
      router.refresh();
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
        <Button
          size="lg"
          onClick={handleCreateOrganization}
          disabled={isPending || !isLoaded}
        >
          {isPending ? (
            <Loader2Icon
              className="size-4 animate-spin mr-2"
              strokeWidth={2.5}
            />
          ) : (
            <PlusIcon className="size-4 mr-1.5" strokeWidth={2.5} />
          )}
          Create organization
        </Button>
      </div>
    </div>
  );
};
