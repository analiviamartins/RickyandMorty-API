## Repositório do projeto intermediário
Bem-vindo ao repositório do projeto intermediário! Neste repositório, você encontrará um site será possível ver alguns personagens do seriado "Ricky and Morty" e cadastrar novos personagens utilizando React JS.

## Documentação
Caso deseje saber mais sobre os detalhes das integrações consulte nossa [documentação](https://rickandmortyapi.com/documentation) OpenAPI.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Passo a passo
### Criação do projeto
``` bash
npx create-next-app@latest

nome-do-projeto
Typescript: No
ESLint: No
Tailwind CSS: No
/src: No
App Router: Yes
Alias: No
```
### Entrar na pasta com o nome do projeto
``` bash
cd nome-do-projeto
```
### Instalação das dependências
``` bash
npm install
```
### Execução do projeto em modo desenvolvedor
``` bash
npm run dev
```
- [x] Limpeza de arquivos e códigos desnecessários;
- [x] Mudar os arquivos necessários para ".jsx";
- [x] Instalar o Axios, usando o comando "npm install axios" no terminal;
- [x] Criação da pasta "data" com o arquivo "charactersApi.js";
- [x] No arquivo "charactersApi.js", usamos o Axios para chamar os dados da API;
- [x] Na página Home, colocamos os dados necessários da API;
- [x] Criação da pasta "Models" com os arquivos "listPerso.js" e "persons.js";
- [x] Criação das classes nos arquivos "listPerso.js" e "persons.js";
- [x] Criação da pasta "components" com os arquivos "form.jsx" e "personagem.jsx";
- [x]No arquivo "personagem.jsx", criação da exibição do cadastro pronto;
- [x]No arquivo "form.jsx", criação da exibição do formulário e chamamos o componente "personagem.jsx";
- [x] Criação da pasta príncipal "cadastro" com o arquivo "page.jsx" e chamamos o componente "form.jsx" nela;
- [x] Iniciar a estilização da página Home;
## Acessar o site

Primeiro, execute o servidor de desenvolvimento:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) com seu navegador para ver o resultado.

Você pode começar a editar a página modificando `app/page.js`. A página é atualizada automaticamente conforme você edita o arquivo.

Este projeto usa [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) para otimizar e carregar automaticamente o Inter, uma fonte personalizada do Google.


Para saber mais sobre Next.js, dê uma olhada nos seguintes recursos:

- [Next.js Documentation](https://nextjs.org/docs) - aprenda sobre os recursos e API do Next.js.
- [Learn Next.js](https://nextjs.org/learn) -um tutorial interativo do Next.js.

Você pode conferir [the Next.js GitHub repository](https://github.com/vercel/next.js/) - seus comentários e contribuições são bem-vindos!

