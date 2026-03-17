### TYPESCRIPT REQUISITOS

 - Node JS 22 ou superior; 
 - MySql última versão.

<hr>

### TYPESCRIPT ANOTAÇÕES

Criar o package.json:
```
npm init
```

Instalar o TypeScript como uma dependência de desenvolvimento:
```
npm install --save-dev typescript
```

Criar o arquivo 'tsconfig.json', executar quando o TypeScript foi instalado somente no projeto:
```
npx tsc --init
```

Compilar os arquivos TypeScript:
```
npx tsc
```

Fazer com que o compilador fique monitorando os arquivos TypeScript e compile-os automaticamente a partir de qualquer alteraçaõ feita:
```
npx tsc -watch
```

Executar o arquivo JavaScript compilado:
```
node CAMINHO_DO_ARQUIVO
```

Diferença de var, const e let:
```
var exemplo = 'exemplo'; // Pode ter o valor alterado e pode ser usada em qualquer local.
const exemplo = 'exemplo'; // Não pode ter o valor alterado e funciona em qualquer local.
let exemplo = 'exemplo'; // Pode ter o valor alterado mas funciona somente dentro da função que tiver.
```

Criar objeto:
```
// Criar variável do tipo objeto
interface Client {
    name: string;
    amount: number;
}

let client: Client {
    name: 'Lucas',
    amount: 20
};
```

<hr>

### PASSOS PARA RODAR O PROJETO TYPESCRIPT (depois de tê-lo clonado)

Instalar o restante das dependencias necessárias:
```
npm install
```

<hr>
<hr>
<hr>

### REACT REQUISITOS

 - Node JS 22 ou superior;
 - NPX última versão.

<hr>

### PASSOS PARA RODAR O PROJETO REACT (depois de tê-lo clonado)

Instalar o restante das dependencias necessárias:
```
npm install
```

<hr>

### REACT ANOTAÇÕES

Criar o projeto com React e Next JS:
```
npx create-next-app@latest .
```

Rodar o projeto (acessá-lo em: http://localhost:3000/):
```
npm run dev
```

Síntaxe básica para criar uma arrow function:
```
const Home = () => {
  return(
    <main>
      <h2>Bem-vindo!</h2>
    </main>
  )
}
export default Home;
```

Passar parâmetro para uma função (props) e utilizando children, ou seja, escrever algo dentro do objeto na view.
Criando-a no componente:
```
import { ReactNode } from "react"; // se for utilizar children precisa importá-lo.

interface UserProps{
    name: string;
    children?: ReactNode; // O "?" informa que o elemento do objeto não é obrigatório.
}

const User = ({name, children}: UserProps) => {
    return (
        <div>
            <p>Usuário: {name}</p>
            {children && <div>{children}</div>}
        </div>
    )
}
export default User;
```

Depois, imprimindo-os na view:
```
import User from "../components/User";

const Home = () => {

  const userName = "Lucas";

  return (
    <main>
      <User name={userName}>
        <p>Utilizando Children</p>
      </User>
      <h2>Bem-vindo!</h2>
    </main>
  )
}

export default Home;
```

Utilizando o useState,
Precisa informar o 'use client' para importá-lo:
```
'use client'
import { useState } from "react";

const Home = () => {

  const [nameUser, setNameUser] = useState("Lucas"); // o valor padrão começa com "Lucas".

  return (
    <main>
      <p>Nome: {nameUser}</p>
      <button onClick={() => setNameUser("Messi")}>Alterar</button> // sempre que for alterá-lo usa-se o setNameUser passando no parâmetro o novo valor que irá receber.
      <h2>Bem-vindo!</h2>
    </main>
  )
}

export default Home;
```

Utilizando o useEffect,
Ele realiza os comportamentos passados para ele caso o seu segundo parâmetro sofra quaisquer alterações:
```
'use client';

import { useEffect, useState } from "react";

const Home = () => {

  const [productId, setProductId] = useState(1);
  const [nameId, setNameId] = useState("Notebook");
  const [priceId, setPriceId] = useState(1000);
  const [userId, setUser] = useState({
    id: 0,
    name: "Indefinido"
  });

  function searchProduct(){
    setNameId("Notebook atualizado");
    setPriceId(5000);
    setProductId(10);
    setUser({
      id: 10,
      name: "Lucas"
    });
  }

  useEffect(() => {
    searchProduct();
  },[productId]) // Quando a página recarregar o useEffect será executado, após isto ele será chamado somente se productId sofrer alteração. Caso queira que ele rode somente quando a página carregar usa-se [].

  return (
    <main>
      <p>ID do produto: {productId}</p>
      <p>Nome do produto: {nameId}</p>
      <p>Preço do produto: {priceId}</p>
      <hr />

      <p>ID do usuário: {userId.id}</p>
      <p>Nome do produto: {userId.name}</p>
    </main>
  )
}

export default Home;
```

URL amigável (somente anotação, funcionalidade do Next JS, não do React):
```
 - O nome da pasta define a url (ex.: Dashboard/page.tsx => URL: /dashboard);
 - O nome do arquivo precisa ser um destes para funcionar:
 | - page.tsx => página;
 | - layout.tsx => layout;
 | - loading.tsx => loading;
 | - error.tsx => error.
 - O nome da constante do arquivo NÃO define a URL.   
Resumo: o nome do diretório define a URL, contanto que o nome do arquivo seja um dos 4 citados acima, lembrando que eles precisam estar dentro do diretório src/app.
```
