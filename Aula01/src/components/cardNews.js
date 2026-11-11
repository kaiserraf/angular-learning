class cardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());

    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right");

        const autor = document.createElement("span");
        autor.textContent = this.getAttribute("autor");

        const link = document.createElement("a");
        link.textContent = this.getAttribute("link");
        link.href = this.getAttribute("url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("newsContent");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("imageUrl");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(link);
        cardLeft.appendChild(newsContent);
        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `
        .card{
            width: 80%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }

        .card_left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }

        .card_left > h1{
            margin-top: 10px;
            font-size: 25px;
        }

        .card_left > p{
            color: rgb(70 70 70);
        }

        .card_left > soan{
            font-weight: 400;
        }
        `

        return style;
    }
}

customElements.define('card-news', cardNews);