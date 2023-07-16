// button.component.tsx

import { ReactNode } from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@material-tailwind/react";

// Only include variant, size, and color
type ButtonBaseProps = Pick<MuiButtonProps, keyof MuiButtonProps> &
  React.RefAttributes<HTMLButtonElement>;

export interface ButtonProps extends ButtonBaseProps {
  label?: string | ReactNode;
  onClick?: () => void;
}

export const Button = ({ label, ...props }: ButtonProps) => (
  <MuiButton {...props}>{label}</MuiButton>
);
