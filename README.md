# **Angular Base to Monster** ![Black panther](favicon.png)

Esse projeto foi gerado pelo [Angular CLI](https://github.com/angular/angular-cli) na versão 8.2.0.

---

## Quick Start Guide to become the Monster

1. Instale [nvmw](https://github.com/coreybutler/nvm-windows) na sua maquina.     
 ---
   é uma forma de gerenciar varias versões do nodejs, vai facilitar a sua vida se precisar de versões diferentes, como agora.
   
  *   Entre nesse [link](https://github.com/coreybutler/nvm-windows/releases), procure por nvm-setup.exe, e baixe , e desinstale o nodejs padrão da sua maquina. (se você tiver, as coisas podem ficar complexas se manter os dois)
  
  * logo após instalar o nvm, abra o seu terminal (o powershell), e instale esta versão do node.
  
  
```bash
  nvm install 14.17.3
```
 * e logo em seguida
```bash
  nvm use 14.17.3
```
  * Para checar a versão instalada na sua máquina, digite node -v em um terminal/console. 
  
### __não esqueça de se certificar que as versões estão certas, e que tudo está corretamente configurado__

  * O Angular, Angular CLI, e demais aplicações que utilizam Typescript dependem de funcionalidades que estão presentes em bibliotecas do Nexus. Para fazer o download e instalar as bibliotecas npm, precisamos do npm para gerenciar as dependências localmente.
  Por padrão o npm client (command line interface) vem instalado no Node.js por padrão.

    - Para checar que está devidamente instalado na sua máquina, digite `npm -v` em um terminal/console. Para atualização ou trabalho com outras versões do npm, utilize `npm install npm@latest -g`.
    - Para checar que o angular CLI esta devidademente instalado em sua maquina, digite `ng version`

# Instalar o Angular na máquina


Agora que tudo esta corretamente configurado, e você esta certo que tudo esta perfeitamente funcionando. Instale o [Angular CLI](https://angular.io/cli)  com este comando. 

```bash
npm install -g @angular/cli
```

Porém, no nosso caso, estaremos utilizando a versão 8 do angular, então, rode esse comando.

```bash
npm install -g @angular/cli@8.2.0
```

E por final, entre na pasta do projeto que você clonou e utilize o comando abaixo para instalar as dependencias, certifique-se de manter tudo na versão que esta no package.json
```bash
npm install
```

- Guia rapido de comandos do CLI do angular:
  - Execute `ng serve` para um servidor dev. Navegue até `http://localhost:4200/`. O aplicativo será recarregado automaticamente se você alterar qualquer um dos arquivos de origem.
  
  - Execute `ng generate component <nome-componente>` para gerar um novo componente. Você também pode usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.
  
  -  Execute `ng build` para compilar o projeto. Os artefatos de construção serão armazenados no diretório `dist/`.
  
  - Execute `ng test` para executar os testes de unidade via [Karma](https://karma-runner.github.io).  
  
  - Execute `ng e2e` para executar os testes de ponta a ponta por meio de uma plataforma de sua escolha. Para usar este comando, você precisa primeiro adicionar um pacote que implemente recursos de teste de ponta a ponta.
  
  - Use `ng help` para consultar os comandos da cli.
  
  -  Para mais ajuda, duvidas ou quaisquer problemas, contate o Sairu (Urias) ou o Chico (Francisco Santana).
  
## Você é um pantera agora, então certifique-se de manter seus commits organizados.

 Existem alguns arquivos mandatorios que você precisa manter, configurar, ou manter atenção.

  *  tsconfig.json - Localizado na raiz da aplicação, armazena configurações do projeto, caminhos, sinalizadores.
  
  *  tslint.json - Especifica informações sobre o linter. Ele ajuda a manter seu codigo limpo, lembre-se de manter o codigo organizado e bem documentado.
  
  *  package.json - Em conjunto com o tsconfig.json especifica configurações dos pacotes da aplicação. Certifique-se de manter as versões como estão. ou pode dar conflito de dependencias em seu projeto.
  
  * dist/ - Pasta que recebe o projeto após o build e transpilação (não é necessário versionar esta pasta, quando você subir o projeto).
