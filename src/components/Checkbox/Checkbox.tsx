import {ChangeEventHandler, PropsWithChildren} from "react";
import clsx from "clsx";
import "./checkbox.scss"

interface CheckboxProps {
  id: string,
  className?: string
  onChange?: ChangeEventHandler<HTMLInputElement>,
  defaultChecked?: boolean
  checked?: boolean
}

export default function Checkbox({id, onChange, defaultChecked, className, checked, children}: PropsWithChildren<CheckboxProps>) {
  return (
    <label className={clsx("checkbox-label", className)} htmlFor={id}>
      <input id={id} type={"checkbox"} onChange={onChange} defaultChecked={defaultChecked} checked={checked}/>
      {children}
    </label>
  );
}
