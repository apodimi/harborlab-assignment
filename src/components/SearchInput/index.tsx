interface SearchInputProps {
  value: string;
  onChange: (term: string) => void;
}

export const SearchInput = ({ value, onChange }: SearchInputProps) => {
  return (
    <input
      type="text"
      className="w-full p-2 border border-gray-300 rounded"
      placeholder="Type to search..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
