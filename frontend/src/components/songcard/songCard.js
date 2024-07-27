import React from 'react';
import './songCard.css';
import AlbumImage from './albumImage';
import AlbumInfo from './albumInfo';

// export default function SongCard({ album }) {
//     return (
//         <div className='songCard-body flex'>
//             {album?.images && album.images.length > 0 ? (
//                 <AlbumImage url={album.images[0]?.url} />
//             ) : (
//                 <div>No album image</div>
//             )}
//             <AlbumInfo album={album} />
//         </div>
//     );
// }

export default function SongCard({ album }) {
    return (
        <div className="songCard-body flex">
            <AlbumImage url={album?.images[0]?.url} />
            <AlbumInfo album={album} />
        </div>
    );
}
