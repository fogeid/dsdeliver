import './style.css';

function StepsHeader() {
    return (
        <header className="steps__container">
            <div className="steps__content">
                <h1 className="steps__title">
                    SIGA AS <br /> ETAPAS
                </h1>
                <ul className="steps__items">
                    <li>
                        <span className="steps__number">1</span>
                        Selecione os produtos e localização.
                    </li>
                    <li>
                        <span className="steps__number">2</span>
                        Depois clique em <strong>"ENVIAR PEDIDO"</strong>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default StepsHeader;