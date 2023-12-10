type LabelInputProps = {
  label: string;
  name: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const LabelInput = ({ label, name, id, onChange }: LabelInputProps) => {
  return (
    <div className="input-wrapper">
      <input
        type="text"
        name={name}
        id={id}
        placeholder={label}
        onChange={onChange}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default LabelInput;
