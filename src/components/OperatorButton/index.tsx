import { IOperatorButton } from 'components/OperatorButton/types';

export default function OperatorButton({ secondary = false, operator, handleOperator }: IOperatorButton) {
    return (
        <button
            type="button"
            className={`${secondary ? 'bg-purple-500 text-white' : 'bg-purple-300'} font-mono self-center place-self-center w-14 h-14 font-bold text-black text-[20px] rounded-full`}
            value={operator}
            onClick={handleOperator}
        >
            {operator}
        </button>
    );
}
