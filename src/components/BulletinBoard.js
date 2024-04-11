import React, { useContext } from 'react';
import { BulletinContext } from '../context/BulletinContext';
import Bulletin from './Bulletin';

function BulletinBoard() {
    const { bulletins } = useContext(BulletinContext);

    return (
        <div className="BulletinBoard">
            <h2>Жарнамалар</h2>
            {bulletins.map(bulletin => (
                <Bulletin key={bulletin.id} bulletin={bulletin} />
            ))}
        </div>
    );
}

export default BulletinBoard;

