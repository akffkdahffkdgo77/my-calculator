import { useState } from 'react';

import { DigitButton, OperatorButton, Screen } from 'components';

export default function Home() {
    const [currentValue, setCurrentValue] = useState('');
    const [operator, setOperator] = useState('');
    const [result, setResult] = useState('');

    const handleReset = () => {
        setCurrentValue('');
        setOperator('');
        setResult('');
    };

    const handleDelete = () => {
        if (currentValue && currentValue.length > 1) {
            const val = currentValue.slice(0, currentValue.length - 1);
            setCurrentValue(val);
        } else {
            setCurrentValue('');
        }
    };

    const handleNegativePositive = () => setCurrentValue((prev) => `${parseInt(prev, 10) * -1}`);

    const handleOperator = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { value } = e.currentTarget;
        if (value === '=' && operator) {
            setCurrentValue(result);
            setOperator('');
            setResult('');
        } else if (value !== '=' && !operator) {
            setOperator(value);
            setCurrentValue((prev) => `${prev} ${value} `);
        }
    };

    const handleNumber = (e: React.MouseEvent<HTMLButtonElement>) => {
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
                    <OperatorButton operator="C" onClick={handleReset} />
                    <OperatorButton operator="←" onClick={handleDelete} />
                    <OperatorButton operator="%" onClick={handleOperator} />
                    <OperatorButton operator="÷" onClick={handleOperator} />
                    {['7', '8', '9'].map((digit) => (
                        <DigitButton key={`${digit} button`} digit={digit} onClick={handleNumber} />
                    ))}
                    <OperatorButton operator="x" onClick={handleOperator} />
                    {['4', '5', '6'].map((digit) => (
                        <DigitButton key={`${digit} button`} digit={digit} onClick={handleNumber} />
                    ))}
                    <OperatorButton operator="-" onClick={handleOperator} />
                    {['1', '2', '3'].map((digit) => (
                        <DigitButton key={`${digit} button`} digit={digit} onClick={handleNumber} />
                    ))}
                    <OperatorButton operator="+" onClick={handleOperator} />
                    <OperatorButton operator="±" onClick={handleNegativePositive} />
                    {['0', '.'].map((digit) => (
                        <DigitButton key={`${digit} button`} digit={digit} onClick={handleNumber} />
                    ))}
                    <OperatorButton secondary operator="=" onClick={handleOperator} />
                </div>
            </div>
        </div>
    );
}
