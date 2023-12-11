type LabelInputProps = {
  label: string;
  name: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const LabelInput = ({ label, name, id, onChange, value }: LabelInputProps) => {
  return (
    <div className="input-wrapper">
      <input
        type="text"
        name={name}
        id={id}
        placeholder={label}
        onChange={onChange}
        value={value}
        required
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default LabelInput;
