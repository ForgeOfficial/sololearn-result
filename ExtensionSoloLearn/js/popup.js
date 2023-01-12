document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("github").addEventListener("click", () => {
        window.open("https://github.com/ForgeOfficial", '_blank');
    })
    axios.get('https://raw.githubusercontent.com/ForgeOfficial/sololearn-result/main/list.json').then((r) => {
        window.support = r.data.support;
        document.getElementById("certifList").innerHTML = `${window.support.map(s => `<div class="iGLvUOiJECJeAeTRqZUHJ _26lpUdMsXtY8kP4PwzCA-c" id="${s.name}">${s.name}</div>`).join("\n")}`;
        window.support.forEach(s => {
            document.getElementById(s.name).addEventListener('click', () => {
                window.open(s.link, '_blank')
            });
        })
    });
})

