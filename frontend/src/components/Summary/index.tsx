import './style.css';
import { formatPrice } from '../../pages/Orders/helpers';

type Props = {
    amount: number;
    totalPrice: number;
    onSubmit: () => void;
};

function Summary({ amount, totalPrice, onSubmit }: Props) {
    return (
        <div className="summary__container">
            <div className="summary__content">
                <div>
                    <span className="amount__selected__container">
                        <strong className="amount__selected">{amount}</strong>
                        PEDIDOS SELECIONADOS
                    </span>
                    <span className="summary__total">
                        <strong className="amount__selected">
                            {formatPrice(totalPrice)}
                        </strong>
                        VALOR TOTAL
                    </span>
                </div>
                <button
                    className="summary__make__order"
                    onClick={onSubmit}
                >
                    FAZER PEDIDO
                </button>
            </div>
        </div>
    );
}

export default Summary;