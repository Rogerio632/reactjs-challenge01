import React, { Component } from 'react';
import PostItem from './PostItem';


/**
 * Responsável por armazenar os dados da listagem de post,
 * esses dados devem ficar dentro do state do componente e
 *  não em uma variável comum.
 */
class PostList extends Component{
 state = {
   posts: [
     {
     id: 1,
     author: {
       name: 'Julius Alcântara',
       avatar: 'https://bit.ly/2rMthpQ',
     },
     date: '02 Jan 2020',
     content: "Gostaria de expressar minha indignação. Esse post custou R$0,15 de banda larga.",
     comments: [
       {
         id: 1,
         author: {
           name: 'Perigo',
           avatar: 'https://bit.ly/37qoRUT',
         },
         content: 'Tá osso, mermão. Net movido a lenha e ainda paga absurdo! '
       },
       {
        id: 2,
        author: {
          name: 'Julius Alcântara',
          avatar: 'https://bit.ly/2rMthpQ',
        },
        content: 'Verdade, concordo.',
       },
      ],
    },
    {
      id: 2,
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
          content: 'Concordo com você. Adoraria uma oportunidade nesse nova empresa de T.I'
        },
        {
         id: 2,
         author: {
           name: 'Julius Alcântara',
           avatar: 'https://bit.ly/2rMthpQ',
         },
         content: 'Com certeza! Mais um emprego nunca é demais.',
        },
       ],
     },
  ],
};

 render(){
   return(
  
     <>

    {this.state.posts.map(post => <PostItem key={post.id} data={post} /> ) }
    
    </>
   );
 }

}

export default PostList;