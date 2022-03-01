import JokesData from '../data/JokesData';
import Joke from '../Joke/Joke';

const Gallery = () => {
    return(
    <div class="container-fluid">
        <div class="px-lg-5">
            <div class="row">
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