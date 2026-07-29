import { Input } from '@/components/ui/Input';
import { SearchIcon } from '@/components/ui/icons';

interface SearchBarProps {
  label: string;
  placeholder: string;
  className?: string;
}

export function SearchBar({ label, placeholder, className }: SearchBarProps) {
  return (
    <Input
      type="search"
      label={label}
      hideLabel
      placeholder={placeholder}
      leadingIcon={<SearchIcon />}
      className={className}
    />
  );
}
