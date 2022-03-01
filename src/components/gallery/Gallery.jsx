import JokesData from '../data/JokesData';
import Joke from '../Joke/Joke';

const Gallery = () => {
    return(
    <div class="container-fluid">
        <div class="px-lg-5">
            <div class="row">
        {/* {CardData.map((card)=>
                    <Card
                        key = {card.id}
                        content = {card.joke}
                    />
                )} */}
            {JokesData.map((joke)=> {
                if(joke.type == 'twopart')
                return <Joke
                    key = {joke.id}
                    title = {joke.title}
                    content = {joke.setup + '' + joke.delivery}
                />
                return <Joke
                    key = {joke.id}
                    title = {joke.title}
                    content = {joke.content}
                />
            })}
            </div>
        </div>
    </div>
    )
}

export default Gallery;