export const onServiceWorkerUpdateFound = () => {
    const answer = window.confirm(
        `Surgiram mais algumas palavras... ` +
        `Deseja atualizar a página para obter a última versão?`
    )

    if (answer === true) {
        window.location.reload()
    }
}
