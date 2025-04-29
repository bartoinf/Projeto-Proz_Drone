const arrayDepoimentos = [
    {
      depoimento: "A Drone Proz oferece o melhor curso de drones. Intrutores excelentes!",
      nomeDepoimento: "Mariana Silva"
    },
    {
        depoimento: "Aprendi muito com as aulas práticas de mapeamento aéreo. Recomendo!",
        nomeDepoimento: "Carlos Eduardo"
    },
    {
        depoimento: "Ótima abordagem e suporte contínuo. Me sinto preparado!",
        nomeDepoimento: "Ana Paula"
      },    

  ]

  const main = document.querySelector("main")

  for (let i in arrayDepoimentos){
    const article = document.createElement("article")
    article.innerHTML = `
    <h2 class="depoimento">${arrayDepoimentos[i].depoimento}</h2>
    <p class="nomeDepoimento">${arrayDepoimentos[i].nomeDepoimento}</p>
    `
    main.append(article)
  }