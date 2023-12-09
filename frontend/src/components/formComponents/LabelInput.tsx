type LabelInputProps = {
  label: string;
  name: string;
  id: string;
};

const LabelInput = ({ label, name, id }: LabelInputProps) => {
  return (
    <div>
      <label>{label}</label>
      <input type="text" name={name} id={id} />
    </div>
  );
};

export default LabelInput;
