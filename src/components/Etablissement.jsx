import { Component } from 'react'
import Stagiaire from './Stagiaire'

class Etablissement extends Component {
  state = {
    stagiaires: this.props.stgs,
  }
  render() {
    return (
      <div className="etab">
        <h1>Nombre des étudiants : {this.state.stagiaires.length}</h1>
        {this.state.stagiaires.map((s) => (
          <Stagiaire
            key={s.id}
            nom={s.nom}
            age={s.age}
            image={s.image}
            filiere={s.filiere}
          />
        ))}
        <div className="btn">
          <button onClick={() => this.setState({ stagiaires: [] })}>
            Clear ALL
          </button>
          <button
            onClick={() => this.setState({ stagiaires: this.props.stgs })}
          >
            ALL
          </button>
          <button
            onClick={() =>
              this.setState({
                stagiaires: this.props.stgs.filter((s) => s.filiere === 'TDI'),
              })
            }
          >
            TDI
          </button>
          <button
            onClick={() =>
              this.setState({
                stagiaires: this.props.stgs.filter((s) => s.filiere === 'TRI'),
              })
            }
          >
            TRI
          </button>
        </div>
      </div>
    )
  }
}

export default Etablissement
