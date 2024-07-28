async function padown_sleep(milliseconds) {
    await new Promise(resolve => {
        return setTimeout(resolve, milliseconds)
    });
};

async function padown_downloadPDF() {
    for (let i = 0; i < $("#ddl_Pages > option").length; i++) {
        DownloadPagePdf();
        await padown_sleep(1000);
        if (i < $("#ddl_Pages > option").length - 1) {
            NextPage();
        }
        await padown_sleep(3000);

    }

    goDefaultView()
    alert("Download complete - check for " + $("#ddl_Pages > option").length + " files.");
}

document.addEventListener("DOMContentLoaded", function() {
    const main_menu = document.getElementById("main_menu");
    const list_one = main_menu.getElementsByClassName("list_one")[0];

    if (list_one) {
        const downBtnListItem = document.createElement("li");
        downBtnListItem.classList.add("action", "action_page");
        const downBtn = document.createElement("p");
        downBtn.classList.add("si", "si-cloud-download");
        downBtn.addEventListener("click", padown_downloadPDF);
        downBtnListItem.appendChild(downBtn);
        list_one.appendChild(downBtnListItem);
    }

    // cleanup of GDPR message for daily star
    document.getElementById('gdpr').remove()
 });
