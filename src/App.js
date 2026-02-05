import { useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import NavB from './components/NavB';
import MovieList from './components/MovieList'
import Add from './components/Add';
import Foooter from './components/Foooter';
import About from './components/About';
import Contact from './components/Contact';
import { Route, Routes } from 'react-router-dom';
import Trailer from './components/Trailer';

function App() {


  const [movielist, setmovielist] = useState(
    [
       
    {
     name:  "RIO",
     posterurl:"https://lumiere-a.akamaihd.net/v1/images/rio_584x800_7a83f253.jpeg?region=0%2C0%2C584%2C800",
      description:"Rio is a vibrant, animated musical adventure from Blue Sky Studios perfect for family viewing, featuring a, domesticated blue macaw named Blu who travels to Brazil to find the last female of his species. It is generally enjoyed by kids for its humor, music, and colorful visuals, though some parents note scenes of mild peril",
      rating: 5,
},

  {
name:"Rebelle",
posterurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfJa-ONAyefAF9YdE75t2wYXYXfVnrigu9BA&s",
description:"Depuis la nuit des temps, au cœur des terres sauvages et mystérieuses des Highlands d’Ecosse, récits de batailles épiques et légendes mythiques se transmettent de génération en génération. Merida, l’impétueuse fille du roi Fergus et de la reine Elinor, a un problème… Elle est la seule fille au monde à ne pas vouloir devenir princesse ! Maniant l'arc comme personne, Merida refuse de se plier aux règles de la cour et défie une tradition millénaire sacrée aux yeux de tous et particulièrement de sa mère",
rating: 3,
},

{
name:"Horton",
posterurl:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQXFIBunh9u7Et0f7Ff7_s9IRX1q2iQpKPHMOT8fgAQoQXe5lmZ",
description:" is a highly rated animated film for kids (rated G/PG) featuring Jim Carrey and Steve Carell. It follows Horton the elephant as he protects a tiny, microscopic world, emphasizing themes of compassion, integrity, and the message that a person's a person no matter how small",
rating: 4,
},

{
name:"L'Âge de glace",
posterurl:"https://fr.web.img5.acsta.net/c_310_420/pictures/22/03/04/08/45/1859594.jpg",
description:"Avides d’indépendance et toujours en quête de sensations fortes, les frère opossums Crash et Eddie décident de chercher un habitat rien qu’à eux, mais vont rapidement se retrouver piéger sous la glace, dans une immense grotte souterraine habitée par des dinosaures. Secourus par leur copain Buck Wild, une belette borgne excentrique, ils vont ensemble et avec l’aide de nouveaux amis se lancer dans une mission pour sauver le monde perdu de la domination des dinosaures",
rating: 5,
},

{
name:"ROBOTS",
posterurl:"https://fr.web.img4.acsta.net/c_310_420/medias/nmedia/18/35/46/07/18408708.jpg",
description:"Rodney est un jeune robot plein d'idées",
rating: 4,
},

{
name:"Bambi",
posterurl:"https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/35/56/29/18465102.jpg",
description:" La terre s'éveille sous les rayons du soleil printanier",
rating: 5,
},

{
name:"Toy Story",
posterurl:"https://fr.web.img2.acsta.net/c_310_420/pictures/14/03/17/10/20/509771.jpg",
description:"Un jeune garçon de 6 ans ne peut pas tout savoir",
rating: 3,
},

{
name:"Snow White and the Seven Dwarfs",
posterurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmdZ2DEWSZuNXF9-wRSXMgrHjOk1V2tHWaMV8N_5a0NVI5Uh-eDQv2IRL6LvoNewYB2xQ4uH7jJlCzhrFxDVSzd9ul06qvVhQCCvtsf6c&s=10",
description:"La petite princesse Blanche-Neige, poursuivie par la jalousie de la méchante reine",
rating: 2,
},

{
name:"The Lion King",
posterurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQTl6A5-sNvabov49yKPWG0kPy-povbO_g6A&s",
description:"The Lion King est un chef-d'œuvre d'animation Disney, racontant l'histoire du lionceau Simba",
rating: 4,
},

{
name:"La Pat'Patrouille",
posterurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4O01WQtOUEXA6StcTbxEOoX7YpgLFRARCHg&s",
description:"Une équipe de chiens dirigée par l'énergique Ryder est toujours prête à venir en aide aux habitants de la grande vallée ",
rating: 4,
},

{
name:"Sonic",
posterurl:"https://fr.web.img6.acsta.net/c_310_420/pictures/20/02/10/17/16/0746079.jpg",
description:"L'histoire du hérisson bleu le plus rapide du monde qui arrive sur Terre, sa nouvelle maison",
rating: 4,
}
    ]
  )

  

  return (
    <div style={{position:'relative'}}>
    
      <NavB/>
          <Routes>
    
        <Route path="/" element={<MovieList movielist={movielist} setmovielist={setmovielist} />} />
      <Route path="/about" element={<><About /></>} />
        <Route path="/contact" element={<Contact/>} />
         <Route path="/trailer/:name" element={<Trailer movielist={movielist}/> } />
     
      </Routes> 

   
      
      
    </div>
  );
}

export default App;
