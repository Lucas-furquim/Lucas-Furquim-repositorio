# Portfólio

Este é o código-fonte do meu site de portfólio, desenvolvido com HTML, CSS e Tailwind CSS, e um pouco de Javascript para animações O site apresenta meus projetos, habilidades e informações de contato, e mostra também as linguagens que tenho conhecimento

## Visite o site

Você pode visitar o site em: https://furquimdev.netlify.app

## Tecnologias Utilizadas

- **HTML**: Estrutura do site.
- **CSS**: Estilização customizada.
- **Javascript**: Para animações e efeitos no site
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida e responsiva previnindo o uso externo de css.

## Instalação

Para clonar e executar este projeto localmente, siga estas etapas:

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd seu-repositorio
    ```
3. Abra o arquivo `index.html` em um navegador web para visualizar o site.

4. Para conseguir utilizar o Framework sem problemas

  vá até o diretorio do site via git, e utilize o comando abaixo.
    ```bash
    npm run dev 
    ```
    Dessa forma o Framework ira atualizar o arquivo style.min.css para o codigo do style.css ser importado automaticamente 

## Estrutura do Projeto

```markdown
- index.html: Página principal do portfólio.
- contato.html: Página de contato do portfólio.
- projetos.html: Página dos projetos do portfólio.
- style.css: Contém os arquivos de estilo personalizados.
- style.min.css: Contém os arquivos padrão do framework css, junto com os arquivos personalizados.
- script.js: contem o arquivo em js sendo importado todas funções utilizadas no site em um lugar só.
- /js: nessa pasta esta todas as funções utilizadas no site.
- /img: Contém as imagens usadas no site.
- tailwind.config.js: esse é o arquivo de configuração do framework
