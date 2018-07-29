let data = [];
        
        localData = JSON.parse(localStorage.getItem('data'));
        if(localData != null){
            data = localData;
        }
        
        const inputDOM = document.getElementById('inputByUser');
        
        const buttonDOM = document.getElementById('button');      
        
        const listDOM = document.getElementById('list');

        buttonDOM.addEventListener('click', function(){
            const inputByUser = inputDOM.value;
            data.push(inputByUser);
            render();
            // listDOM.innerHTML = listDOM.innerHTML + "<li>" + inputByUser + "</li>";
            inputDOM.value = "";
            localStorage.setItem('data', JSON.stringify(data));
            // alert('hello');
            
        });

        function render(){
            let html = "";
            for(var i = 0; i < data.length; i++){
                // html = html + "<li>" + data[i] + "</li>";
                html = html + `<li class="list-group-item" onClick="remove(${i})">${data[i]}</li>`;
            }

            listDOM.innerHTML = html;
        }

        render();

        function remove(id){
            data.splice(id, 1);
            localStorage.setItem('data', JSON.stringify(data));
            render();
        }
