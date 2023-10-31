import React from 'react';
import estilo from './loading.module.css';

const Loading = () => {
  return (
    <div className={estilo.full_screen_gif}>
      <img src="/teste2.gif" alt="GIF" />
    </div>
  );
};

export default Loading;
