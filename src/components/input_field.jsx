const InputField = ({ label, ...props }) => (
    <div className="flex flex-col">
      <label className="text-sm mb-1">{label}</label>
      <input
        className="border p-2 rounded focus:outline-blue-500"
        {...props}
      />
    </div>
  );
  export default InputField;
  