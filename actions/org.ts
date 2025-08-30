"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";

export const addUserToOrg = async () => {
  try {
    const { userId } = auth();

    if (!userId) throw new Error("Unauthorized!");

    const { organization } =
      await clerkClient.organizations.createOrganizationMembership({
        organizationId: process.env.CLERK_DEFAULT_ORGANIZATION_ID!,
        role: "org:member",
        userId,
      });

    return { data: { id: organization.id }, error: null };
  } catch (error) {
    console.dir({ error }, { colors: true, depth: null });
    return {
      data: null,
      error:
        error instanceof Error
          ? error.message
          : "Unable to add user to organization!",
    };
  }
};
