<h1 align="center">
    <img alt="Coffee Delivery" title="Coffee Delivery" src="/assets/logo.svg" width="125px" />
</h1>

<!-- TABLE OF CONTENTS -->

<h5 align="center"> 
<a href="#sobre">Sobre</a>
   •   <a href="#tecnologias">Tecnologias</a> 
   •   <a href="#instalação">Instalação</a> 
   •   <a href="#funcionalidades">Funcionalidades</a> 
   •   <a href="#layout">Layout</a> 
   •   <a href="#visão-do-projeto">Visão do projeto</a>
   •   <a href="#agradecimento">Agradecimento</a> 
   •   <a href="#licença">Licença</a>     
   •   <a href="#autor">Autor</a> 
</h5>

## Sobre
<h4>Coffee Delivery é um e-commerce de entrega de cafés com pagamento na entrega! 😋☕</h4>

No projeto o usuário poderá criar uma conta, pedir cafés,verificar a área de entrega do estabelecimento, indicar seu endereço de entrega, escolher meios de efetuar o pagamento e pagar o pedido apenas na entrega sem precisar informar dados pessoais ou sensíveis na web.

## Tecnologias

- [TypeScript](https://www.typescriptlang.org/)
- [ReactJS](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Figma](https://www.figma.com/)
- [Styled Components](https://styled-components.com/)
- [Mapbox](https://www.mapbox.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [Phosphor Icons](https://phosphoricons.com/)
- [React Router](https://reactrouter.com/)
- [js-cookie](https://github.com/js-cookie/js-cookie)
- [date-fns](https://date-fns.org/)
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction/)
- [Axios](https://github.com/axios/axios)

> Veja o arquivo  [package.json](package.json)

###### Sobre as tecnologias

| **Ferramentas** 	| **Descrição** 	|
|:---:	|:---:	|
| vite 	| Ferramenta para construir a aplicação React + Typescript, ela fornece uma experiência de desenvolvimento mais rápida e enxuta para projetos web modernos. 	|
| figma 	| Ferramenta de design 	|
| styled components 	| Estilização baseada em componentes para React 	|
| mapbox 	| Ferramenta para trabalhar com mapas, na aplicação trabalhamos com Navigations API (Directions e Isochrone) e Geocoding API 	|
| react hook form 	| Ferramenta para criação de formulários 	|
| zod 	| Ferramenta de validação de esquemas que usa typescript 	|
| phosphor icons 	| Biblioteca com grande variedade de ícones 	|
| react router 	| Permite o roteamento na aplicação 	|
| js-cookie 	| Gerenciar informações em cookies, na aplicação armazenamos dados do tema e dos produtos adicionados no carrinho 	|
| date-fns 	| Manipular datas 	|
| react toastify 	| Adicionar notificações na aplicação 	|
| axios 	| Realizar requisições http 	|

## Instalação

- ### **Pré-requisitos**
  - É **necessário** possuir o **[Git](https://git-scm.com/)** instalado e configurado no computador.
  - É **necessário** ter um gerenciador de pacotes **[Yarn](https://yarnpkg.com/)** ou **[Npm](https://www.npmjs.com/)**.
  - É **necessário** ter uma conta no **[Mapbox](https://www.mapbox.com/)**.
  - É **necessário** ter o backend da aplicação que pode ser encontrado em <code>https://github.com/die-goncalves/coffee-delivery-backend.git</code>.

- ### **Próximo passo**
1. Faça um clone deste repositório:
   ```sh
   $ git clone https://github.com/die-goncalves/coffee-delivery.git
   ```

2. Instale as dependências:
   ```sh
   # Entre no diretório do repositório clonado
   $ cd coffee-delivery
   # Instale as dependências do projeto.
   $ yarn #ou $ npm install
   ```

3. Variáveis de ambiente<br/>
    Crie o arquivo **.env.local** na raiz do projeto (Ficando no mesmo nível que o package.json) com as seguintes variáveis: 
    ```
    VITE_MAPBOX_KEY=
    VITE_API_URL=
    VITE_MY_WEBSITE=
    ``` 
    ---
    - **MAPBOX**
      Para obter a chave do mapbox você deve ter uma conta no site da mapbox, se não tiver crie, possui versão gratuita onde só se paga se ultrapassar limites.
      - Realize o login
      - A chave está localizada em **Access tokens** e ela está marcada na imagem com uma caixa de borda vermelha. Você pode escolher entre criar uma nova, atualizar ou utilizar a que já existe. Copie a chave em ```VITE_MAPBOX_KEY=```
        <img src="assets\access-token-blur-mapbox.png" alt="Auth0 - criar tenant">
    - **DOMÍNIO DA APLICAÇÃO**
      Na configuração atual a aplicação está rodando localmente na porta 3000. Se você não mudou então digite `http://localhost:3000` em `VITE_MY_WEBSITE=`.
    <br />
    
    - **SERVIDOR**
      Para o servidor que cuida do banco de dados e da autenticação está configurado para rodar localmente na porta 3333. Se você não mudou então digite `http://localhost:3333` em `VITE_API_URL=`.
<br />

4. Execute a aplicação: 
    ```sh
    # Na raiz do projeto backend abra o terminal e execute o comando 
    $ yarn dev #ou npm run dev
    # A aplicação inciará na porta 3333 - acesse <http://localhost:3333>
    ```
    
    ```sh
    # Na raiz deste projeto abra outro terminal e execute o comando
    $ yarn dev #ou npm run dev
    # A aplicação inciará na porta 3000 - acesse <http://localhost:3000>
    ```
    Agora você pode acessar a aplicação na web 🤝

## Funcionalidades

- [x] Listagem dos produtos na página principal;
- [X] Produtos listados devem ser limitados à quantidade deles no inventário;
- [X] Produtos adicionados no carrinho devem ser armazenados em cookie;
- [X] A aplicação deve ter uma página para o usuário indicar em um mapa seu local de entrega;
- [X] O mapa deve ter restrição com o alcance de entrega;
- [X] Na página de checkout...
  - [x] o usuário pode gerenciar seus produtos;
  - [X] o formulário deve conter validação;
  - [X] o usuário pode utilizar dados do mapa para complementar seu endereço de entrega;
  - [X] apenas usuários cadastrados podem realizar pedidos;
- [X] Ao finalizar o pedido o usuário é enviado para uma página que indica que seu pedido foi processado;
- [X] A aplicação deve ter uma página de dashboard para cada usuário cadastrado para informar detalhes de todos seus pedidos processados;
- [x] Tema Claro/Escuro;
- [X] Responsividade para larguras mínimas de 320px e máximas de 1440px.

## Layout

<div>
    <p>A implementação da interface foi construída conforme o layout fornecido a seguir. Para observar o layout no Figma acesse:</p>
    <p align="center">
        <a href="https://www.figma.com/file/L6cEr8cDgMfaQfbjhf9t3b/ignite-update-coffee-delivery-i">
            <img alt="Link do site" src="https://img.shields.io/static/v1?label=Figma&message=layout&color=FFC700&style=flat-square&logo=figma" />
        </a>
    </p>
</div>


## Visão do projeto

### Gerenciamento do carrinho em cookie
<img src="/assets/coffee_delivery_cart.gif" alt="Gerenciamento do carrinho em cookie">

### Tema claro/escuro
<img src="/assets/coffee_delivery_light.gif" alt="Tema claro">
<img src="/assets/coffee_delivery_dark.gif" alt="Tema escuro">

### Cadastro e login
<img src="/assets/coffee_delivery_signup_signin.gif" alt="Cadastro e login">

### Responsividade
<img src="/assets/coffee_delivery_responsividade.gif" alt="Responsividade">

## Agradecimento

<table width="100%" align="center">
    <tr>
        <th>
            <a href="https://rocketseat.com.br/">
                <img width="100" height="150" src="/assets/rocketseat.svg">
                <br /><sub><b>Rocketseat</b></sub>
            </a>
        </th>
    </tr>
</table>

## Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Autor

Feito por Diego Gonçalves, contato:

[![Badge](https://img.shields.io/static/v1?label=Linkedin&message=Diego%20Gonçalves&color=208BEE&style=flat-square&logo=linkedin&link=https://www.linkedin.com/in/diego-goncalves1990)](https://www.linkedin.com/in/diego-goncalves1990)
[![Badge](https://img.shields.io/static/v1?label=Gmail&message=die.goncalves1990@gmail.com&color=EA5134&style=flat-square&logo=gmail&link=mailto:die.goncalves1990@gmail.com)](mailto:die.goncalves1990@gmail.com)
