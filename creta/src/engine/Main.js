export default function main(file)  {
    file.addEventListener("change", function () {
        var reader = new FileReader();
        reader.onload = function (progressEvent) {
            console.log(this.result);
        };
        reader.readAsText(this.files[0]);
    });
}

