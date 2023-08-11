A aplicação web é desenvolvida em Angular e a aplicação backend é desenvolvida em Java utilizando o Spring Framework.

## Instalação do Node.js 16:

1. Acesse o site de downloads do Node.js: https://nodejs.org/ja/blog/release/v16.16.0

2. Baixe o instalador da versão 16 do Node.js para o seu sistema operacional.

3. Execute o instalador baixado e siga as instruções na tela para completar a instalação.

4. Após a instalação, você pode verificar a versão do Node.js e do npm (gerenciador de pacotes do Node) no terminal usando os comandos:

   ```
   node -v
   npm -v
   ```

## Instalação do Angular CLI:

1. Após ter o Node.js instalado, abra um terminal ou prompt de comando, com as permissões de um administrador.

2. Execute o seguinte comando para instalar o Angular CLI globalmente:

   ```
   npm install -g @angular/cli
   ```

3. Aguarde até que a instalação seja concluída. Isso pode levar alguns minutos, dependendo da velocidade da sua conexão.

4. Após a instalação, você pode verificar a versão do Angular CLI usando o comando:

   ```
   ng version
   ```

Agora, você tem o Node.js 16 e o Angular CLI instalados em seu sistema. Você está pronto para rodar o front da aplicação Angular na pasta `business-registry-web` conforme mencionado anteriormente.

## Configuração e Execução da Aplicação Web (Angular):

1. Abra um terminal na pasta `business-registry-web`.
2. Execute o comando abaixo para instalar as dependências do projeto:

   ```
   npm i --f
   ```

3. Após a conclusão da instalação das dependências, você pode iniciar o servidor de desenvolvimento com o seguinte comando:

   ```
   ng s
   ```

4. Acesse a aplicação web em seu navegador usando o endereço `http://localhost:4200`.

## Configuração e Execução da Aplicação Backend (Java com Spring Framework):

1. Baixe e instale a versão apropriada do JDK 17 a partir do link fornecido: https://www.oracle.com/br/java/technologies/downloads/#jdk17-windows.

2. Escolha uma das IDEs sugeridas, e instale-a.

Seja ela o IntelliJ:
https://www.jetbrains.com/pt-br/idea/download/?section=windows

Ou o Spring Tool Suite:
https://spring.io/tools

3. Abra a pasta `business-registry` em sua IDE escolhida.

4. Aguarde até que a IDE carregue as dependências do projeto.

5. Encontre o arquivo principal (`BusinessRegistryApplication.java`) na estrutura do projeto e execute-o como uma aplicação Java. Isso inicializará o servidor backend.

6. O servidor estará acessível em `http://localhost:8080`.

Lembre-se de que as instruções fornecidas são gerais e podem variar de acordo com as versões específicas das ferramentas que você está usando. Certifique-se de consultar a documentação oficial do Spring e das IDEs para obter instruções detalhadas e atualizadas.

## Instalação do MySQL:

1. Acesse o site de downloads do MySQL: https://dev.mysql.com/downloads/.

2. Escolha a versão apropriada do MySQL Community Server para o seu sistema operacional.

3. Execute o instalador baixado e siga as instruções na tela para completar a instalação.

4. Durante o processo de instalação, você provavelmente será solicitado a configurar uma senha para o usuário root do MySQL. Lembre-se dessa senha, e anote-a, pois você precisará dela mais tarde.

## Configuração Inicial do MySQL:

1. Após a instalação, abra um terminal ou prompt de comando.

2. Para iniciar o servidor MySQL, execute o seguinte comando:

   ```
   mysql.server start
   ```

   Em sistemas Windows, o comando pode ser diferente. Verifique a documentação correspondente.

3. Agora, você pode se conectar ao servidor MySQL usando o cliente de linha de comando. Use o seguinte comando e insira a senha do usuário root quando solicitado:

   ```
   mysql -u root -p
   ```

4. Assim que estiver conectado, você pode começar a executar comandos SQL.

## Criar um Banco de Dados para o Projeto:

1. No cliente MySQL, execute o seguinte comando para criar um novo banco de dados:

   ```sql
   CREATE DATABASE ey_db;
   ```

2. Verifique se o banco de dados foi criado com sucesso usando o seguinte comando:

   ```sql
   SHOW DATABASES;
   ```

3. Inicie o banco de dados usando o seguinte comando:

   ```sql
   USE ey_db;
   ```

## Configuração do Projeto para Usar o MySQL:

No projeto da aplicação backend em Java com Spring, você precisará configurar as propriedades do banco de dados no arquivo de configuração, geralmente chamado `application.properties` ou `application.yml`.

Exemplo de configuração no arquivo `application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/nome_do_banco_de_dados
spring.datasource.username=seu_usuario
spring.datasource.password=sua_senha
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.hibernate.ddl-auto=update
```

Certifique-se de substituir `nome_do_banco_de_dados`, `seu_usuario` e `sua_senha` pelas informações corretas.

Lembre-se de que esses são apenas passos básicos e podem variar dependendo da versão específica do MySQL e do ambiente que você está usando. Consulte a documentação oficial do MySQL e da sua IDE para obter mais detalhes e informações atualizadas.
