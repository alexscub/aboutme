import React, { Component } from 'react';
import styles from './Header.module.css';
import Navigation from './Navigation/Navigation';

class Header extends Component {
  state = {
    isMenuOpen: false,
  };

  openMenu = () => {
    this.setState({
      isMenuOpen: true,
    });
    document.body.style.overflow = 'hidden';
  };

  closeMenu = () => {
    this.setState({
      isMenuOpen: false,
    });
    document.body.style.overflow = 'unset';
  };

  render() {
    const { isMenuOpen } = this.state;
    return (
      <>
        <header className={styles.header}>
          <div className={styles.headerContainer}>
          <div className={styles.logo}>AlexScub</div>
              <>
                <button
                  type="button"
                  className={styles.burgerMenu}
                  onClick={this.openMenu}
                >
                  <img src="/assets/images/menuicon.svg" alt="" />
                  menu
                </button>
                <div
                  className={
                    isMenuOpen ? styles.backdrop : styles.backdropHidden
                  }
                  onClick={this.closeMenu}
                  role="presentation"
                />
                <div
                  className={isMenuOpen ? styles.menuWrap : styles.menuHidden}
                >
                  <Navigation close={this.closeMenu} />
                </div>
              </>
          </div>
        </header>
      </>
    );
  }
}
export default Header;
