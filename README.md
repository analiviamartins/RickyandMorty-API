Este é um projeto  [Next.js](https://nextjs.org/) iniciado com [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Início
- Para verificar qual API utilizamos, acesse https://rickandmortyapi.com/api/character.

## Passo a passo 
- Clone este repositório através desse link https://github.com/analiviamartins/RickyandMorty-API.git
- Abra o cmd;
- Digite gitclone e em seguida, coloque o link que foi copiado;
- Abra o VSCODE e abra o terminal; 
- Já no terminal, coloque npm install, e npm run dev e já terá o porjeto em mãos. 

Primeiro, execute o servidor de desenvolvimento

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```



Abra [http://localhost:3000](http://localhost:3000) com o seu navegador para ter o resultado.

Você pode começar a editar a página modificando `app/page.js`. A página é atualizada automaticamente conforme você edita o arquivo.
Este projeto usa  [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) para otimizar e carregar automaticamente o Inter, uma fonte personalizada do Google.

## Saiba Mais

Para saber mais sobre Next.js, dê uma olhada nos seguintes recursos:

- [Next.js Documentation](https://nextjs.org/docs) - aprenda sobre os recursos e API do Next.js.
- [Learn Next.js](https://nextjs.org/learn) - um tutorial interativo de Next.js. 

Você pode conferir [the Next.js GitHub repository](https://github.com/vercel/next.js/) - seu feedback e contribuições são bem-vindos!
## Deploy on Vercel

A maneira mais fácil de implantar seu aplicativo Next.js é usar o [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) dos criadores do Next.js.

Verifique nosso [Next.js deployment documentation](https://nextjs.org/docs/deployment) para mais detalhes.

## Sobre o projeto 
Esse README está sendo usado para explicar uma aplicação que desenvolvemos no React. O projeto tem dois objetivos:
- 1 - é criar uma página usando a API, a qual nos mostra informções sobre os personagens da série de TV "Rick and Morty", nos dando informações como: o nome do personagem, sua imagem(ou não, dependendo do quanto ele aparece na série, ou se existem imagens deles), status, espécie, e o seu gênero;
- 2 - fazer o cadastro de personagens novos, assim, mostrando as mesmas informações - para esses novos personagens - que já estavam na API.

## Códigos
Já possuimos muitas pastas criadas, porém, nós adicionamos mais algumas. Nós adicionamos mais pastas, dentro de outras pastas.
E dentro delas, há a presença de arquivos jsx e .module.css.
 
 ## Novas pastas e arquivos
 ### App(já existente)
 
 ### Components(App) 
   #### form(components/app)
   - form.jsx;
   - form.module.css.

   #### personagem(components/app):
   - personagem.jsx;
   - personagem.module.css

### form.jsx(components/form)
No começo do arquivo form.jsx, aparecem esses dois importantes Imports:

- Import React, { useEffect, useState } from "react";
- import style from '../form/form.module.css';

O import { useEffect, useState } from "react" snippet é uma parte impotante do código, que permite que você use esses dois recusros 
fundamentais no React: 

- { useEffect }: 
Com { useEffect}, você invoca efeitos colaterais de dentro de componentes funcionais, que é um conceito importante para se entender na era React Hooks. Trabalhando com os efeitos colaterais invocados pelo gancho { useEffect } Hook pode parecer complicado no início, mas eventualmente tudo fará sentido. 

- { useState }: 
O React { useState } Hook permite criar variáveis de estado em componentes funcionais. Você fornece o estado inicial e ele fornece uma variável com o valor do estado atual (que pode não ser o estado inicial) e uma função para alterar esse valor.

- "import style" é usado por nós, para importar o CSS da pasta "form".

<hr>

O resto do código é como se funciona o cadastro dos personagens.
Em seguida, será mostrado o resto das pastas e arquivos criados + a funcionalidade de seus códigos. 

### personagem.jsx(Components/personagem)
- Este código cria um componente React chamado "Personagem", que mostra informações de um personagem com um botão "Excluir" para removê-lo. Ele pode ser usado em diferentes partes do aplicativo para mostrar detalhes dos personagens e excluí-los.

### Models(App)
Dentro de Models, nós temos "listPerso.js" e "persons.js".

#### listPerso.js(Models)
- No código existe a classe "Persos" para gerenciar uma lista de objetos "personagens" (personagens). Possui métodos para adicionar e excluir caracteres com base em seus IDs. A classe é exportada para uso em outros arquivos JavaScript, fornecendo funcionalidade básica de gerenciamento de caracteres.

#### persons.js(Models)
- O código define a classe "Persos" para representar objetos de personagens com atributos como nome, estado, espécie, local, episódio e imagem, além de um ID aleatório gerado.

 ## Alterações
- O layout e page foram alterados para JSX. 

### Data(App)
- Dentro de Data, temos a presença de characterApi.js

  #### charactersApi.js(app/data)
  - O código define uma função chamada "personangens", que faz a solicitação para a API. Se tudo ocorre bem e a solicitação for bem-sucedida, a função retorna os dados dos personagens. Se caso haja um problema, ela lança um erro. Temos a possibilidade de usar essa função em outros lugares do código para obter a as devidas informações sobre os personagens. 