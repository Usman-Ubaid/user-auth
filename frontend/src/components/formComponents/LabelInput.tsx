type LabelInputProps = {
  label: string;
  name: string;
  id: string;
};

const LabelInput = ({ label, name, id }: LabelInputProps) => {
  return (
    <div className="input-wrapper">
      <input type="text" name={name} id={id} placeholder={label} />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default LabelInput;
