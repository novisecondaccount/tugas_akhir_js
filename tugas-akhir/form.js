function buat_login(){
    var elem = document.getElementById("x");
    elem.parentElement.removeChild(elem); //hapus elemeen ini
    var p = document.createElement("P");
    p.className = "tulisan_login"; //memberikan class pada p
    p.innerHTML = "Silahkan Mendaftar";
    var element = document.getElementsByTagName("div")[0];
    element.appendChild(p); //masukan element p ke dalam tag div

    //buat form
    var form = document.createElement("FORM");
    element.appendChild(form);

    //buat label nama
    var labelNama = document.createElement("label")
    labelNama.innerHTML = "Nama User"
    form.appendChild(labelNama)

    //buat input untuk nama
    var input_nama = document.createElement("input")
    input_nama.type = "text"
    input_nama.name = "name"
    input_nama.placeholder = "Nama User..."
    input_nama.className = "form_login"
    form.appendChild(input_nama)
  
    //buat label nomor
    var labelNomor = document.createElement("label")
    labelNomor.innerHTML = "Nomor Handphone"
    form.appendChild(labelNomor)

    //buat input untuk nomor
    var input_nomor = document.createElement("input")
    input_nomor.type = "text"
    input_nomor.name = "nomor"
    input_nomor.placeholder = "Nomor Handphone..."
    input_nomor.className = "form_login"
    form.appendChild(input_nomor)
    
    //buat label
    var label = document.createElement("label");
    label.innerHTML = "Username"
    form.appendChild(label)

    //buat input
    var input_username = document.createElement("input")
    input_username.type = "text"
    input_username.name = "Username"
    input_username.placeholder = "Username atau email..."
    input_username.className = "form_login"
    form.appendChild(input_username )

    //buat label
    var label2 = document.createElement("label");
    label2.innerHTML = "Password"
    form.appendChild(label2)

    //buat input
    var input_password = document.createElement("input")
    input_password.type = "password"
    input_password.name = "password"
    input_password.placeholder = "Password..."
    input_password.className = "form_login"
    form.appendChild(input_password )

    //buat tombol
    var tombol = document.createElement("input")
    tombol.type = "submit"
    tombol.name = "submit"
    tombol.value = "DAFTAR SEKARANG"
    tombol.className = "tombol_login"
    form.appendChild(tombol )


}