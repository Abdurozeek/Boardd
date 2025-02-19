import React, { useState, useContext } from 'react';
import { BulletinContext } from '../context/BulletinContext';

function AddBulletinForm() {
    const { addBulletin } = useContext(BulletinContext);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !content) return;
        addBulletin({ title, content });
        setTitle('');
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Тақырыбы"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                data-testid="title-input"
            />
            <input
                type="text"
                placeholder="Контент"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                data-testid="content-input"
            />
            <button type="submit" data-testid="submit-button">Қосу</button>
        </form>
    );
}

export default AddBulletinForm;


