import { useState } from 'react';

import { DigitButton, OperatorButton, Screen } from 'components';

export default function Home() {
    const [currentValue, setCurrentValue] = useState('');
    const [operator, setOperator] = useState('');
    const [result, setResult] = useState('');

    const onReset = () => {
        setCurrentValue('');
        setOperator('');
        setResult('');
    };

    const onDelete = () => {
        if (currentValue && currentValue.length > 1) {
            const val = currentValue.slice(0, currentValue.length - 1);
            setCurrentValue(val);
        } else {
            setCurrentValue('');
        }
    };

    const onNegativePositive = () => setCurrentValue((prev) => `${parseInt(prev, 10) * -1}`);

    const onOperatorClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { value } = e.currentTarget;
        if (value === '=' && operator) {
            setCurrentValue(result);
            setOperator('');
            setResult('');
        } else {
            setOperator(value);
            setCurrentValue((prev) => `${prev} ${value} `);
        }
    };

    const onNumberClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { value } = e.currentTarget;
        if (currentValue.length < 15) {
            setCurrentValue((prev) => `${prev}${value}`);
        }

        if (currentValue) {
            let results = '';
            const [X] = currentValue.split(' ');

            switch (operator) {
                case '%':
                    results = `${Number(X) % Number(value)}`;
                    break;
                case '÷':
                    results = `${Number(X) / Number(value)}`;
                    break;
                case 'x':
                    results = `${Number(X) * Number(value)}`;
                    break;
                case '-':
                    results = `${Number(X) - Number(value)}`;
                    break;
                case '+':
                    results = `${Number(X) + Number(value)}`;
                    break;
                default:
                    break;
            }
            setResult(results);
        }
    };

    return (
        <div className="w-full min-h-screen flex justify-center items-center">
            <div className="w-[320px] h-full flex justify-center items-center flex-col rounded-md overflow-hidden shadow-lg">
                <Screen result={result} currentValue={currentValue} />
                <div className="p-2.5 w-full h-[325px] grid grid-cols-4 grid-rows-5 gap-px bg-pink-50">
                    <OperatorButton operator="C" handleOperator={onReset} />
                    <OperatorButton operator="←" handleOperator={onDelete} />
                    <OperatorButton operator="%" handleOperator={onOperatorClick} />
                    <OperatorButton operator="÷" handleOperator={onOperatorClick} />
                    {['7', '8', '9'].map((digit) => (
                        <DigitButton key={`${digit} button`} digit={digit} handleClick={onNumberClick} />
                    ))}
                    <OperatorButton operator="x" handleOperator={onOperatorClick} />
                    {['4', '5', '6'].map((digit) => (
                        <DigitButton key={`${digit} button`} digit={digit} handleClick={onNumberClick} />
                    ))}
                    <OperatorButton operator="-" handleOperator={onOperatorClick} />
                    {['1', '2', '3'].map((digit) => (
                        <DigitButton key={`${digit} button`} digit={digit} handleClick={onNumberClick} />
                    ))}
                    <OperatorButton operator="+" handleOperator={onOperatorClick} />
                    <OperatorButton operator="±" handleOperator={onNegativePositive} />
                    {['0', '.'].map((digit) => (
                        <DigitButton key={`${digit} button`} digit={digit} handleClick={onNumberClick} />
                    ))}
                    <OperatorButton secondary operator="=" handleOperator={onOperatorClick} />
                </div>
            </div>
        </div>
    );
}
