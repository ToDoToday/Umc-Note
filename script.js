function enterkey(e) {
    const text = document.getElementById('inputdata');
    const Enterdata = text.value
    const here = document.getElementById('todolist');
    const there = document.getElementById('donelist')
    const code = e.code;


    if((code == 'Enter') && (Enterdata != '')){
        const newli = document.createElement('Li')
        newli.id = 'new-li'
        const btn = document.createElement('button');
        let btntext = document.createTextNode('완료');
        const newhr = document.createElement('hr');
        newhr.id = 'fixed-hr'
        const newlitext = document.createTextNode(Enterdata);
        btn.appendChild(btntext);
        newli.appendChild(newlitext);
        newli.appendChild(btn);
        newli.appendChild(newhr);
        here.appendChild(newli)
        

        text.value = ''
        btn.addEventListener('click', function(e){
            if( btntext.nodeValue ==='완료'){
                btntext.nodeValue ='삭제' 
                there.appendChild(newli)
            } else {
                newli.remove()
            }
        });
    }
}

