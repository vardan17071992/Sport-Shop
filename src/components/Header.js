import React, { useState } from 'react';
import { Link } from 'react-router-dom';



export default function Header() {
    const [cartOpen, setCartOpen] = useState(false);

    const openCartOnContactClick = () => {
        setCartOpen(!cartOpen);
    };

    const handleLogout = () => {
        const shouldLogout = window.confirm('Вы уверены, что хотите выйти?');
        if (shouldLogout) {
            // Добавьте здесь код для выхода из системы
            // Например, вызов функции для выхода из аккаунта или удаление токена аутентификации
            // Это зависит от вашей логики приложения
        }
    };

    return (
        <header>
            <div>
                <span className='Logo'>(SPORT House) Shop</span>
                <ul className='nav'>
                    <li onClick={openCartOnContactClick}>Контакты</li>
                    <li><Link className='a' to = "/about">Про нас</Link></li>
                    <li onClick={handleLogout}>Выход</li>
                </ul>
                {cartOpen && (
                    <div className='shop-cart'>Адрес: город Ереван<br/>Телефон: +374111111</div>
                )}
            </div>
            <div className='presentation'></div>

            
        </header>

       
    );
}