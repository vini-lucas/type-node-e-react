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

<hr>

### PASSOS PARA RODAR O PROJETO (depois de tê-lo clonado)

Instalar o restante das dependencias necessárias:
```
npm install
```