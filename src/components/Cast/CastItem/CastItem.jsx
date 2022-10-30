import PropTypes from 'prop-types';
import { GalleryItem, GalleryImg, Discription } from './CastItem.styled';

export const CastItem = ({foto, name, character}) => {
    return(
        <GalleryItem>
            <GalleryImg src={foto === null ?
            'https://prikolnye-kartinki.ru/img/picture/Sep/23/9d857169c84422fdaa28df62667a1467/3.jpg' :
                `https://image.tmdb.org/t/p/w200/${foto}`} alt={name}/>
            <Discription>Name:{name}</Discription>
            <Discription>Character:{character}</Discription>
        </GalleryItem>
    )
};

CastItem.propTypes = {
    foto: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
};