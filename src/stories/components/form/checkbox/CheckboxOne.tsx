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
    <label htmlFor={id} className="lib-checkbox">
      <input id={id} type="checkbox" checked={checked} onChange={onChange} disabled={disabled} />
      {label && (
        <span className="lib-checkbox__label" style={{ margin: '0 5px' }}>
          {label}
        </span>
      )}
    </label>
  );
};

export default CheckboxOne;
