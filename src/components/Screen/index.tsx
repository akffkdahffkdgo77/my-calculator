import { IScreen } from 'components/Screen/types';

export default function Screen({ result, currentValue }: IScreen) {
    return (
        <div className="w-full h-[200px] p-5 flex items-end justify-center flex-col border-2 border-pink-50 border-b-0 bg-pink-50">
            <div className={currentValue.length > 8 ? 'w-full text-right text-[24px] font-bold overflow-x-auto' : 'text-[50px] font-bold'}>{currentValue}</div>
            <div className="text-[10px] font-bold">{result}</div>
        </div>
    );
}
