import LabelInput from "./LabelInput";

type FieldsetProps = {
  legend: string;
};

const Fieldset = ({ legend }: FieldsetProps) => {
  return (
    <fieldset>
      <legend>{legend}</legend>
      <LabelInput label="Email" name="email" id="email" />
      <LabelInput label="Password" name="password" id="password" />
    </fieldset>
  );
};

export default Fieldset;
