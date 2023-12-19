import { Component } from 'react'

class Stagiaire extends Component {
  render() {
    return (
      <div className="stg">
        <img src={this.props.image} alt={this.props.nom} />
        <div>
          <h1>
            {this.props.nom} - {this.props.filiere}
          </h1>
          <p>Age : {this.props.age}</p>
        </div>
      </div>
    )
  }
}

export default Stagiaire
