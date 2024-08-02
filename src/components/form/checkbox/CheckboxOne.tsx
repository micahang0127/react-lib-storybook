import React, { useState } from 'react';

export interface CheckboxOneProps {
  id?: string;
  label?: string;
  checked: boolean;
  onChange?: (e: any) => void;
  disabled?: boolean;
}
export const CheckboxOne = ({
  id = 'checkboxStory',
  label = '',
  checked = false,
  onChange = () => {},
  disabled = false,
}: CheckboxOneProps) => {
  return (
    <label htmlFor={id} className="epk-checkbox">
      <input id={id} type="checkbox" checked={checked} onChange={onChange} disabled={disabled} />
      {label && <span>{label}</span>}
    </label>
  );
};

export default CheckboxOne;
