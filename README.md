### REQUISITOS

 - Node JS 22 ou superior; 
 - MySql última versão.

<hr>

### ANOTAÇÕES

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

### PASSOS PARA RODAR O PROJETO (depois de tê-lo clonado)

Instalar o restante das dependencias necessárias:
```
npm install
```