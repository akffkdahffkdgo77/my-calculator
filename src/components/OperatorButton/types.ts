export interface IOperatorButton {
    secondary?: boolean;
    operator: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
