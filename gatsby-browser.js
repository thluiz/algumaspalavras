export const onServiceWorkerUpdateFound = () => {
    const answer = window.confirm(
        `Mais algumas palavras publicadas... \r\n` +
        `Deseja atualizar a página para obter as últimas atualizações?`
    )

    if (answer === true) {
        window.location.reload(true);
    }
}
