import { TextField } from '@mui/material';

interface IProperties {
  label: string;
  onChange: (value: string) => void;
}

export const InputComponent = ({ label, onChange }: IProperties) => {
  return (
    <TextField
      label={label}
      id="filled-hidden-label-small"
      variant="outlined"
      size="small"
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
