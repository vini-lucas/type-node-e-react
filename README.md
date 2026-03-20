### NODE REQUISITOS

 - Node JS 22 ou superior.

<hr>

### NODE COMO RODAR O PROJETO (depois de tê-lo clonado):

Instalar as dependências necessárias que encontram-se no package.json:
```
npm install
```
<hr>

### NODE ANOTAÇÕES

Criar o arquivo package:
```
npm init (adicionar o -y se quiser que crie tudo direto)
```

Instalar o Express para gerenciar requisições, rotas e URLs, entre outras funcionalidades:
```
npm i express
```

Instalar o Nodemon (após instalar é recomendável que reinicie o PC):
```
npm install -g nodemon
```

Instalar os pacotes para suporte ao TypeScript (o "-dev" significa que a dependência será utilizada somente em desenvolvimento, não em produção):
```
npm i --save-dev @types/express
npm i --save-dev @types/node
```

Instalar o compilador do projeto com TypeScript:
```
npm i --save-dev ts-node
```

Gerar o arquivo de configuração para o TS:
```
npx tsc --init
```

Compilar o arquivo TypeScript:
```
npx tsc
```

<hr>
