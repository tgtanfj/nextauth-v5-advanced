"use client";

import { useCurrentRole } from "@/hooks/use-current-role";
import { UserRole } from "@prisma/client";
import FormError from "../form-error";

interface RoleGateProps {
  children: React.ReactNode;
  allowRole: UserRole;
}

const RoleGate = ({ children, allowRole }: RoleGateProps) => {
  const role = useCurrentRole();

  if (role !== allowRole) {
    return (
      <FormError message="You do not have permission to view this content!" />
    );
  }

  return <>{children}</>;
};

export default RoleGate;
