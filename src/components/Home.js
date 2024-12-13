import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters} from '../redux/charSlice';

const Home = () => {
    const dispatch = useDispatch();
    const { data, status, error } = useSelector((state) => state.characters);
    const [offset, setOffset] = useState(1);

    useEffect(() => {
        dispatch(fetchCharacters({ offset }));
    }, [dispatch, offset]);

    const handleLoadMore = () => {
        setOffset((prevOffset) => prevOffset + 1); // Sayfa başına 10 karakter göstermek için
    };

    if (status === 'loading') {
        return <div>Yükleniyor...</div>;
    }
    
    if (status === 'failed') {
        return <div>Hata: {error}</div>;
    }

    return (
        <div>
          <h1>Karakterler</h1>
          <div>
            {data.map((character) => (
              <div key={character.id}>
                <h3>{character.name}</h3>
                <img src={character.image} alt={character.name} />
                <p>{character.status}</p>
              </div>
            ))}
            <div>Daha Fazla Karakter Bulunamadı.</div> 
          </div>
          <button onClick={handleLoadMore}>Daha Fazla Yükle</button>
        </div>
    );
};

export default Home;