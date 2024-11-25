# 🏃‍♀️ Speed Run Ethereum [![Status do Netlify](https://api.netlify.com/api/v1/badges/f925ecf3-0b4b-4545-8412-7b860c76b7f1/deploy-status)](https://app.netlify.com/sites/wonderful-kirch-4ab41a/deploys)

![Miniatura SRE](./packages/react-app/public/thumbnail.png)

O Speed Run Ethereum tem como objetivo fornecer um caminho de aprendizado estruturado para integrar desenvolvedores ao Ethereum.

[🏃‍♀️Speed Run para Desenvolvedores Ethereum](https://medium.com/@austin_48503/%EF%B8%8Fethereum-dev-speed-run-bd72bcba6a4c) com uma estrutura para enviar desafios, receber feedback de construtores ethereum e, no processo, desbloquear novos desafios e provas de conclusão.

---

## Configuração do projeto

Obtenha o código do projeto:

```bash
git clone git@github.com:BuidlGuidl/SpeedRunEthereum.git

cd SpeedRunEthereum
```

Install dependencies:

```bash
yarn install
```

Start the backend service:

```bash
yarn backend
```

In a new terminal, start the frontend:

```bash
yarn start
```

Neste ponto, você deve ter o aplicativo disponível em <http://localhost:3000>. Por padrão, um arquivo JSON local (`packages/backend/local_database/local_db.json`) é usado como banco de dados. Isso é destinado para testes e demonstração. Para configurar para uso em produção, fornecemos um adaptador de banco de dados Firebase. Você também pode criar facilmente seu próprio adaptador de banco de dados (verifique `packages/backend/services/db.js`).

---

## Configuração do Firebase (opcional)

Se você quiser usar o Firebase (firestore) para armazenamento de dados, você precisará criar um projeto Firebase e baixar a configuração da chave da conta de serviço. Você pode gerar e baixar o arquivo da conta de serviço em <https://console.cloud.google.com/> seguindo os passos: 1.) selecione seu projeto Firebase, 2.) vá para IAM & Admin > Service Accounts, 3.) crie uma conta de serviço ou clique em uma já existente, 4.) vá para as chaves dessa conta, e 5.) Adicionar Chave > Criar chave e selecione o tipo de chave JSON.

Em seguida, você precisará criar um arquivo `.env` em `packages/backend/` com `DATABASE_SERVICE=firebase` e adicionar o caminho completo para o arquivo da conta de serviço em `GOOGLE_APPLICATION_CREDENTIALS` (veja um exemplo em `packages/backend/.env.sample`).

Depois execute novamente:

```bash
yarn backend
```
