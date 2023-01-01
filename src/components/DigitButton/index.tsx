import { IDigitButton } from 'components/DigitButton/types';

export default function DigitButton({ digit, handleClick }: IDigitButton) {
    return (
        <button type="button" value={digit} className="font-mono self-center place-self-center w-14 h-14 text-[30px] font-bold bg-purple-300 rounded-full" onClick={handleClick}>
            {digit}
        </button>
    );
}
