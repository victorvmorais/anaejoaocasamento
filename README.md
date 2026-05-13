# 💍 Site de Casamento — Ana Vanessa & João Pedro

Site one-page de casamento desenvolvido com HTML, CSS e JavaScript puro, pronto para publicação no **GitHub Pages**.

---

## Estrutura do projeto

```
wedding-site/
│
├── index.html
├── README.md
│
├── assets/
│   ├── images/
│   │   ├── hero.jpg       ← foto principal (fundo do hero)
│   │   ├── casal-01.jpg   ← foto na seção "Nossa história"
│   │   └── casal-02.jpg   ← foto na seção "Recepção"
│   └── icons/
│
├── css/
│   └── style.css
│
└── js/
    └── script.js
```

---

## 1. Como substituir as imagens

Coloque suas fotos na pasta `assets/images/` com exatamente os nomes abaixo:

| Arquivo         | Onde aparece              | Formato ideal      |
|-----------------|---------------------------|--------------------|
| `hero.jpg`      | Fundo da seção principal  | Paisagem, 1920×1080 ou maior |
| `casal-01.jpg`  | Seção "Nossa história"    | Retrato, 800×1000 ou similar |
| `casal-02.jpg`  | Seção "Recepção"          | Retrato, 800×1000 ou similar |

> Enquanto as fotos não existirem, o site exibe placeholders elegantes em verde oliva.

---

## 2. Como editar textos

Abra o arquivo `index.html` em qualquer editor de texto (VS Code, Bloco de Notas, etc.) e localize a seção desejada pelos comentários `<!-- NOME DA SEÇÃO -->`.

Os textos estão diretamente no HTML e podem ser editados livremente.

---

## 3. Como alterar os presentes e valores

Abra `js/script.js` e edite o array `gifts` no início do arquivo:

```js
const gifts = [
  { id: 1, name: "Nome do presente", emoji: "🎁", price: 150 },
  // ...
];
```

- `name` → texto que aparece no card e no modal
- `emoji` → emoji decorativo do card
- `price` → valor em reais (número, sem "R$")

---

## 4. Como alterar a chave Pix

Abra `js/script.js` e edite as duas primeiras constantes:

```js
const PIX_KEY   = "sua.chave@pix.com"; // CPF, e-mail, telefone ou chave aleatória
const PIX_OWNER = "Ana Vanessa";        // Nome exibido no modal
```

---

## 5. Como criar a planilha no Google Sheets

1. Acesse [sheets.google.com](https://sheets.google.com) e crie uma **nova planilha**.
2. Nomeie-a como quiser (ex: *Presentes — Casamento AJ*).
3. Copie o **ID da planilha** da URL:
   ```
   https://docs.google.com/spreadsheets/d/SEU_ID_AQUI/edit
   ```
4. Guarde esse ID — ele será usado no Apps Script.

---

## 6. Como configurar o Google Apps Script

1. Na planilha criada, clique em **Extensões → Apps Script**.
2. Apague todo o conteúdo do editor e cole o código abaixo:

```js
const SHEET_ID   = "COLE_AQUI_O_ID_DA_PLANILHA";
const SHEET_NAME = "Presentes";

function doPost(e) {
  try {
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);

    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
    }

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Data/Hora",
        "Nome do convidado",
        "Telefone",
        "Presente escolhido",
        "Valor"
      ]);
    }

    const data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date(),
      data.nomeConvidado || "",
      data.telefone      || "",
      data.presente      || "",
      data.valor         || ""
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Substitua `COLE_AQUI_O_ID_DA_PLANILHA` pelo ID copiado no passo anterior.
4. Salve o projeto (Ctrl+S ou ícone de disquete).

---

## 7. Como publicar o Apps Script como Aplicativo da Web

1. No editor do Apps Script, clique em **Implantar → Nova implantação**.
2. Clique no ícone de engrenagem e selecione **Aplicativo da Web**.
3. Preencha:
   - **Descrição:** Presentes Casamento AJ
   - **Executar como:** Eu (minha conta Google)
   - **Quem tem acesso:** Qualquer pessoa
4. Clique em **Implantar**.
5. Autorize o acesso quando solicitado.
6. Copie a **URL do aplicativo da Web** exibida.

> ⚠️ A URL tem o formato:
> `https://script.google.com/macros/s/SEU_ID/exec`

---

## 8. Como colar a URL no script.js

Abra `js/script.js` e substitua o valor da constante:

```js
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/SEU_ID/exec";
```

---

## 9. Como publicar no GitHub Pages

### 9.1 — Crie o repositório

1. Acesse [github.com](https://github.com) e crie um **novo repositório público**.
2. Nomeie-o (ex: `casamento-ana-e-joao`).

### 9.2 — Envie os arquivos

Via interface web do GitHub:
1. Clique em **Add file → Upload files**.
2. Arraste toda a pasta `wedding-site/` (ou seus arquivos internos).
3. Clique em **Commit changes**.

Via terminal (Git):
```bash
cd wedding-site
git init
git add .
git commit -m "feat: site de casamento"
git remote add origin https://github.com/seu-usuario/casamento-ana-e-joao.git
git push -u origin main
```

### 9.3 — Ative o GitHub Pages

1. No repositório, vá em **Settings → Pages**.
2. Em **Source**, selecione **Deploy from a branch**.
3. Branch: `main` / Folder: `/ (root)`.
4. Clique em **Save**.

Após alguns minutos o site estará disponível em:
```
https://seu-usuario.github.io/casamento-ana-e-joao/
```

---

## Tecnologias utilizadas

- HTML5 semântico
- CSS3 com variáveis customizadas
- JavaScript ES2020 puro (sem frameworks)
- Google Fonts: Cormorant Garamond + Inter
- Google Apps Script (backend para registro de presentes)

---

*Feito com carinho para Ana Vanessa & João Pedro — 05.06.2026* 💚
