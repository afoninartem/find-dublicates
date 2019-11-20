const obj = {};
let str = '';
document.getElementById('file').onchange = function(){
    let file = this.files[0];

    let reader = new FileReader();
    reader.onload = function(progressEvent){
        let lines = this.result.split('\n');
        for (let line = 0; line < lines.length; line++){
            // console.log(lines[line]);
            let str = lines[line];
            let articul = str.split(' ')[0];
            // console.log(articul);
            if (obj[articul] === undefined){
                obj[articul] = 1;
            } else {
                obj[articul]++;
            }
        }
        console.log(obj);
    }
    reader.readAsText(file);
}

document.getElementById('show').onclick = function(){
    for (let i in obj){
        if (obj[i] > 1) {
            str += i + '<br>';
            document.getElementById('out').innerHTML = str;
        }
    }
}
