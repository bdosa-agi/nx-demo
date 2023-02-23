import { Button } from '@mui/material';

interface IProperties {
  label: string;
  className?: string;
  onClick: () => void;
}

export const ButtonComponent = ({ label, onClick, className }: IProperties) => {
  return (
    <Button variant="contained" onClick={() => onClick()} className={className}>
      {label}
    </Button>
  );
};
