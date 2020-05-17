import PropTypes from 'prop-types'
import React from 'react'
import philosophie from '../images/philosophie.jpg'
import talk from '../images/talk.jpg'
import blogue from '../images/blogue.jpg'

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
            découvert les joies de la pensée abstraite. À l'université, j'ai été
            séduit par la logique, l'épistémologie et la philosophie analytique
            du langage. Je me suis fais un devoir de développer une pensée
            critique et une culture scientifique.
          </p>
          <p>
            Visant une carrière dans l'enseignement, j'ai complété une maîtrise
            en Philosophie à Montréal. J'ai écrit un long mémoire au sujet du
            concept de sophisme. Cette forme d'argument trompeur fascine la
            plupart des étudiants. Toutefois, le concept de sophisme est
            équivoque. Il est mal défini et mal compris. J'ai été en mesure de
            pointer les lacunes de la conception ordinaire des sophismes. Grâce
            à la théorie pragma-dialectique de l'argumentation, nous sommes en
            mesure de mieux comprendre le sens et le rôle de l'argumentation
            pour des humains raisonnables.
          </p>
          <p>
            Aujourd'hui, entre un exercice de pensée abstraite et un art de
            vivre, la philosophie est redevenue un passe-temps. Je suis redevenu
            un avide lecteur de Platon et des philosophes de l'Antiquité.
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
          <h2 className="major">Carrière</h2>

          <a
            href="https://www.linkedin.com/in/boninmaxime/"
            alt="hyper lien ma page de LinkedIn"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="image main">
              <img src={talk} alt="dessin de gens dans un stand-up meeting" />
            </span>
          </a>
          <p>
            Après une courte carrière dans l'enseignement, j'ai relevé le défi
            d'une réorientation professionnelle. Je voulais avant tout faire
            partie de la révolution numérique du XXIe siècle et mettre à profit
            mes compétences logiques et conceptuelles dans la réalisation de
            projets concrets.
          </p>
          <p>
            En peu de temps, j'ai acquis de l'expérience sur de nombreux
            systèmes: logiciels de gestion, services web, applications web,
            traitements en lot. Au niveau des bases de données relationnelles :
            scripts SQL et procédures stockées.
          </p>
          <p>
            J'oeuvre comme développeur dans l'écosystème Microsoft. Je suis
            aussi présentement en formation afin d'acquérir de nouvelles
            compétences dans l'infonuagique et le big data. Et je suis un fier
            défendeur du <em>web static</em> : un retour aux sites simples et
            performants.
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
          <p>L'écriture demeure la meilleure façon de véhiculer des idées.</p>
          <p>
            Je traite des sujets qui m'intéressent par le biais d'articles
            publiés de façon régulière. La plupart du temps, il s'agit de thèmes
            liés au développement logiciel et au développement web. La
            philosophie et l'humanisme motivent aussi une portion appréciable de
            mes interventions.
          </p>
          <p>
            Pour vraiment apprendre. Pour maîtriser un sujet, rien ne vaut
            l'expérience de tenter de l'expliquer ; de l'enseigner.
          </p>
          <p>
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
        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 class="major">Contact</h2>
          <ul class="icons">
            <li>
              <a
                href="https://twitter.com/SocraticDevBlog"
                rel="noopener noreferrer"
                target="_blank"
                title="Twitter"
                class="icon brands fa-twitter"
              >
                <span class="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/boninmaxime/"
                rel="noopener noreferrer"
                target="_blank"
                title="LinkedIn"
                class="icon brands fa-linkedin"
              >
                <span class="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/socraticdevblog"
                rel="noopener noreferrer"
                target="_blank"
                title="GitHub"
                class="icon brands fa-github"
              >
                <span class="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://gitlab.com/socraticdev"
                rel="noopener noreferrer"
                target="_blank"
                title="GitLab"
                class="icon brands fa-gitlab"
              >
                <span class="label">GitLab</span>
              </a>
            </li>
          </ul>
        </article>
        {close}
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
