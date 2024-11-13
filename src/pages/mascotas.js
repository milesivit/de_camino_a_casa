import Alex from '../img/alex.jpg';
import Theo from '../img/theo.jpg';
import Milo from '../img/milo.jpg';
import Joaquin from '../img/joaquin.jpg';
import Ali from '../img/ali.jpg';
import Luna from '../img/luna.jpg';
import Alejo from '../img/alejotomador.jpg'
import Chiquito from '../img/chiquito.jpg';
import Dave from '../img/Dave.jpeg';

// Información de mascotas para adopción
const mascotas = [
    { id: 1, img: Alex, name: 'Max', description: 'Jugueton y sociable', sex: 'Macho', age: '10 años',
      story: 'Max es un perro lleno de encanto y personalidad. Su carácter amistoso y juguetón lo convierte en el amigo ideal para quienes buscan compañía tanto dentro como fuera de casa. Le encanta salir a explorar y disfrutar de sus paseos al aire libre, pero también sabe tomarse su tiempo para relajarse. La mayor parte del día, Max la pasa durmiendo plácidamente, lo que lo convierte en un compañero muy tranquilo. Perfecto para una familia que disfrute de los paseos y de una presencia serena en el hogar, Max está listo para llenar de cariño y calma un nuevo hogar. ¿Te animas a ser parte de su vida?'
     },
    { id: 2, img: Theo, name: 'Theo', description: 'Aventurero y cariñoso', sex: 'Macho', age: '5 años',
      story: 'Theo es un perro lleno de curiosidad y amor para dar. Con cinco años, ha desarrollado un espíritu aventurero y siempre está listo para descubrir el mundo a tu lado. Su energía y entusiasmo lo hacen ideal para una familia que disfrute de la actividad al aire libre, pero también sabe cómo mostrar su lado más dulce y cariñoso. Después de un día de explorar, no hay nada que le guste más que acurrucarse y recibir caricias. Theo busca un hogar donde pueda compartir sus aventuras y repartir amor a montones. ¿Te animas a ser su compañero de vida?'
     },
    { id: 3, img: Milo, name: 'Milo', description: 'Jugueton y negro', sex: 'Macho', age: '4 años',
      story: 'Milo es un perro negro de espíritu resiliente y un gran corazón. Con solo cuatro años, ya ha demostrado ser un luchador: sobrevivió a un ataque de otro perro, pero eso no ha cambiado su naturaleza juguetona y amorosa. Milo sigue lleno de energía y alegría, siempre dispuesto a correr, jugar y compartir momentos divertidos. Su experiencia lo ha hecho fuerte y aún más especial; ahora busca un hogar donde pueda ser el centro de atención y recibir el cariño que tanto merece. ¿Te animas a darle a Milo el hogar lleno de amor y juegos que está esperando?'
     },
    { id: 4, img: Joaquin, name: 'Joaquin', description: 'Tranquilo y amigable', sex: 'Macho', age: '15 años',
      story: 'Joaquín es un perro especial, tranquilo y cariñoso, que ha pasado su vida disfrutando de juegos de pelota. A sus 15 años, aún conserva ese amor por jugar, aunque ahora sus ojos estén algo nublados y su paso más lento. Su tranquilidad es tan grande que, a veces, hay que observarlo de cerca para asegurarse de que está profundamente dormido y no solo descansando. Joaquín busca un hogar donde pueda pasar sus años dorados rodeado de amor, de vez en cuando con una pelota cerca, y recibir el cariño de quienes valoren su alma tranquila y su fiel compañía. ¿Te animas a darle el descanso y la atención que merece este dulce amigo?' },
    { id: 5, img: Ali, name: 'Ali', description: 'Amorosa y protectora', sex: 'Hembra', age: '6-8 años',
      story: 'Ali es una perrita llena de amor y lealtad hacia quienes forman parte de su círculo cercano. Con su carácter protector, siempre está lista para cuidar a sus seres queridos, y su instinto alerta la hace un poco reservada con extraños. Sin embargo, una vez que gana confianza, muestra su lado más dulce y cariñoso, brindando amor sin reservas. Con una edad de entre 6 y 8 años, Ali es perfecta para una familia que valore su naturaleza protectora y quiera un compañera leal y fiel. ¿Estás listo para ganarte el cariño de esta guardiana de corazón tierno?' },
    { id: 6, img: Luna, name: 'Luna', description: 'Buena y reservada', sex: 'Hembra', age: '15 años',
      story: 'Luna es una perrita buena y reservada, con un carácter tranquilo que la convierte en una excelente compañera para adultos. A sus 15 años, ha aprendido a valorar la paz y la serenidad, por lo que prefiere un entorno sin niños, donde pueda sentirse cómoda y relajada. Luna disfruta de la calma y está lista para compartir sus días con alguien que valore su compañía tranquila y su amor en silencio. ¿Te gustaría brindarle a Luna el hogar pacífico que tanto disfruta?' },
    { id: 7, img: Chiquito, name: 'Chiquito', description: 'Fiel y orgulloso', sex: 'Macho', age: '20 años',
      story: 'Chiquito es un perro fiel y orgulloso, con 20 años de vida llenos de experiencias y lealtad. Su edad no le ha quitado el espíritu noble ni el amor por la compañía. Con una mirada sabia y un andar pausado, Chiquito busca un hogar donde pueda disfrutar de tranquilidad y cariño, rodeado de personas que valoren su lealtad y aprecien cada uno de sus años. A pesar de su tamaño y su nombre, Chiquito tiene un gran corazón y mucho amor para dar. ¿Te animas a darle a este veterano compañero el hogar digno que merece?' },
    { id: 8, img: Alejo, name: 'Alejo', description: 'Sociable y amigable', sex: 'Macho', age: '20 años',
      story: 'Alejo es la mejor compañía que cualquiera podría desear. Con 20 años, ha pasado su vida rodeado de personas y tiene una habilidad especial para adaptarse a todo tipo de personalidades. Su espíritu sociable y amigable lo hace el compañero perfecto para cualquier ocasión, y su energía "fiestera" le agrega un toque de alegría y diversión al hogar. Siempre está listo para compartir momentos, ya sea en una tarde tranquila o en una reunión animada. Alejo busca una familia que valore su gran personalidad y su inigualable capacidad de hacer felices a los demás. ¿Te animas a hacer equipo con este encantador amigo?' },
    { id: 9,img: Dave, name: 'Dave The Magical Cheese Wizard', description: 'Gordo y Poderoso', sex: 'Desconocido', age: '2000 años',
      story: 'Dave, también conocido como "El Mago del Queso", es un gato fuera de lo común, con una presencia imponente y una historia que se remonta a milenios. Con 2000 años de sabiduría y un aura poderosa, Dave se ha ganado su título como el Gato Mago. Aunque su figura es algo regordeta, cada gramo de su ser está cargado de misticismo y secretos antiguos, especialmente relacionados con su pasión: el queso. Su lealtad es tan misteriosa como él mismo, pero quienes ganan su favor reciben un amigo sabio y, tal vez, alguna que otra bendición mágica. ¿Te atreves a compartir tu hogar con el poderoso y gordo Dave, el Mago del Queso?' },
  ];

  export default mascotas;