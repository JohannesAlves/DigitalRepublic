type Props = {
    handleOnChange?: React.ChangeEventHandler<HTMLInputElement>;
    value?: string;
    placeholder?: string;
};

function Input({ handleOnChange, value, placeholder }: Props) {
    return (
        <input
            name="name"
            onChange={handleOnChange}
            autoComplete="off"
            value={value}
            placeholder={placeholder}
            className="w-96 h-11 px-4 py-2 border-b-2 mt-14 bg-transparent border-gray-600 outline-none  focus:border-orange-500 text-gray-200 text-3xl text-center"
        />
    );
}

export default Input;
