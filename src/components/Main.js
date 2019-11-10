import PropTypes from 'prop-types'
import React from 'react'
import philosophie from '../images/philosophie.png'
import scrum from '../images/scrum.png'
import blogue from '../images/blogue.png'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Philo</h2>

          <a
            href="https://archipel.uqam.ca/5229/"
            alt="hyper lien la page hébergeant mon mémoire"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="image main">
              <img src={philosophie} alt="extrait de mon mémoire de maîtrise" />
            </span>
          </a>
          <p>
            Passionné par les lectures denses et coriaces, j'ai rapidement
            découvert les joies de la pensée abstraite. Lors du baccalauréat en
            Philosophie, à l'Université Laval de Québec, j'ai été séduit par la
            logique, l'épistémologie et la philosophie analytique du langage.
            D'un tempérament artistique, je me suis fais un devoir de prendre
            des bouchées doubles pour acquérir un minimum de rationalité et de
            culture scientifique.
          </p>
          <p>
            Encore insatisfait de ma culture philosophique et désirant
            poursuivre une carrière d'enseignant, j'ai complété une maîtrise en
            Philosophie à l'Université du Québec à Montréal. J'ai écrit un long
            mémoire au sujet du concept de sophisme. Cette forme d'argument
            trompeur fascine la plupart des étudiants. Toutefois, le concept de
            sophisme est équivoque. Il est mal défini et mal compris. À l'aide
            d'un professeur Australien et de professeurs Hollandais, je crois
            avoir été en mesure de pointer les lacunes de la conception naïve
            des sophismes. Grâce à la théorie pragma-dialectique de
            l'argumentation, nous sommes en mesure de mieux comprendre le sens
            et le rôle de l'argumentation pour des humains raisonnables.
          </p>
          <p>
            Aujourd'hui, entre un exercice de pensée abstraite et un art de
            vivre, la philosophie est redevenue un passe-temps pour moi. Je suis
            redevenu un avide lecteur de Platon et des philosophes de
            l'Antiquité.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Travail</h2>

          <a
            href="https://www.linkedin.com/in/boninmaxime/"
            alt="hyper lien ma page de LinkedIn"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="image main">
              <img src={scrum} alt="dessin de gens dans un stand-up meeting" />
            </span>
          </a>
          <p>
            Après une courte carrière dans l'enseignement, j'ai relevé le défi
            d'une réorientation professionnelle. Je désirais avant tout faire
            partie de la révolution technologique du XXIe siècle et mettre à
            profit mes compétences logiques dans la réalisation de projets
            concrets.
          </p>
          <p>
            En sortant du collège, j'ai travaillé au sein de l'équipe de
            Recherche et Développement d'une compagnie de développement de
            logiciels de gestion. J'ai d'abord assuré la maintenance de leur
            logiciel de gestion de cabinet médical. Ensuite, le développement
            d'une application mobile destinée aux professionnels travaillant sur
            la route a occupé tout mon temps.
          </p>
          <p>
            Je travaille présentement à titre de consultant. Mon client est une
            grande agence gouvernementale. J'appuie les efforts de l'équipe en
            place pour maintenir et développer des solutions logicielles
            robustes. Ce rôle me permet de mettre à profit mon leadership ainsi
            que mes compétences logiques et techniques autant en développant de
            nouvelles plate-formes Web qu'en rédigeant des scripts SQL et en
            automatisant des traitements en lot.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Blogue</h2>
          <a
            href="https://socratic.dev"
            alt="hyper lien vers le blogue de Socratic Dev"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="image main">
              <img
                src={blogue}
                alt="capture d'écran du blogue de SocraticDev"
              />
            </span>
          </a>
          <p>
            L'écriture demeure la meilleure façon de véhiculer des idées. Par le
            biais d'articles publiés de façon hebdomadaire , je traite de sujets
            qui m'intéressent. La plupart du temps, il s'agit de thèmes liés au
            développement logiciel et au développement web. Toutefois, la
            philosophie et l'humanisme motivent une portion appréciable de mes
            interventions.
          </p>
          <p>
            Pour vraiment aprendre quelque chose. Pour maîtriser un sujet, rien
            ne vaut l'expérience de tenter de l'expliquer ; de l'enseigner. Au
            final, ce blogue, je le maintiens d'abord pour mon profit personnel
            !
          </p>
          <p>
            Visitez mon blogue :{' '}
            <a
              href="https://socratic.dev"
              alt="hyper lien vers le blogue de Socratic Dev"
              rel="noopener noreferrer"
              target="_blank"
            >
              https://socratic.dev
            </a>
          </p>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main