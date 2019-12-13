import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fas fa-terminal"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1></h1>
                <p>La page personnelle de ce Maxime Bonin qui est développeur en technologies de l'information</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Philo</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Carrière</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Blogue</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
