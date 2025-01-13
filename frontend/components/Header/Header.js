// Importamos o React, que é a base de tudo que faremos
import React, { useState } from 'react';
// Importamos o arquivo de estilos que criaremos
import './Header.css';

function Header() {
    // Estado para controlar o menu mobile
    // useState é como uma variável especial que pode mudar e atualizar a tela
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Função para alternar o menu mobile
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="header">
            {/* Container principal que limita a largura do conteúdo */}
            <div className="header__container">
                {/* Lado esquerdo do header com logo e nome */}
                <div className="header__logo-container">
                    <div className="header__logo">
                        {/* Emoji como logo temporário */}
                        <span className="header__logo-icon">🦖</span>
                        {/* Nome da loja */}
                        <h1 className="header__title">Velociraptors do Rio</h1>
                    </div>
                </div>

                {/* Navegação principal - só aparece em telas grandes */}
                <nav className="header__nav">
                    <ul className="header__nav-list">
                        <li className="header__nav-item">
                            <a href="/" className="header__nav-link">Início</a>
                        </li>
                        <li className="header__nav-item">
                            <a href="/catalogo" className="header__nav-link">Catálogo</a>
                        </li>
                        <li className="header__nav-item">
                            <a href="/sobre" className="header__nav-link">Sobre</a>
                        </li>
                    </ul>
                </nav>

                {/* Botões de ação do lado direito */}
                <div className="header__actions">
                    {/* Botão do carrinho */}
                    <button className="header__cart-button">
                        🛒 Carrinho (0)
                    </button>

                    {/* Botão do menu mobile - só aparece em telas pequenas */}
                    <button 
                        className="header__mobile-menu-button"
                        onClick={toggleMobileMenu}
                    >
                        {isMobileMenuOpen ? '✕' : '☰'}
                    </button>
                </div>
            </div>

            {/* Menu mobile - só aparece quando aberto em telas pequenas */}
            {isMobileMenuOpen && (
                <div className="header__mobile-menu">
                    <nav className="header__mobile-nav">
                        <ul className="header__mobile-nav-list">
                            <li className="header__mobile-nav-item">
                                <a href="/" className="header__mobile-nav-link">Início</a>
                            </li>
                            <li className="header__mobile-nav-item">
                                <a href="/catalogo" className="header__mobile-nav-link">Catálogo</a>
                            </li>
                            <li className="header__mobile-nav-item">
                                <a href="/sobre" className="header__mobile-nav-link">Sobre</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    );
}

export default Header;