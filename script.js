const cpf = document.getElementById("cpf")

cpf.oninput = function () {
    if (this.value.length > 11) {
        this.value = this.value.slice(0, 11); 
    }
}

function mask(o, f){
    v_obj=o
    v_fun=f
    setTimeout("execmask()", 1)
}

function execmask(){
    v_obj.value = v_fun(v_obj.value)
}

function mtel(v){
    v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}

function id(el){
	return document.getElementById(el);
}

window.onload = function(){
	id('phone').onkeyup = function(){
		mask(this, mtel);
	}
}