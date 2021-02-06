import './style.css';

function Summary() {
    return (
        <div className="summary__container">
            <div className="summary__content">
                <div>
                    <span className="amount__selected__container">
                        <strong className="amount__selected">2</strong>
                        PEDIDOS SELECIONADOS
                    </span>
                    <span className="summary__total">
                        <strong className="amount__selected">R$ 40,00</strong>
                        VALOR TOTAL
                    </span>
                </div>
                <button className="summary__make__order">FAZER PEDIDO</button>
            </div>
        </div>
    );
}

export default Summary;