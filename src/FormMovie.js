import React from 'react';
import axios from 'axios';

class FormMovie extends React.Component {

    constructor(props) {
        super(props);
        /* Déclaration de mes states -> input du formaulaire */
        this.state = {
            name: '',
            poster: '',
            comment: '',
        }
        /*Permet à nos fonctions de réagir au changement de notre composant
        On le bind avec le mot clé this */
        /* Plus besoin en ES6 */
        
        //this.onChange = this.onChange.bind(this);
        //this.submitForm = this.submitForm.bind(this);
    }

    //Gestion de la soumission du formulaire
    submitForm = (event) => {
        //Empecher le comportement par defaut de la soumission du formulaire de recharger la page
        event.preventDefault()
        console.log('submit')
        console.log(this.state)

        /* Declaration de l'API */
        const url = "http://92.175.11.66:3001/api/quests/movies/";

        /* Utilisation de fetch */
        /*     const config = {
                 method: "POST",
                 headers: {
                     "Content-Type": "application/json",
                 },
                 body: JSON.stringify(this.state),
             };
             fetch(url, config)
                 .then(res => res.json())
                 .then(response => console.log('Success:', JSON.stringify(response)))
                 .catch(error => console.error('Error:', error));*/

        /* Utilisation de Axios */
        axios.post(url, this.state)
            .then(response => {
                //console.log(response)
                alert(`Votre film ${this.state.name} est inséré`)
            })
            .catch(error => {
                alert(`Film non inséré`)
            })
    }

    onChange = (event) => {
        event.preventDefault();
        this.setState({
            // Récupération des name dans input
            // Pour que le nom de la state soit dynamique la récupération est en crochet
            // Resultat event.target.name
            [event.target.name]: event.target.value,
        });
        console.log("changement " + [event.target.name])
    }

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <form onSubmit={this.submitForm}>
                    <div className="blockInput">
                        <label htmlFor="nameMovie">Nom du film :</label>
                        <input required
                            type='text'
                            id='nameMovie'
                            name='name'
                            onChange={this.onChange}
                            value={this.state.value}
                        />
                    </div>

                    <div className="blockInput">
                        <label htmlFor="urlPoster">URL du poster :</label>
                        <input required
                            type='text'
                            id='urlPoster'
                            name='poster'
                            onChange={this.onChange}
                            value={this.state.value}
                        />
                    </div>

                    <div className="blockInput">
                        <label htmlFor="comments">Commentaires :</label>
                        <textarea required
                            cols={40}
                            rows={10}
                            name='comment'
                            onChange={this.onChange}
                            value={this.state.value}
                        />
                    </div>
                    <input type="submit" value="Envoyer" />
                </form>
            </div>
        )
    }
}

export default FormMovie;
