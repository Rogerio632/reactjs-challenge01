import React, { Component } from 'react';
import Header from './Header';

/**
 * Responsável por armazenar os dados da listagem de post,
 * esses dados devem ficar dentro do state do componente e
 *  não em uma variável comum.
 */
class PostList extends Component{
 state = {
   posts: {
     id: 1,
     author: {
       name: 'Julius Alcântara',
       avatar: 'https://bit.ly/2rMthpQ',
     },
     date: '02 Jan 2020',
     content: "Minna-san, alguém sabe se a Rocketosito está contratando?",
     comments: [
       {
         id: 1,
         author: {
           name: 'Perigo',
           avatar: 'https://bit.ly/37qoRUT',
         },
         content: 'Concordo com você. Adoraria uma oportunidade nesse novo conglomerado da T.I'
       },
       {
        id: 2,
        author: {
          name: 'Julius Alcântara',
          avatar: 'https://bit.ly/2rMthpQ',
        },
        content: 'Verdade, concordo.',
       },
     ]
   }
 };

 render(){
   return(

    /**
     * <Header />
     */

    <div className="post-body">
      <div className="post-user">
        <img src={this.state.author.avatar} />
      </div>

    </div>

   );
 }

}

export default PostList;