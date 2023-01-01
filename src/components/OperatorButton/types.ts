export interface IOperatorButton {
    secondary?: boolean;
    operator: string;
    handleOperator: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
