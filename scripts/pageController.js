const filesOpen = document.querySelectorAll("div.file-open");
const tabListFiles = document.querySelectorAll("li.tab-files");
const listFilePast = document.querySelectorAll("li.list-file-paste");

function ClosedFiles () {
    for (file of filesOpen) {
        file.style.display = "none";
    };
};

function ClosedTagFile () {
    for (file of tabListFiles) {
        file.className = "tab-files";
    };
};

tabListFiles.forEach(file => {
    file.addEventListener("click", () => {
        const value = file.attributes["data-file-name"].value;

        ClosedFiles();
        ClosedTagFile();

        const element = document.querySelector("div.file-open[data-file-name='" + value + "']")
        element.style.display = "block";
        file.classList.toggle("active");
    });
});

listFilePast.forEach(file => {
    file.addEventListener("click", () => {
        const value = file.attributes["data-file-name"].value;

        ClosedFiles();
        ClosedTagFile();

        const element = document.querySelector("div.file-open[data-file-name='" + value + "']")
        element.style.display = "block";

        const tab = document.querySelector("li.tab-files[data-file-name='" + value + "']");

        tab.classList.toggle("active");
    });
});