import React from 'react';
import './index.scss';

const Invoice = () => {
    return (
        <section className="payment-details">
            <h2 className="payment-h2">Номер инвойса 101</h2>
            <div className="payment-details__items">
                <p className="payment__left">Получатель:</p>
                <p className="payment__right">testShop</p>
            </div>
            <div className="payment-details__items">
                <p>Описание:</p>
                <p>Test invoice</p>
            </div>

            <div className="payment-h2__pay">
                <h2 className="payment-h2">Сумма: 10RUB</h2>
                <h2 className="payment-h2">10 RUB</h2>
            </div>
        </section>

    );
};

export default Invoice;