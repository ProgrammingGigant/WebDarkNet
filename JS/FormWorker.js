const form=document.getElementById("form");
form.addEventListener("submit",formSend);

async function formSend(e)
{
    e.preventDefault();

    let Error=formValidate(form);

    let formData=new FormData(form);

    if(Error===0)
    {
        form.classList.add("_sending");
        let response=await fetch('sendmail.php', {
        method: 'post',
        body: formData
        });
        if(response.ok)
        {
            let result=await response.json();
            alert(result.message);
            form.reset();
            form.classList.remove("_sending");
        }
        else
        {
            alert("Ошибка отправки.");
            form.classList.remove("_sending");
        }
    }
    else
    {
        alert("Заполните обязательные поля");
    }
}
function formValidate(form)
{
    let Error=0;
    let formReq=document.querySelectorAll("._req");
    for(let i=0;i<formReq.length;i++)
    {
        const input=formReq[i];
        formRemoveError(input);

        if(input.classList.contains("_email"))
        {
            if(emailTest(input))
            {
                formAddError(input);
                Error++;
            }
        }
        else
        {
            if(input.value==='')
            {
                formAddError(input);
                Error++;
            }
        }
    }
    return Error;
}

function formAddError(input)
{
    input.parentElement.classList.add("_error");
    input.classList.add("_error");
}

function formRemoveError(input)
{
    input.parentElement.classList.remove("_error");
    input.classList.remove("_error");
}

function emailTest(input)
{
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}