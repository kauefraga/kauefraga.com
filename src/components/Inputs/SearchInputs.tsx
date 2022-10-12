interface ISearchInputProps {
  placeholder: string;
  onChange: (value: any) => void;
  value: string;
}

export const SearchInput: React.FC<ISearchInputProps> = ({ placeholder, onChange, value  }) => {
  return (
    <input
      className="border-2 border-blue-700 rounded-lg p-2 w-72 focus:outline-none"
      type="text"
      placeholder={placeholder ?? 'Search...'}
      onChange={onChange}
      value={value}
    />
  );
};
